import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './content/events/events.component';
import { GalleryComponent } from './content/gallery/gallery.component';
import { AboutUsComponent } from './content/about-us/about-us.component';
import { ContactUsComponent } from './content/contact-us/contact-us.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FaqComponent } from './content/faq/faq.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HomeComponent } from './content/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    EventsComponent,
    GalleryComponent,
    AboutUsComponent,
    ContactUsComponent,
    FaqComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatCardModule,
    NgbModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
