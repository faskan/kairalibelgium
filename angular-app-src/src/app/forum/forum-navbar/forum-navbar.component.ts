import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { LoggedInUserService } from '../service/logged-in-user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-forum-navbar',
  templateUrl: './forum-navbar.component.html',
  styleUrls: ['./forum-navbar.component.css']
})
export class ForumNavbarComponent {
  isCollapsed = true;
  loggedInUser?: User;
  constructor(private router: Router,
              private loggedInUserService: LoggedInUserService,
              private socialAuthService: SocialAuthService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.isCollapsed = true;
      }
    });
    this.loggedInUserService.getLoggedInUserSubject().subscribe((user: User) => {
      this.loggedInUser = user;
    });
  }
  logout() {
    this.socialAuthService.signOut(true);
    this.router.navigate(['login']);
  }
}
