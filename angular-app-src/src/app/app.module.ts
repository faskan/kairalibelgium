import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { ReactiveFormsModule } from '@angular/forms';
import { MainModule } from './main/main.module';
import { WingsModule } from './wings/wings.module';
import { FacebookModule } from 'ngx-facebook';

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
    FacebookModule.forRoot()
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: '6LfxWXUhAAAAAAY7Cqqj7OJ_gL7EtxZxoF9DnMKy' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
