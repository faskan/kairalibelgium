import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ForumService } from '../service/forum.service';
import { Post } from '../model/post';
import { User } from '../model/user';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
    selector: 'app-reply-thread',
    templateUrl: './reply-thread.component.html',
    styleUrls: ['./reply-thread.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class ReplyThreadComponent implements OnInit {

  replyThreadForm = new FormGroup({
    content: new FormControl(''),
    name: new FormControl(''),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<ReplyThreadComponent>,
              private forumService: ForumService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const threadId = this.data.threadId;
    const post = {
      content: this.replyThreadForm.get('content')?.value,
      threadId: threadId
    } as Post;
    this.forumService.saveReply(post)
      .pipe(untilDestroyed(this))
      .subscribe(response => {
        this.dialogRef.close(true);
      });
  }
}
