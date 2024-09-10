import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Schedule } from './schedule.interface';
import { EditScheduleDialogComponent } from './edit-schedule-dialog/edit-schedule-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleManagementService } from './schedule-management.service';

@Component({
  selector: 'app-program-schedule',
  templateUrl: './program-schedule.component.html',
  styleUrls: ['./program-schedule.component.css']
})
export class ProgramScheduleComponent implements OnInit {
  selectedEventId: string | null = null;
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

  onDeleteSchedule(id: string) {
    if (confirm('Are you sure you want to delete this schedule?')) {
      this.scheduleManagementService.deleteSchedule(id)
        .subscribe(() => {
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
        this.scheduleManagementService.addSchedule(result)
          .subscribe(() => {
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
      data: {...schedule}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.scheduleManagementService.updateSchedule(schedule.id, result)
          .subscribe(() => {
            this.loadSchedules();
          });
      }
    });
  }
}
