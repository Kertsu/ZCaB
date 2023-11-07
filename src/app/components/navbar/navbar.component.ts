import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faHome, faShoppingCart, faX } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  icon = faBars
  products = faShoppingCart;
  home = faHome;
  showMenu!: boolean;
  subcription!: Subscription

  constructor(private uiService: UiService){
    this.subcription = this.uiService.onToggleMenu().subscribe((res) => {
      this.showMenu = res
    })
  }


  toggleIcon () {
    this.uiService.toggleMenu()
    if (this.icon == faBars){
      this.icon = faX
    } else {
      this.icon = faBars
    }
  }
 
}
