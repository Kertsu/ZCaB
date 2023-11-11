import { Component } from '@angular/core';

@Component({
  selector: 'app-beddings',
  templateUrl: './beddings.component.html',
  styleUrls: ['./beddings.component.css']
})
export class BeddingsComponent {
  imageFilePathsGroup: String[][] = [[], [], [], [], [], [], [], [], []];
  beddings: any;
  constructor(){
    for (let j = 1; j <= 18; j++) {
      const division = j % 9;
      
      this.imageFilePathsGroup[division].push(`/assets/images/gallery/bedding_${j}.jpg`);
  }

  this.beddings = [
    {
      image: '/assets/images/gallery/bedding_1.jpg',
      description: 'Upgrade your bedroom with our premium soft bedding sets, providing the ultimate comfort and style.',
    },
    {
      image: '/assets/images/gallery/bedding_2.jpg',
      description: "Experience a restful night's sleep with our hypoallergenic and luxurious bedding, perfect for sensitive sleepers.",
    },
    {
      image: '/assets/images/gallery/bedding_3.jpg',
      description: 'Elevate your bedroom decor with our high-quality and stylish bedding collections, designed for the discerning homeowner.',
    },
    {
      image: '/assets/images/gallery/bedding_4.jpg',
      description: 'Create a cozy and inviting atmosphere with our warm and snug bedding options, making your bedroom a sanctuary.',
    },
    {
      image: '/assets/images/gallery/bedding_5.jpg',
      description: 'Enhance your child\'s sleep environment with our colorful and fun bedding sets, sparking their dreams and creativity.',
    },
    {
      image: '/assets/images/gallery/bedding_6.jpg',
      description: 'Achieve a modern and chic bedroom look with our trendy and versatile bedding, complementing any interior design.',
    },
  ];
  
  }
}
