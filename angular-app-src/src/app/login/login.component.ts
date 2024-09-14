import { Component } from '@angular/core';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Router } from '@angular/router';
import { LoggedInUserService } from '../forum/service/logged-in-user.service';
import { UserService } from '../forum/service/user.service';

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
              private userService: UserService,
              private loggedInUserService: LoggedInUserService,
              private router: Router){
  }

  ngOnInit() {
    this.authService.authState.pipe(untilDestroyed(this)).subscribe((socialUser) => {
      this.user = socialUser;
      this.loggedIn = (socialUser != null);
      if(this.loggedIn) {
        this.loggedInUserService.setIdToken(socialUser.idToken);
        this.userService.getLoggedInUser().subscribe((user) => {
          this.loggedInUserService.setLoggedInUser(user);
          // navigate back to where the user was before logging in
          this.router.navigate([localStorage.getItem('redirectUrl') || 'forum']);
        });
      }
    });
  }
}
