import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { EventsComponent } from './content/events/events.component';
import { GalleryComponent } from './content/gallery/gallery.component';
import { AboutUsComponent } from './content/about-us/about-us.component';
import { ContactUsComponent } from './content/contact-us/contact-us.component';
import { FaqComponent } from './content/faq/faq.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
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
        loadChildren: () => import('photogallery/Module').then((m) => m.RemoteEntryModule),
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
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
