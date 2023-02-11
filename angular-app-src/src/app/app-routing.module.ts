import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterWingsComponent } from './wings/register-wings/register-wings.component';

const routes: Routes = [
  {
    path: 'wings/register',
    component: RegisterWingsComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
