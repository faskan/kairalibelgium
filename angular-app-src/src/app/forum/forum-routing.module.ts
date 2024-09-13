import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumHomeComponent } from './forum-home/forum-home.component';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';
import { ForumComponent } from './forum.component';

const routes: Routes = [
  {
    path: '',
    component: ForumHomeComponent,
    children: [
      { path: 'thread/:id', component: ThreadDetailComponent },
      { path: '', component: ForumComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
