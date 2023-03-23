import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WingsComponent } from './wings.component';
import { HomeComponent } from './home/home.component';
import { WingsRoutingModule } from './wings-routing.module';
import { RegisterWingsComponent } from './register-wings/register-wings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    WingsComponent,
    HomeComponent,
    RegisterWingsComponent,
    NavbarComponent
  ],
    imports: [
        CommonModule,
        WingsRoutingModule,
        ReactiveFormsModule,
        AdminModule,
        NgbCollapseModule
    ]
})
export class WingsModule {
}
