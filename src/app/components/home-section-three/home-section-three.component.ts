import { Component } from '@angular/core';
import {faBuilding, faGem, faShieldAlt} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-home-section-three',
  templateUrl: './home-section-three.component.html',
  styleUrls: ['./home-section-three.component.css']
})
export class HomeSectionThreeComponent {
  modern = faBuilding
  quality = faGem
  trusted = faShieldAlt
}
