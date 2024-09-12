import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumHomeComponent } from './forum-home/forum-home.component';

const routes: Routes = [
  {
    path: '',
    component: ForumHomeComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('forum/Module').then((m) => m.RemoteEntryModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
