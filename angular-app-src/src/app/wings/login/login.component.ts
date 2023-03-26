import { Component } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user?: SocialUser;
  loggedIn: boolean = false;

  constructor(private authService: SocialAuthService){
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(user);
      // this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(response => console.log(response));
    });
  }
}
