import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WingsRegistrationComponent } from './wings-registration/wings-registration.component';
import { AdminComponent } from './admin.component';
import { AuthGuardService } from '../auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'wings-registration',
        component: WingsRegistrationComponent
      },
      {
        path: 'home',
        redirectTo: 'wings-registration',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
