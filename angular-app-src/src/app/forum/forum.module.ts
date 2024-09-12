import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { ForumHomeComponent } from './forum-home/forum-home.component';
import { ForumNavbarComponent } from './forum-navbar/forum-navbar.component';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ForumHomeComponent,
    ForumNavbarComponent
  ],
  imports: [
    CommonModule,
    ForumRoutingModule,
    NgbCollapse
  ]
})
export class ForumModule { }
