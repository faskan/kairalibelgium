import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Post } from '../model/post';
import { ForumService } from '../service/forum.service';
import { Thread } from '../model/thread';
import { ReplyThreadComponent } from '../reply-thread/reply-thread.component';
import { MatDialog } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgFor, NgIf } from '@angular/common';
import { User } from '../model/user';
import { LoggedInUserService } from '../service/logged-in-user.service';
import { ReportCommentComponent } from '../report-comment/report-comment.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { EditCommentDialogComponent } from '../edit-comment-dialog/edit-comment-dialog.component';
import { switchMap } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.css'],
  standalone: true,
  imports: [NgFor, RouterLink, NgIf]
})
export class ThreadDetailComponent implements OnInit {

  id: string | null = '';
  posts: Post[] = [];
  thread: Thread | undefined;
  loggedInUser?: User;

  constructor(private route: ActivatedRoute,
              private loggedInService: LoggedInUserService,
              public dialog: MatDialog,
              private forumService: ForumService) {
  }

  ngOnInit(): void {
    this.loggedInUser = this.loggedInService.getLoggedInUser();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.forumService.getThread(this.id)
        .pipe(untilDestroyed(this))
        .subscribe(response => {
          this.thread = response;
        });
      this.forumService.getAllPosts(this.id)
        .pipe(untilDestroyed(this))
        .subscribe(response => {
          this.posts = response;
        });
    }
  }

  replyThread(id: string | undefined) {
    const dialogRef = this.dialog.open(ReplyThreadComponent, {
      width: '750px',
      data: {
        threadId: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.forumService.getAllPosts(this.id!)
          .pipe(untilDestroyed(this))
          .subscribe(response => {
            this.posts = response;
          });
      }
    });
  }

  reportComment(commentId: string) {
    const dialogRef = this.dialog.open(ReportCommentComponent, {
      width: '750px',
      data: {
        threadId: this.id,
        commentId: commentId
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.forumService.getAllPosts(this.id!)
          .pipe(untilDestroyed(this))
          .subscribe(response => {
            this.posts = response;
          });
      }
    });
  }

  deleteComment(commentId: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.forumService.deleteComment(commentId)
          .pipe(
            switchMap(() => this.forumService.getAllPosts(this.id!)),
            untilDestroyed(this)
          )
          .subscribe(response => {
            this.posts = response;
          });
      }
    });
  }

  editComment(commentId: string, threadId: string, content: string) {
    const dialogRef = this.dialog.open(EditCommentDialogComponent, {
      width: '750px',
      data: {
        commentId: commentId,
        threadId: threadId,
        content: content
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.forumService.getAllPosts(this.id!)
          .pipe(untilDestroyed(this))
          .subscribe(response => {
            this.posts = response;
          });
      }
    });
  }

  resolveModeration(commentId: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.forumService.resolveModeration(commentId)
          .pipe(
            switchMap(() => this.forumService.getAllPosts(this.id!)),
            untilDestroyed(this)
          )
          .subscribe(response => {
            this.posts = response;
          });
      }
    });
  }
}
