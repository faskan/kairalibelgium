import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @ViewChild("gallery", { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  ngOnInit(): void {
    this.loadGallery();
  }

  async loadGallery() {
    // use dynamic import of Typescript to load component from remote application
    //const m = await import('photogallery/Component');
    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'https://techroots-bv.github.io/public/ng-mfes/photogallery/remoteEntry.mjs',
      exposedModule: './PhotoGallerySliderComponent'
    });
    this.viewContainer.createComponent(m.PhotoGallerySliderComponent);

  }
}
