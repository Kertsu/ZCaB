import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  icon = faBars

  constructor(private router : Router){}

  toggleIcon () {
    if (this.icon == faBars){
      this.icon = faX
    } else {
      this.icon = faBars
    }
  }
 
}
