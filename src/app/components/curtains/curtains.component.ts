import { Component } from '@angular/core';

@Component({
  selector: 'app-curtains',
  templateUrl: './curtains.component.html',
  styleUrls: ['./curtains.component.css']
})
export class CurtainsComponent {
  imageFilePathsGroup: String[][] = [[], [], [], [], [], [], [], [], []];
  curtains!:any;

  constructor(){
    for (let j = 1; j <= 18; j++) {
      const division = j % 9;
      
      this.imageFilePathsGroup[division].push(`/assets/images/gallery/curtain_${j}.jpg`);
  }

  this.curtains = [
    {
      image: '/assets/images/gallery/curtain_1.jpg',
      description: 'Transform your space with our luxurious velvet curtains, adding elegance and warmth to any room.',
    },
    {
      image: '/assets/images/gallery/curtain_2.jpg',
      description: 'Experience the perfect blend of style and functionality with our innovative blackout curtains, keeping your home serene and private.',
    },
    {
      image: '/assets/images/gallery/curtain_3.jpg',
      description: 'Elevate your interior decor with our eco-friendly, sustainable linen curtains, designed for the environmentally-conscious homeowner.',
    },
    {
      image: '/assets/images/gallery/curtain_4.jpg',
      description: 'Create a dreamy atmosphere with our sheer chiffon curtains, allowing natural light to gently filter through your windows.',
    },
    {
      image: '/assets/images/gallery/curtain_5.jpg',
      description: 'Enhance your child\'s room with our playful and colorful printed curtains, sparking their imagination and creativity.',
    },
    {
      image: '/assets/images/gallery/curtain_6.jpg',
      description: 'Achieve a minimalist and modern look with our sleek and versatile panel curtains, fitting seamlessly into any home design.',
    },
  ];
  
  }
}
