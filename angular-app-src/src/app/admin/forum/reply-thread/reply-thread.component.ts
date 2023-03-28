import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { ForumService } from '../service/forum.service';
import { Post } from '../model/post';
import { User } from '../model/user';
import { Thread } from '../model/thread';

@Component({
  selector: 'app-reply-thread',
  templateUrl: './reply-thread.component.html',
  styleUrls: ['./reply-thread.component.css']
})
export class ReplyThreadComponent implements OnInit {

  replyThreadForm = new FormGroup({
    content: new FormControl(''),
    name: new FormControl(''),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<ReplyThreadComponent>,
              private forumService: ForumService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const threadId = this.data.threadId;
    const post = {
      createdBy: {
        name: this.replyThreadForm.get('name')?.value
      } as User,
      content: this.replyThreadForm.get('content')?.value,
      threadId: threadId
    } as Post;
    console.log(post);
    this.forumService.saveReply(post).subscribe(response => {
      this.dialogRef.close();
    });
  }
}
