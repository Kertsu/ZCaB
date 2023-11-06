import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
 imageFilePaths: String[] = [];

 constructor() {
  for (let i = 1; i<=9; i++){
    this.imageFilePaths.push(`/assets/images/gallery/gallery_${i}.jpg`)
  }
 }
}
