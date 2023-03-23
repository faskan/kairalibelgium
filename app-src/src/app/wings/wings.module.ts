import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WingsComponent } from './wings.component';
import { HomeComponent } from './home/home.component';
import { WingsRoutingModule } from './wings-routing.module';
import { RegisterWingsComponent } from './register-wings/register-wings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    WingsComponent,
    HomeComponent,
    RegisterWingsComponent
  ],
  imports: [
    CommonModule,
    WingsRoutingModule,
    ReactiveFormsModule,
    AdminModule
  ]
})
export class WingsModule {
}
