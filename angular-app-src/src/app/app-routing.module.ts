import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { WingsComponent } from './wings/wings.component';

const routes: Routes = [
  {
    path: 'wings',
    component: WingsComponent
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
