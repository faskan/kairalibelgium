import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ForumService } from '../service/forum.service';
import { Post } from '../model/post';
import { User } from '../model/user';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
    selector: 'app-report-comment',
    templateUrl: './report-comment.component.html',
    styleUrls: ['./report-comment.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class ReportCommentComponent implements OnInit {

  reportCommentForm = new FormGroup({
    reason: new FormControl(''),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<ReportCommentComponent>,
              private forumService: ForumService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const threadId = this.data.threadId;
    const commentId = this.data.commentId;
    const reason = this.reportCommentForm.get('reason')?.value;;
    this.forumService.reportComment(threadId, commentId, reason ?? 'No reason filled')
      .pipe(untilDestroyed(this))
      .subscribe(response => {
        this.dialogRef.close(true);
      });
  }
}
