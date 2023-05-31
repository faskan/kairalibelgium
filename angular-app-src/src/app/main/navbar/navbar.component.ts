import { Component } from '@angular/core';
import { IsActiveMatchOptions, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isCollapsed: boolean = true;

  public linkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'ignored',
    queryParams: 'ignored',
    paths: 'exact',
    fragment: 'exact',
  };

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
