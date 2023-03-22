import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WingsComponent } from './wings.component';
import { HomeComponent } from './home/home.component';
import { RegisterWingsComponent } from './register-wings/register-wings.component';

const routes: Routes = [
  {
    path: 'wings',
    component: WingsComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'register',
        component: RegisterWingsComponent
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
