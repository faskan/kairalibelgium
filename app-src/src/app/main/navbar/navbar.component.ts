import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isCollapsed: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  routeTo(route: string) {
    this.router.navigate([route]);
    this.isCollapsed = true;
  }
  setCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

  isActive(route: string) {
    return this.router.isActive(route, true) ? 'active' : '';
  }

  routeToWings() {
    //this.router.navigate(["/wings"], {relativeTo: this.route});
    this.router.navigate(['/wings'], { relativeTo: this.route.parent });
  }
}
