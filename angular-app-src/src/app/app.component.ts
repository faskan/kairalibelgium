import { Component } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { CanActivateFn } from '@angular/router';

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

export function redirectGuard(redirectUrl: string): CanActivateFn {
  return () => {
    window.location.href = redirectUrl;
    return true;
  }
}
