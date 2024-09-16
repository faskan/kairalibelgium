import { Component } from '@angular/core';
import { Schedule } from '../schedule.interface';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
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
  autoRefresh = false;
  refreshInterval = 5;
  autoRefreshIntervalId: any;
  constructor(private scheduleManagementService: ScheduleManagementService,
              public dialog: MatDialog,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.selectedEventId = this.route.snapshot.paramMap.get('eventId');
    this.loadSchedules();
    const refreshParam = this.route.snapshot.queryParamMap.get('refreshInterval');
    this.refreshInterval = refreshParam ? Number(refreshParam) : 5;
    console.log('Refresh interval:', this.refreshInterval);
    // Set up auto-refresh
    this.autoRefreshIntervalId = setInterval(() => {
      if (this.autoRefresh) {
        this.loadSchedules();
      }
    }, this.refreshInterval * 1000); // Refresh every 5 seconds
  }

  ngOnDestroy(): void {
    // Clear the interval when the component is destroyed
    if (this.autoRefreshIntervalId) {
      clearInterval(this.autoRefreshIntervalId);
    }
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

            const ongoingScheduleIndex = this.activeSchedules.findIndex(schedule => schedule.status.toLowerCase() === 'ongoing');

            // If an ongoing schedule is found, scroll to it
            if (ongoingScheduleIndex !== -1) {
              const element = document.getElementById('schedule-' + ongoingScheduleIndex);
              if (element) element.scrollIntoView();
            }
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
