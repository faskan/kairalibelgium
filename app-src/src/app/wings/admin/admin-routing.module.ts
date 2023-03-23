import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';

const routes: Routes = [
  {
    path: 'admin',
    component: RegistrationDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
