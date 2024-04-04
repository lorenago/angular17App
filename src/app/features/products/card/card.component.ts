import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

function addDiscountProperty(product: any) {
  product.discount = product.price * 0.1;
  return product;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true, transform: addDiscountProperty }) product!: any;
}
