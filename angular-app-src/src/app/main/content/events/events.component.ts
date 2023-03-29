import { Component } from '@angular/core';
// @ts-ignore
import PastEvents from './data.json';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  events: Event[] = PastEvents;

  slideConfig = {
    infinite: true,
    dots: false,
    arrows: true,
    autoplay: true,
    mobileFirst: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}

interface Event {
  image: string;
  title: string;
  description: string;
  fbLink: string;
}
