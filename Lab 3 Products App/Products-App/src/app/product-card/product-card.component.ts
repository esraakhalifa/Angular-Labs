import { Component, inject, Input } from '@angular/core';
import {  Router } from '@angular/router';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() productItem:any;

  constructor(private router: Router){}
  shoppingCartService = inject(ShoppingCartService);

  getDetails(id:number)
  {
    this.router.navigate(['/product-details', id]);
  }

  getStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0).map((_, i) => i + 1);
  }
 

  addToCart() {
    let product = this.productItem;
    if (product)this.shoppingCartService.addToCart(product);
  }

}
