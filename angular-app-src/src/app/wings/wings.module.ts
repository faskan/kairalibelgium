import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterWingsComponent } from './register-wings/register-wings.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterWingsComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class WingsModule { }
