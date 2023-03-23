import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WingsComponent } from './wings.component';
import { HomeComponent } from './home/home.component';
import { RegisterWingsComponent } from './register-wings/register-wings.component';
import { RegistrationDetailsComponent } from './admin/registration-details/registration-details.component';

const routes: Routes = [
  {
    path: 'wings',
    component: WingsComponent,
    children: [
      {
        path: 'register',
        component: RegisterWingsComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'admin',
        component: RegistrationDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class WingsRoutingModule {
}
