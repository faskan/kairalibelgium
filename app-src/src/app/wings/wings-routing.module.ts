import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WingsComponent } from './wings.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'wings',
    component: WingsComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
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
