import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
    selector: 'app-register-wings',
    templateUrl: './register-wings.component.html',
    styleUrls: ['./register-wings.component.css']
})
export class RegisterWingsComponent {

    reservation: Reservation = {} as Reservation;
    registrationSuccessful: boolean = false;
    consentOk: boolean = false;
    inProgress: boolean = false;

    constructor(private httpClient: HttpClient,
                private recaptchaV3Service: ReCaptchaV3Service) {
    }

    register(): void {
        this.inProgress = true;
        this.recaptchaV3Service.execute('registerWings')
            .subscribe((token: string) => {
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
                        },
                        "additionalInfo": {
                            'Residence Location': this.reservation.residenceLocation,
                            'College': this.reservation.college,
                            'Campus Location': this.reservation.campusLocation
                        }
                    }, {headers: {'x-recaptcha-token': token}}).subscribe(response => {
                        this.inProgress = false;
                        this.registrationSuccessful = true;
                        this.consentOk = false;
                        this.reservation = {} as Reservation;
                });
            });
    }

    consent() {
        this.consentOk = true;
    }
}

export interface Reservation {
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber: string,
    residenceLocation: string,
    college: string,
    campusLocation: string
}
