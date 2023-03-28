import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { WingsComponent } from './wings/wings.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'wings',
    component: WingsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '#',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
