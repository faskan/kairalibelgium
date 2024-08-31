import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramScheduleComponent } from './program-schedule.component';
import { ProgramScheduleViewOnlyComponent } from './program-schedule-view-only/program-schedule-view-only.component';

const routes: Routes = [
  {
    path: 'manage/:eventId',
    component: ProgramScheduleComponent,
  },
  {
    path: ':eventId',
    component: ProgramScheduleViewOnlyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramScheduleRoutingModule { }
