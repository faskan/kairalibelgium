import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isCollapsed: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigateByUrl('home', { skipLocationChange: true });
  }

  routeTo(route: string) {
    this.router.navigateByUrl(route, { skipLocationChange: true });
    this.isCollapsed = true;
  }
  setCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

  isActive(route: string) {
    return this.router.isActive(route, true) ? 'active' : '';
  }
}
