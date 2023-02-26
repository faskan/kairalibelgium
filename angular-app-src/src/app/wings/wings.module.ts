import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterWingsComponent } from './register-wings/register-wings.component';
import { FormsModule } from '@angular/forms';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';



@NgModule({
  declarations: [
    RegisterWingsComponent,
    RegistrationDetailsComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class WingsModule { }
