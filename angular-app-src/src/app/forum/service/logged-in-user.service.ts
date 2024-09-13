
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInUserService {
  private loggedInUser?: User;

  constructor(private cookieService: CookieService) {
  }
  setIdToken(idToken: string) {
    this.cookieService.set('idToken', idToken);
  }
  setLoggedInUser(user: User) {
    this.loggedInUser = user;
  }

  getLoggedInUser(): User | undefined {
    return this.loggedInUser;
  }

  getIdToken(): string {
    return this.cookieService.get('idToken');
  }
}
