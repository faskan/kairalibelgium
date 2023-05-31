import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WingsRegistrationComponent } from './wings-registration/wings-registration.component';
import { AdminComponent } from './admin.component';
import { AuthGuardService } from '../auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'wings',
        component: WingsRegistrationComponent
      },
      {
        path: 'forum',
        loadChildren: () => import('forum/Module').then((m) => m.RemoteEntryModule),
      },
      {
        path: '',
        redirectTo: 'wings',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
