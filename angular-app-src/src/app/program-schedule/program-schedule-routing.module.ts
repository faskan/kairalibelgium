import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramScheduleComponent } from './program-schedule.component';

const routes: Routes = [
  {
    path: ':eventId',
    component: ProgramScheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramScheduleRoutingModule { }
