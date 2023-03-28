import { Component } from '@angular/core';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@UntilDestroy()
export class LoginComponent {

  user?: SocialUser;
  loggedIn: boolean = false;

  constructor(private authService: SocialAuthService,
              private router: Router){
  }

  ngOnInit() {
    this.authService.authState.pipe(untilDestroyed(this)).subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if(this.loggedIn) {
        this.router.navigate(['admin/home']);
      }
    });
  }
}
