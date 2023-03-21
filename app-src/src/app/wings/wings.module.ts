import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WingsComponent } from './wings.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    WingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class WingsModule {
}
