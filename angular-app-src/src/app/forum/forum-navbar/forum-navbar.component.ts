import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-forum-navbar',
  templateUrl: './forum-navbar.component.html',
  styleUrls: ['./forum-navbar.component.css']
})
export class ForumNavbarComponent {
  isCollapsed: boolean = true;

  constructor(private router: Router,
              private socialAuthService: SocialAuthService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.isCollapsed = true;
      }
    });
  }
  logout() {
    this.socialAuthService.signOut(true);
    this.router.navigate(['login']);
  }
}
