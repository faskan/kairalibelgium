import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramScheduleRoutingModule } from './program-schedule-routing.module';
import { ProgramScheduleComponent } from './program-schedule.component';
import { FormsModule } from '@angular/forms';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    ProgramScheduleComponent
  ],
  imports: [
    CommonModule,
    ProgramScheduleRoutingModule,
    FormsModule,
    CdkDropList,
    CdkDrag
  ]
})
export class ProgramScheduleModule { }
