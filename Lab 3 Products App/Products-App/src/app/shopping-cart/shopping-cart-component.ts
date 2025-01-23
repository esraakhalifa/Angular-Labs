import { Component } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCartItemComponent } from '../shopping-cart-item/shopping-cart-item.component';


@Component({
  selector: 'app-shopping-cart',
  imports: [ShoppingCartItemComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  cartItems: any[] = [];

  constructor(private cartService: ShoppingCartService) {
    this.cartService.shoppingCart.subscribe(items => {
      this.cartItems = items;
    });
}
}
