import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { GoogleSigninButtonModule, SocialLoginModule } from '@abacritt/angularx-social-login';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    GoogleSigninButtonModule,
    SocialLoginModule
  ]
})
export class LoginModule { }
