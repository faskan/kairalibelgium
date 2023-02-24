import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-wings',
  templateUrl: './register-wings.component.html',
  styleUrls: ['./register-wings.component.css']
})
export class RegisterWingsComponent {

  reservation: Reservation = {} as Reservation;

  constructor(private httpClient: HttpClient) { }

  register(): void {
    console.log(this.reservation);
    this.httpClient.post('https://ezytix-xiosrv3ggq-ue.a.run.app/ezytix/apis/63f8e553e28e57207cbeb508/reservations',
        {
      "reservedBy": {
        "firstName": this.reservation.firstName,
        "lastName": this.reservation.lastName,
        "emailAddresses": [
          this.reservation.emailAddress
        ],
        "phoneNumbers": [
          this.reservation.phoneNumber
        ]
      }
    }).subscribe(response => console.log(response));
  }

}

export interface Reservation {
  firstName: string,
  lastName: string,
  emailAddress: string,
  phoneNumber: string,
  residenceLocation: string,
  college:string,
  campusLocation: string
}
