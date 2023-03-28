import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {
  isCollapsed: boolean = true;

  constructor(private router: Router) {
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
}
