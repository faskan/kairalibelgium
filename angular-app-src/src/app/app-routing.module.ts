import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterWingsComponent } from './wings/register-wings/register-wings.component';
import { RegistrationDetailsComponent } from './wings/registration-details/registration-details.component';

const routes: Routes = [
  {
    path: 'admin/registration-details',
    component: RegistrationDetailsComponent
  },
  {
    path: '**',
    component: RegisterWingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
