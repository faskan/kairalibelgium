import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { CookieService } from 'ngx-cookie-service';
import { LoggedInUserService } from './logged-in-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly URL = 'https://slforum-xiosrv3ggq-uc.a.run.app/user';

  constructor(private httpClient: HttpClient,
              private loggedInUserService: LoggedInUserService) { }

  getLoggedInUser(): Observable<User>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + this.loggedInUserService.getIdToken()
      })
    };
    return this.httpClient.get<User>(this.URL, httpOptions);
  }
}
