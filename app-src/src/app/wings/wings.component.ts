import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wings',
  templateUrl: './wings.component.html',
  styleUrls: ['./wings.component.css']
})
export class WingsComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['wings/home']);
  }
}
