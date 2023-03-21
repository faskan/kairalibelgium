import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WingsComponent } from './wings.component';
import { HomeComponent } from './home/home.component';
import { WingsRoutingModule } from './wings-routing.module';


@NgModule({
  declarations: [
    WingsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    WingsRoutingModule
  ]
})
export class WingsModule {
}
