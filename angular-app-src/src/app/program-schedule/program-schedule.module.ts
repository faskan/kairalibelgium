import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramScheduleRoutingModule } from './program-schedule-routing.module';
import { ProgramScheduleComponent } from './program-schedule.component';
import { FormsModule } from '@angular/forms';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { EditScheduleDialogComponent } from './edit-schedule-dialog/edit-schedule-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { ProgramScheduleViewOnlyComponent } from './program-schedule-view-only/program-schedule-view-only.component';


@NgModule({
  declarations: [
    ProgramScheduleComponent,
    EditScheduleDialogComponent,
    ProgramScheduleViewOnlyComponent
  ],
  imports: [
    CommonModule,
    ProgramScheduleRoutingModule,
    FormsModule,
    CdkDropList,
    CdkDrag,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class ProgramScheduleModule { }
