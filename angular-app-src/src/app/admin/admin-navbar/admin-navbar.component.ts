import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {
  isCollapsed: boolean = true;

  constructor(private router: Router,
              private socialAuthService: SocialAuthService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.isCollapsed = true;
      }
    });
  }

  ngOnInit(): void {
  }

  setCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

  logout() {
    this.socialAuthService.signOut(true);
    this.router.navigate(['login']);
  }
}
