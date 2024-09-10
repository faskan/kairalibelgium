import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  readonly remoteHost = 'https://ezytix.techroots.be/apis';
  readonly localHost = 'http://localhost:8080/apis';
  readonly host = this.remoteHost;
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
        const sortedSchedules = [...data].sort((a, b) => new Date(a.scheduledTime).getTime() - new Date(b.scheduledTime).getTime());
        this.schedules = sortedSchedules;
        this.activeSchedules = sortedSchedules.filter(schedule => schedule.status.toLowerCase() !== 'cancelled');
        this.cancelledSchedules = sortedSchedules.filter(schedule => schedule.status.toLowerCase() === 'cancelled');
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
      width: '500px',
      data: {
        title: '',
        teamName: '',
        performanceType: '',
        contactPerson: '',
        phoneNumber: '',
        whatsappNumber: '',
        scheduledTime: '',
        status: 'Scheduled',
        durationInMinutes: 5,
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

  onCallPhone(phoneNumber: string) {
    window.open(`tel:${phoneNumber}`, '_self');
  }

  onWhatsApp(whatsappNumber: string) {
    const message = encodeURIComponent('Hello, I am contacting from Kairali Belgium Cultural Program committee.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  }

  getStatusClass(status: string) {
    switch (status.toLowerCase()) {
      case 'scheduled':
        return 'badge-secondary';
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
      width: '500px',
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
}
