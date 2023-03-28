import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../model/post';
import { ForumService } from '../service/forum.service';
import { Thread } from '../model/thread';
import { ReplyThreadComponent } from '../reply-thread/reply-thread.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.css']
})
export class ThreadDetailComponent implements OnInit {

  id: string | null = '';
  posts: Post[] = [];
  thread: Thread | undefined;

  constructor(private route: ActivatedRoute,
              public dialog: MatDialog,
              private forumService: ForumService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) {
      this.forumService.getThread(this.id).subscribe(response => {
        this.thread = response;
      });
      this.forumService.getAllPosts(this.id).subscribe(response => {
        this.posts = response;
      });
    }
  }

  replyThread(id: string | undefined) {
    this.dialog.open(ReplyThreadComponent, {
      width: '750px',
      data: {
        threadId: id
      }
    });
  }
}
