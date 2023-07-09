import { Component } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-src';
  constructor(private facebookService: FacebookService) { }
  ngOnInit(): void {
    this.initFacebookService();
  }
  private initFacebookService(): void {
    const initParams: InitParams = { xfbml:true, version:'v14.0'};
    this.facebookService.init(initParams);
  }
}

export const redirectGuard = () => {
  window.location.href = 'https://pretix.eu/Kairali.Belgium/Onam2023/';
  return true;
}
