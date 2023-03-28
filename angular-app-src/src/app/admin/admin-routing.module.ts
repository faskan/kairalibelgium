import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WingsRegistrationComponent } from './wings-registration/wings-registration.component';
import { AdminComponent } from './admin.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import { ForumComponent } from './forum/forum.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'wings',
        component: WingsRegistrationComponent
      },
      {
        path: 'forum',
        component: ForumComponent
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
