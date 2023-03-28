import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ForumService } from '../service/forum.service';
import { Thread } from '../model/thread';
import { User } from '../model/user';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {

  newThreadForm = new FormGroup({
    name: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private forumService: ForumService,
              public dialogRef: MatDialogRef<NewThreadComponent>) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const thread = {
      createdBy: {
        name: this.newThreadForm.get('name')?.value
      } as User,
      title: this.newThreadForm.get('title')?.value,
      description: this.newThreadForm.get('description')?.value
    } as Thread;
    this.forumService.saveNewThread(thread).subscribe(response => {
      this.dialogRef.close();
    });
  }
}
