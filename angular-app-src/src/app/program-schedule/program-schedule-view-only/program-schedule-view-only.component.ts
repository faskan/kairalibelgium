import { Component } from '@angular/core';
import { Schedule } from '../schedule.interface';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { EditScheduleDialogComponent } from '../edit-schedule-dialog/edit-schedule-dialog.component';
import { ScheduleManagementService } from '../schedule-management.service';

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
  isLoading = false;
  constructor(private scheduleManagementService: ScheduleManagementService,
              public dialog: MatDialog,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.selectedEventId = this.route.snapshot.paramMap.get('eventId');
    this.loadSchedules();
  }

  loadSchedules() {
    if (this.selectedEventId) {
      this.isLoading = true;
      this.scheduleManagementService.loadSchedules(this.selectedEventId)
        .subscribe({
          next: (data: { activeSchedules: Schedule[], cancelledSchedules: Schedule[] }) => {
            this.activeSchedules = data.activeSchedules;
            this.cancelledSchedules = data.cancelledSchedules;
            this.isLoading = false;
          },
          error: (error) => {
            console.error('Error loading schedules:', error);
            this.isLoading = false;
          }
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
