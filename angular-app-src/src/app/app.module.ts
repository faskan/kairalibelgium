import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { MainModule } from './main/main.module';
import { WingsModule } from './wings/wings.module';
import { FacebookModule } from 'ngx-facebook';
import {
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule
} from '@abacritt/angularx-social-login';
import { WINDOW_PROVIDERS } from './common/window.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainModule,
    WingsModule,
    FacebookModule.forRoot(),
    SocialLoginModule
  ],
  providers: [
    WINDOW_PROVIDERS,
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: '6LfxWXUhAAAAAAY7Cqqj7OJ_gL7EtxZxoF9DnMKy' },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '435519930435-23b9f8nh9kvr8lq7ab29hm3tlogok04g.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
