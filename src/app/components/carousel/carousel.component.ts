import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  carouselImages = [
    'carousel_1', 'carousel_2', 'carousel_3', 'carousel_4'
  ]
}
