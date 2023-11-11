import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curtain-product',
  templateUrl: './curtain-product.component.html',
  styleUrls: ['./curtain-product.component.css']
})
export class CurtainProductComponent {
  @Input() imageSrc: string = '';
  @Input() description: string = '';
  @Input() alternate: boolean = false;
}
