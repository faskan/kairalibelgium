import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ForumService } from '../service/forum.service';
import { Thread } from '../model/thread';
import { User } from '../model/user';
import { MatDialogRef } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
    selector: 'app-new-thread',
    templateUrl: './new-thread.component.html',
    styleUrls: ['./new-thread.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class NewThreadComponent implements OnInit {

  newThreadForm = new FormGroup({
    name: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private forumService: ForumService,
              public dialogRef: MatDialogRef<NewThreadComponent>) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const thread = {
      title: this.newThreadForm.get('title')?.value,
      description: this.newThreadForm.get('description')?.value
    } as Thread;
    this.forumService.saveNewThread(thread)
      .pipe(untilDestroyed(this))
      .subscribe(response => {
        this.dialogRef.close();
      });
  }
}
