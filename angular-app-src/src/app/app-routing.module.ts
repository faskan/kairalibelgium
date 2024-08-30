import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { redirectGuard } from './app.component';

const routes: Routes = [
  {
    path: 'wings',
    loadChildren: () => import('./wings/wings.module').then(m => m.WingsModule),
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'program-schedule',
    loadChildren: () => import('./program-schedule/program-schedule.module').then(m => m.ProgramScheduleModule),
  },
  {
    path: '#',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
