import { Component } from '@angular/core';
import { Schedule } from '../schedule.interface';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { EditScheduleDialogComponent } from '../edit-schedule-dialog/edit-schedule-dialog.component';

@Component({
  selector: 'app-program-schedule-view-only',
  templateUrl: './program-schedule-view-only.component.html',
  styleUrls: ['./program-schedule-view-only.component.css']
})
export class ProgramScheduleViewOnlyComponent {
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
}
