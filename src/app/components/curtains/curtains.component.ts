import { Component } from '@angular/core';

@Component({
  selector: 'app-curtains',
  templateUrl: './curtains.component.html',
  styleUrls: ['./curtains.component.css']
})
export class CurtainsComponent {
  imageFilePathsGroup: String[][] = [[], [], [], [], [], [], [], [], []];

  constructor(){
    for (let j = 1; j <= 18; j++) {
      const division = j % 9;
      
      this.imageFilePathsGroup[division].push(`/assets/images/gallery/curtain_${j}.jpg`);
  }
  }
}
