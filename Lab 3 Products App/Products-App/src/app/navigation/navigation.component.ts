import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterModule, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  shoppingCartCount: number = 0;
  shoppingCartService = inject(ShoppingCartService);
  private cartSubscription!: Subscription;

  ngOnInit() {
    this.cartSubscription = this.shoppingCartService
      .getShoppingCart()
      .subscribe((cartItems) => {
        this.shoppingCartCount = cartItems.length;
      });
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe(); 
  }
}
