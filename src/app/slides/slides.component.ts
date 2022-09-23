import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'corp-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SlidesComponent implements OnInit {

  slides$ = new BehaviorSubject<string[]>(['']);

  @ViewChild('swiper') swiper: any;

  constructor() {}

  ngOnInit(): void {
    this.slides$.next(
      Array.from({ length: 2 }).map((el, index) => `Slide ${index + 1}`)
    );
  }

}