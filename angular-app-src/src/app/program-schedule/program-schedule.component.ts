import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';
import { Schedule } from './schedule.interface';

@Component({
  selector: 'app-program-schedule',
  templateUrl: './program-schedule.component.html',
  styleUrls: ['./program-schedule.component.css']
})
export class ProgramScheduleComponent implements OnInit {
  selectedEventId: string | null = null;
  schedules: Schedule[] = [];
  scheduleModel: Schedule = {} as Schedule;
  editing = false;
  readonly remoteHost = 'https://ezytix.techroots.be/apis';
  readonly localHost = 'http://localhost:8080/apis';
  readonly host = this.remoteHost;
  constructor(private http: HttpClient,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.selectedEventId = this.route.snapshot.paramMap.get('eventId');
    this.loadSchedules();
  }

  loadSchedules() {
    if (this.selectedEventId) {
      this.http.get<Schedule[]>(`${this.host}/schedules/event/${this.selectedEventId}`).subscribe((data) => {
        this.schedules = data;
      });
    }
  }

  onSubmit() {
    if (this.editing) {
      this.http.put(`/apis/schedules/${this.scheduleModel.id}`, this.scheduleModel).subscribe(() => {
        this.loadSchedules();
        this.resetForm();
      });
    } else {
      this.scheduleModel.eventId = this.selectedEventId!;
      this.http.post('/apis/schedules', this.scheduleModel).subscribe(() => {
        this.loadSchedules();
        this.resetForm();
      });
    }
  }

  onEditSchedule(schedule: any) {
    this.scheduleModel = { ...schedule };
    this.editing = true;
  }

  onDeleteSchedule(id: string) {
    if (confirm('Are you sure you want to delete this schedule?')) {
      this.http.delete(`/apis/schedules/${id}`).subscribe(() => {
        this.loadSchedules();
      });
    }
  }

  onDrop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.schedules, event.previousIndex, event.currentIndex);
    this.updateScheduleOrder();
  }

  updateScheduleOrder() {
    const updatedSchedules = this.schedules.map((schedule, index) => {
      const newScheduledTime = this.calculateNewTime(index);
      return { ...schedule, scheduledTime: newScheduledTime };
    });

    this.http.post(`/apis/schedules/reschedule`, updatedSchedules).subscribe(() => {
      this.loadSchedules();
      alert('Programs rescheduled successfully!');
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
