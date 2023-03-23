import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    RegistrationDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
