import { Component, Input } from '@angular/core';
import { Product } from '../product-list/product-list.component';

@Component({
  selector: 'app-shopping-cart-item',
  imports: [],
  templateUrl: './shopping-cart-item.component.html',
  styleUrl: './shopping-cart-item.component.css'
})
export class ShoppingCartItemComponent {
  @Input() productItem!: Product;

}
