import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './forum.component';
import { ReplyThreadComponent } from './reply-thread/reply-thread.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    ForumComponent,
    ReplyThreadComponent,
    NewThreadComponent,
    ThreadDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ]
})
export class ForumModule { }
