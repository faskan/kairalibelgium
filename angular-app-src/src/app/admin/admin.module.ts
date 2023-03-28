import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { WingsRegistrationComponent } from './wings-registration/wings-registration.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AdminComponent,
    WingsRegistrationComponent,
    AdminNavbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbCollapseModule
  ]
})
export class AdminModule { }
