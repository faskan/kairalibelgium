import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  contactRequestForm: FormGroup;
  contactRequest: ContactRequest = {} as ContactRequest;
  inProgress: boolean = false;
  requestSent: boolean = false;

  constructor(private httpClient: HttpClient,
              private recaptchaV3Service: ReCaptchaV3Service) {
    this.contactRequestForm = new FormGroup({
      name: new FormControl(this.contactRequest.name, [Validators.required]),
      email: new FormControl(this.contactRequest.email, [Validators.required]),
      phone: new FormControl(this.contactRequest.phone, [Validators.required]),
      message: new FormControl(this.contactRequest.message, [Validators.required]),
    });
  }

  sendEmail(): void {
    this.contactRequest = this.contactRequestForm.value;
    this.inProgress = true;
    this.recaptchaV3Service.execute('submit')
      .subscribe((token: string) => {
        this.httpClient.post('https://hmdowpcunl.execute-api.us-east-1.amazonaws.com/Prod/mail',
          {
            "name" : this.contactRequest.name,
            "email" : this.contactRequest.email,
            "phone" : this.contactRequest.phone,
            "message" : this.contactRequest.message,
            "token" : token
          }, { responseType: 'text'}).subscribe(response => {
          this.inProgress = false;
          this.requestSent = true;
          this.contactRequestForm.reset();
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        });
      });
  }
}

export interface ContactRequest {
  name: string,
  email: string,
  phone: string,
  message: string,
  token: string
}
