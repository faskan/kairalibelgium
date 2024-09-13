
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedInUserService {
  private loggedInUser?: User;
  private loggedInUserSubjectS: Subject<User> = new Subject<User>();
  constructor(private cookieService: CookieService) {
  }
  setIdToken(idToken: string) {
    this.cookieService.set('idToken', idToken);
  }
  setLoggedInUser(user: User) {
    this.loggedInUser = user;
    this.loggedInUserSubjectS.next(user);
  }

  getLoggedInUser(): User | undefined {
    return this.loggedInUser;
  }

  getLoggedInUserSubject(): Subject<User> {
    return this.loggedInUserSubjectS;
  }

  getIdToken(): string {
    return this.cookieService.get('idToken');
  }
}
