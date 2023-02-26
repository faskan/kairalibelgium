import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-details',
  templateUrl: './registration-details.component.html',
  styleUrls: ['./registration-details.component.css']
})
export class RegistrationDetailsComponent {

  reservations: Reservation[] = [];

  constructor(private httpClient: HttpClient){
    this.httpClient.get<Reservation[]>('https://ezytix-xiosrv3ggq-ue.a.run.app/ezytix/apis/63f8e553e28e57207cbeb508/reservations')
        .subscribe(response => this.reservations = response);
  }

}


export interface Reservation {
  reservedBy: Person,
  additionalInfo: Map<string, string>
}

export interface Person {
  firstName: string,
  lastName: string,
  emailAddresses: string[],
  phoneNumbers: string[]
}
