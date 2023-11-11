import { Component, Input } from '@angular/core';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bedding-product',
  templateUrl: './bedding-product.component.html',
  styleUrls: ['./bedding-product.component.css']
})
export class BeddingProductComponent {
  @Input() imageSrc: string = '';
  @Input() description: string = '';
  @Input() alternate: boolean = false;
  icon = faMessage
}
