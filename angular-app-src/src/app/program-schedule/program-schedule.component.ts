import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';
import { Schedule } from './schedule.interface';
import { EditScheduleDialogComponent } from './edit-schedule-dialog/edit-schedule-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-program-schedule',
  templateUrl: './program-schedule.component.html',
  styleUrls: ['./program-schedule.component.css']
})
export class ProgramScheduleComponent implements OnInit {
  selectedEventId: string | null = null;
  schedules: Schedule[] = [];
  activeSchedules: Schedule[] = [];
  cancelledSchedules: Schedule[] = [];
  scheduleModel: Schedule = {} as Schedule;
  editing = false;
  readonly remoteHost = 'https://ezytix.techroots.be/apis';
  readonly localHost = 'http://localhost:8080/apis';
  readonly host = this.localHost;
  constructor(private http: HttpClient,
              public dialog: MatDialog,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.selectedEventId = this.route.snapshot.paramMap.get('eventId');
    this.loadSchedules();
  }

  loadSchedules() {
    if (this.selectedEventId) {
      this.http.get<Schedule[]>(`${this.host}/schedules/event/${this.selectedEventId}`).subscribe((data) => {
        this.schedules = data;
        this.activeSchedules = data.filter(schedule => schedule.status.toLowerCase() !== 'cancelled');
        this.cancelledSchedules = data.filter(schedule => schedule.status.toLowerCase() === 'cancelled');
      });
    }
  }

  onSubmit() {
    if (this.editing) {
      this.http.put(`${this.host}/schedules/${this.scheduleModel.id}`, this.scheduleModel).subscribe(() => {
        this.loadSchedules();
        this.resetForm();
      });
    } else {
      this.scheduleModel.eventId = this.selectedEventId!;
      this.http.post(`${this.host}/schedules`, this.scheduleModel).subscribe(() => {
        this.loadSchedules();
        this.resetForm();
      });
    }
  }

  onDeleteSchedule(id: string) {
    if (confirm('Are you sure you want to delete this schedule?')) {
      this.http.delete(`${this.host}/apis/schedules/${id}`).subscribe(() => {
        this.loadSchedules();
      });
    }
  }

  onAddProgram() {
    const dialogRef = this.dialog.open(EditScheduleDialogComponent, {
      width: '400px',
      data: {
        title: '',
        contactPerson: '',
        scheduledTime: '',
        status: 'Scheduled',
        durationInMinutes: 60,
        eventId: this.selectedEventId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.post(`${this.host}/schedules`, result).subscribe(() => {
          this.loadSchedules();
        });
      }
    });
  }

  moveScheduleUp(index: number) {
    if (index > 0) {
      this.swapSchedules(index, index - 1);
    }
  }

  moveScheduleDown(index: number) {
    if (index < this.schedules.length - 1) {
      this.swapSchedules(index, index + 1);
    }
  }

  swapSchedules(index1: number, index2: number) {
    const schedule1 = this.schedules[index1];
    const schedule2 = this.schedules[index2];

    const tempTime = schedule1.scheduledTime;
    schedule1.scheduledTime = schedule2.scheduledTime;
    schedule2.scheduledTime = tempTime;

    this.schedules[index1] = schedule2;
    this.schedules[index2] = schedule1;

    this.updateScheduleOrder();
  }

  updateScheduleOrder() {
    this.http.post(`${this.host}/schedules/reschedule`, this.schedules).subscribe(() => {
      this.loadSchedules();
      alert('Programs rescheduled successfully!');
    });
  }

  getStatusClass(status: string) {
    switch (status.toLowerCase()) {
      case 'scheduled':
        return 'badge-primary';
      case 'ongoing':
        return 'badge-warning';
      case 'completed':
        return 'badge-success';
      case 'cancelled':
        return 'badge-danger';
      default:
        return 'badge-secondary';
    }
  }

  onEditSchedule(schedule: any) {
    const dialogRef = this.dialog.open(EditScheduleDialogComponent, {
      width: '400px',
      data: { ...schedule }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.put(`${this.host}/schedules/${schedule.id}`, result).subscribe(() => {
          this.loadSchedules();
        });
      }
    });
  }

  calculateNewTime(index: number): string {
    let baseTime = new Date(this.schedules[0].scheduledTime);
    for (let i = 0; i < index; i++) {
      baseTime.setMinutes(baseTime.getMinutes() + this.schedules[i].durationInMinutes);
    }
    return baseTime.toISOString().slice(0, 16);
  }

  resetForm() {
    this.scheduleModel = {} as Schedule;
    this.editing = false;
  }
}
