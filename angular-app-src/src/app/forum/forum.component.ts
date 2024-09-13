import { Component, OnInit } from '@angular/core';
import { ForumService } from './service/forum.service';
import { Thread } from './model/thread';
import { MatDialog } from '@angular/material/dialog';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { ReplyThreadComponent } from './reply-thread/reply-thread.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgFor, NgIf } from '@angular/common';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { UserService } from './service/user.service';
import { User } from './model/user';
import { LoggedInUserService } from './service/logged-in-user.service';

@UntilDestroy()
@Component({
    selector: 'app-forum',
    templateUrl: './forum.component.html',
    styleUrls: ['./forum.component.css'],
    standalone: true,
    imports: [NgFor, NgIf, MatProgressBarModule]
})
export class ForumComponent implements OnInit {

  threads: Thread[] = [];
  isLoading = false;
  loggedInUser?: User;
  constructor(private forumService: ForumService,
              private userService: UserService,
              private loggedInService: LoggedInUserService,
              private socialAuthService: SocialAuthService,
              private activatedRoute: ActivatedRoute,
              public dialog: MatDialog,
              private router: Router) {
  }

  initSocialLogin() {
    this.socialAuthService.authState.subscribe({
      next: (socialUser) => {
        if(socialUser) {
          this.loggedInService.setIdToken(socialUser.idToken);
          this.userService.getLoggedInUser().subscribe({
            next: (loggedInUser) => {
              this.loggedInUser = loggedInUser;
              this.loggedInService.setLoggedInUser(loggedInUser);
            }
          });
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  ngOnInit(): void {
    this.initSocialLogin();
    this.isLoading = true;
    this.forumService.getAllThreads()
      .pipe(untilDestroyed(this))
      .subscribe(response => {
        this.threads = response, this.isLoading = false
      });
  }

  openNewThreadDialog() {
    this.dialog.open(NewThreadComponent, {
      width: '750px'
    });
  }

  showThreadDetails(threadId: string) {
    this.router.navigate(['thread', threadId], {relativeTo: this.activatedRoute});
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
