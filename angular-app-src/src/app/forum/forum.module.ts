import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { ForumHomeComponent } from './forum-home/forum-home.component';
import { ForumNavbarComponent } from './forum-navbar/forum-navbar.component';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { EditCommentDialogComponent } from './edit-comment-dialog/edit-comment-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ForumHomeComponent,
    ForumNavbarComponent,
    EditCommentDialogComponent
  ],
  imports: [
    CommonModule,
    ForumRoutingModule,
    NgbCollapse,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ]
})
export class ForumModule { }
