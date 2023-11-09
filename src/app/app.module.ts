import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeSectionTwoComponent } from './components/home-section-two/home-section-two.component';
import { HomeSectionThreeComponent } from './components/home-section-three/home-section-three.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CurtainsComponent } from './components/curtains/curtains.component';
import { BeddingsComponent } from './components/beddings/beddings.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    CarouselComponent,
    HomeSectionTwoComponent,
    HomeSectionThreeComponent,
    GalleryComponent,
    CurtainsComponent,
    BeddingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
