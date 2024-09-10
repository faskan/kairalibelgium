import { HttpClient } from '@angular/common/http';
import { Schedule } from './schedule.interface';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleManagementService {
  readonly remoteHost = 'https://ezytix.techroots.be/apis';
  readonly localHost = 'http://localhost:8080/apis';
  readonly host = this.remoteHost;

  constructor(private http: HttpClient) {}

  loadSchedules(selectedEventId: string) {
    return this.http.get<Schedule[]>(`${this.host}/schedules/event/${selectedEventId}`)
      .pipe(
        map((data: Schedule[]) => {
          const sortedSchedules = [...data].sort((a, b) => new Date(a.scheduledTime).getTime() - new Date(b.scheduledTime).getTime());
          const activeSchedules = sortedSchedules.filter(schedule => schedule.status.toLowerCase() !== 'cancelled');
          const cancelledSchedules = sortedSchedules.filter(schedule => schedule.status.toLowerCase() === 'cancelled');
          return { activeSchedules, cancelledSchedules };
        })

      );
  }

  deleteSchedule(id: string) {
    return this.http.delete(`${this.host}/apis/schedules/${id}`);
  }

  addSchedule(schedule: Schedule) {
    return this.http.post(`${this.host}/schedules`, schedule);
  }

  updateSchedule(id: string, schedule: Schedule) {
    return this.http.put(`${this.host}/schedules/${id}`, schedule);
  }
}
