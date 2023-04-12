import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './content/events/events.component';
import { AboutUsComponent } from './content/about-us/about-us.component';
import { HomeComponent } from './content/home/home.component';
import { FaqComponent } from './content/faq/faq.component';
import { ContactUsComponent } from './content/contact-us/contact-us.component';
import { MainComponent } from './main.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaV3Module } from 'ng-recaptcha';
import { ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    FooterComponent,
    EventsComponent,
    AboutUsComponent,
    ContactUsComponent,
    FaqComponent,
    HomeComponent
  ],
    exports: [
        MainComponent,
        NavbarComponent
    ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    NgbModule,
    MatDividerModule,
    MatCardModule,
    MatExpansionModule,
    HttpClientModule,
    RecaptchaV3Module,
    ReactiveFormsModule,
    MainRoutingModule
  ]
})
export class MainModule { }
