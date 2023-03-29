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
        path: 'register',
        component: RegisterWingsComponent
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WingsRoutingModule {
}
