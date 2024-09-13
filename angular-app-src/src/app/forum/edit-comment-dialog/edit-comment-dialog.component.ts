import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ForumService } from '../service/forum.service';

@Component({
  selector: 'app-edit-comment-dialog',
  templateUrl: './edit-comment-dialog.component.html',
  styleUrls: ['./edit-comment-dialog.component.css']
})
export class EditCommentDialogComponent {
  commentContent?: string;

  constructor(
    public dialogRef: MatDialogRef<EditCommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { commentId: string, threadId: string, content: string },
    private forumService: ForumService
  ) {
  }

  ngOnInit(): void {
    this.commentContent = this.data.content
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateComment(): void {
    this.forumService.updateComment(this.data.commentId, this.data.threadId, this.commentContent!)
      .subscribe(() => {
        this.dialogRef.close(true);
      });
  }
}
