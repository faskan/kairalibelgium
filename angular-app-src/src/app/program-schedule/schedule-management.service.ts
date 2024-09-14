import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Schedule } from './schedule.interface';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { LoggedInUserService } from '../forum/service/logged-in-user.service';

@Injectable({
  providedIn: 'root'
})
export class ScheduleManagementService {
  readonly remoteHost = 'https://slforum-xiosrv3ggq-uc.a.run.app';
  readonly localHost = 'http://localhost:8080';
  readonly host = this.remoteHost;

  constructor(private http: HttpClient, private loggedInUserService: LoggedInUserService) {}

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
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.loggedInUserService.getIdToken()
      })
    };
    return this.http.delete(`${this.host}/apis/schedules/${id}`, httpOptions);
  }

  addSchedule(schedule: Schedule) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.loggedInUserService.getIdToken()
      })
    };
    return this.http.post(`${this.host}/schedules`, schedule, httpOptions);
  }

  updateSchedule(id: string, schedule: Schedule) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.loggedInUserService.getIdToken()
      })
    };
    return this.http.put(`${this.host}/schedules/${id}`, schedule, httpOptions);
  }
}
