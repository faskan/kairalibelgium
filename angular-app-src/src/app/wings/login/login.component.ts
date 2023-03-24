import { Component, Inject } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { WINDOW } from '../../common/window.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user?: SocialUser;
  loggedIn: boolean = false;

  constructor(@Inject(WINDOW) public window: Window,
              private authService: SocialAuthService){
  }

  ngOnInit() {
    window.googleLoginCallback = (response: any) => {
      console.log('My new TEst Method');
      console.log(this.user);
      this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(response => console.log(response));
    }
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
}

declare global {
  interface Window { googleLoginCallback: any; }
}
