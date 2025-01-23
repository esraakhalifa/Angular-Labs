import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product-list/product-list.component';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cartItems: any[] = [];
  shoppingCart = new BehaviorSubject<any[]>([]);
  constructor() {}
  getShoppingCart()
  {
    return this.shoppingCart.asObservable();
  }
  addToCart(product: Product){
    this.cartItems.push(product);
    this.shoppingCart.next(this.cartItems);
    console.log('Added to Cart:', product);
  }
  getCartItems() {
    return this.cartItems;
  }
  getNumberOfCartItems ()
  {
    return this.cartItems.length;
  }
}
