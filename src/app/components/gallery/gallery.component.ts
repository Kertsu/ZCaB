import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
 imageFilePaths: String[] = [];
 imageFilePathsGroup: String[][] = [[], [], []];

 constructor() {
  for (let i = 1; i<=15; i++){
    this.imageFilePaths.push(`/assets/images/gallery_${i}.jpg`)
  }
  for (let j = 1; j <= 15; j++) {
    const division = j % 3;
    
    this.imageFilePathsGroup[division].push(`/assets/images/gallery_${j}.jpg`);
}
  

 }
}
