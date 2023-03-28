import { Component, OnInit } from '@angular/core';
import { ForumService } from './service/forum.service';
import { Thread } from './model/thread';
import { MatDialog } from '@angular/material/dialog';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { ReplyThreadComponent } from './reply-thread/reply-thread.component';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  threads: Thread[] = [];
  loading: boolean = false;

  constructor(private forumService: ForumService,
              public dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.forumService.getAllThreads().subscribe(response => {
      this.threads = response, this.loading = false
    });
  }

  openNewThreadDialog() {
    this.dialog.open(NewThreadComponent, {
      width: '750px'
    });
  }

  showThreadDetails(threadId: string) {
    this.router.navigate(['thread', threadId]);
  }

  replyThread(id: string) {
    this.dialog.open(ReplyThreadComponent, {
      width: '750px',
      data: {
        threadId: id
      }
    });
  }
}
