import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  slides = [
    {'image': 'assets/img/photos/2023-wings/IMG001.JPG'},
    {'image': 'assets/img/photos/2023-wings/IMG003.JPG'},
    {'image': 'assets/img/photos/2023-wings/IMG005.JPG'},
    {'image': 'assets/img/photos/2023-wings/IMG006.JPG'},
    {'image': 'assets/img/photos/2023-wings/IMG007.JPG'},
    {'image': 'assets/img/photos/2023-wings/IMG010.JPG'},
    {'image': 'assets/img/photos/2023-wings/IMG011.JPG'},
    {'image': 'assets/img/photos/2023-wings/IMG012.JPG'},
    {'image': 'assets/img/photos/2023-wings/IMG013.JPG'},
    {'image': 'assets/img/photos/2023-wings/IMG014.JPG'},
    {'image': 'assets/img/photos/2022-onam/1.jpg'},
    {'image': 'assets/img/photos/2022-onam/2.jpg'},
    {'image': 'assets/img/photos/2022-onam/3.jpg'},
    {'image': 'assets/img/photos/2022-onam/4.jpg'},
    {'image': 'assets/img/photos/2022-onam/5.jpg'},
    {'image': 'assets/img/photos/2022-onam/6.jpg'},
    {'image': 'assets/img/photos/2022-onam/7.jpg'},
    {'image': 'assets/img/photos/2022-onam/8.jpg'},
    {'image': 'assets/img/photos/2022-onam/9.jpg'},
    {'image': 'assets/img/photos/2022-onam/10.jpg'},
    {'image': 'assets/img/photos/2022-onam/11.jpg'},
    {'image': 'assets/img/photos/2022-onam/12.jpg'},
    {'image': 'assets/img/photos/2022-onam/13.jpg'},
    {'image': 'assets/img/photos/2022-onam/14.jpg'},
    {'image': 'assets/img/photos/2022-onam/15.jpg'},
    {'image': 'assets/img/photos/2022-onam/16.jpg'},
    {'image': 'assets/img/photos/2022-onam/17.jpg'},
    {'image': 'assets/img/photos/2022-onam/18.jpg'},
    {'image': 'assets/img/photos/2022_1.jpeg'},
    {'image': 'assets/img/photos/2022_2.jpeg'},
    {'image': 'assets/img/photos/2022_3.jpeg'},
    {'image': 'assets/img/photos/2022_4.jpeg'},
    {'image': 'assets/img/photos/2022_5.jpeg'},
    {'image': 'assets/img/photos/2021_1.jpg'},
    {'image': 'assets/img/photos/2021_2.jpg'},
    {'image': 'assets/img/photos/2021_3.jpg'},
    {'image': 'assets/img/photos/2021_4.jpg'},
    {'image': 'assets/img/photos/2021_5.jpg'},
    {'image': 'assets/img/photos/2019_1.jpg'},
    {'image': 'assets/img/photos/2019_2.jpg'},
    {'image': 'assets/img/photos/2019_3.jpg'},
    {'image': 'assets/img/photos/2019_4.jpg'},
    {'image': 'assets/img/photos/2019_5.jpg'},
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true
  };
}
