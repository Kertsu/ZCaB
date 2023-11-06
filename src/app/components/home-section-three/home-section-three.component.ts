import { Component } from '@angular/core';
import {
  faBuilding,
  faGem,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home-section-three',
  templateUrl: './home-section-three.component.html',
  styleUrls: ['./home-section-three.component.css'],
})
export class HomeSectionThreeComponent {
  modern = faBuilding;
  quality = faGem;
  trusted = faShieldAlt;

  data = [
    {
      icon: this.modern,
      title: 'Modern Design',
      text: `Explore our fresh take on modern design. Transform your space with today's style and a touch of innovation.`,
    },
    {
      icon: this.quality,
      title: 'Quality Products',
      text: `Discover excellence in every detail with our meticulously crafted quality products.`,
    },
    {
      icon: this.trusted,
      title: 'Trusted',
      text: `Building trust one interaction at a time. We're committed to earning and maintaining your trust.`,
    },
  ];
}
