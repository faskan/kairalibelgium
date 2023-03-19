import { Component, OnInit } from '@angular/core';
import FaqData from './data.json';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faqs: Faq[] = FaqData;
  constructor() {
  }

  ngOnInit(): void {
  }

}

interface Faq {
  title: string;
  description: string;
}
