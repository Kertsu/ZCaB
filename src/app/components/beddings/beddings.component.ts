import { Component } from '@angular/core';

@Component({
  selector: 'app-beddings',
  templateUrl: './beddings.component.html',
  styleUrls: ['./beddings.component.css']
})
export class BeddingsComponent {
  imageFilePathsGroup: String[][] = [[], [], [], [], [], [], [], [], []];

  constructor(){
    for (let j = 1; j <= 18; j++) {
      const division = j % 9;
      
      this.imageFilePathsGroup[division].push(`/assets/images/gallery/bedding_${j}.jpg`);
  }
  }
}
