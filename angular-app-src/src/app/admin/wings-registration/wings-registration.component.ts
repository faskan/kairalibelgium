import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-wings-registration',
  templateUrl: './wings-registration.component.html'
})
export class WingsRegistrationComponent {

  reservations: Reservation[] = [];
  readonly remoteHost = 'https://ezytix-xiosrv3ggq-ew.a.run.app';
  readonly localHost = 'http://localhost:8080';

  constructor(private httpClient: HttpClient, private socialAuthService: SocialAuthService){
    this.socialAuthService.authState.subscribe(socialUser => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          Authorization: 'Bearer ' + socialUser.idToken
        })
      };
      this.httpClient.get<Reservation[]>(this.remoteHost + '/ezytix/apis/63f8e553e28e57207cbeb508/reservations', httpOptions)
        .subscribe(response => this.reservations = response);

    });
  }

}


export interface Reservation {
  reservedBy: Person,
  additionalInfo?: Map<string, string>
}

export interface Person {
  firstName: string,
  lastName?: string,
  emailAddresses?: string[],
  phoneNumbers?: string[]
}
