
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggedInUserService {
  private loggedInUser?: User;
  private loggedInUserSubjectS: Subject<User | undefined> = new Subject<User | undefined>();
  constructor(private cookieService: CookieService,
              private router: Router) {
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

  getLoggedInUserSubject(): Subject<User | undefined> {
    return this.loggedInUserSubjectS;
  }

  getIdToken(): string {
    return this.cookieService.get('idToken');
  }

  logout(): void {
    this.cookieService.delete('idToken');
    this.loggedInUser = undefined;
    this.loggedInUserSubjectS.next(undefined);
    this.router.navigate(['login']);
  }
}
