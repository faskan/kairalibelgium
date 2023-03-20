import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { EventsComponent } from './content/events/events.component';
import { GalleryComponent } from './content/gallery/gallery.component';
import { AboutUsComponent } from './content/about-us/about-us.component';
import { ContactUsComponent } from './content/contact-us/contact-us.component';
import { FaqComponent } from './content/faq/faq.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
