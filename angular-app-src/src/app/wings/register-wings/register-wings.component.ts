import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    reservationForm: FormGroup;


    constructor(private httpClient: HttpClient,
                private recaptchaV3Service: ReCaptchaV3Service) {
        this.reservationForm = new FormGroup({
            firstName: new FormControl(this.reservation.firstName, [Validators.required]),
            lastName: new FormControl(this.reservation.lastName),
            emailAddress: new FormControl(this.reservation.emailAddress, [Validators.required]),
            phoneNumber: new FormControl(this.reservation.phoneNumber, [Validators.required]),
            residenceLocation: new FormControl(this.reservation.residenceLocation),
            college: new FormControl(this.reservation.college),
            campusLocation: new FormControl(this.reservation.campusLocation),
            willJoinInauguration: new FormControl(this.reservation.willJoinInauguration),
            studentOrAlumni: new FormControl(this.reservation.studentOrAlumni),
            areaOfStudies: new FormControl(this.reservation.areaOfStudies)
        });
        this.reservationForm.patchValue({studentOrAlumni: 'Student'});
    }

    register(): void {
        this.inProgress = true;
        this.reservation = this.reservationForm.value;
        this.recaptchaV3Service.execute('registerWings')
            .subscribe((token: string) => {
                this.httpClient.post('https://ezytix-xiosrv3ggq-ew.a.run.app/ezytix/apis/63f8e553e28e57207cbeb508/reservations',
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
                            'Residence': this.reservation.residenceLocation,
                            'College': this.reservation.college,
                            'Campus': this.reservation.campusLocation,
                            'Category' : this.reservation.studentOrAlumni,
                            'AreaOfStudies' : this.reservation.areaOfStudies,
                            'WillJoinInauguration' : this.reservation.willJoinInauguration
                        }
                    }, {headers: {'x-recaptcha-token': token}}).subscribe(response => {
                    this.inProgress = false;
                    this.registrationSuccessful = true;
                    this.consentOk = false;
                    this.reservation = {} as Reservation;
                    this.reservationForm.reset();
                    this.reservationForm.patchValue({studentOrAlumni: 'Student'});
                    window.scroll({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    });
                });
            });
    }

    consent() {
        this.consentOk = !this.consentOk;
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
    willJoinInauguration: boolean;
    studentOrAlumni: string;
    areaOfStudies: string;
}
