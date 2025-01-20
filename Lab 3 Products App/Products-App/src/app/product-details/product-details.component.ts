import { Component} from '@angular/core';
import { productsData, Product } from '../product-list/product-list.component';
import { ActivatedRoute} from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';
import { DiscountedPricePipe } from '../discounted-price.pipe';

@Component({
  selector: 'app-product-details',
  imports: [NavigationComponent, DiscountedPricePipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',

})

/*
1==> fi el product card 3mlna button to view the details, w 3leh 3mlna click event byb2a handled
b function btakhod l product id
2==> l function di bt-handle el id dynamically w based on it btroute lel product details page
3==> lazem gowa ngOninit 3shan l details tb2a displayed awwel ma l page ttfete7
##

*/



export class ProductDetailsComponent {
  constructor(private activatedRoute : ActivatedRoute){}
  //l url params dymann mwgoda fil activated routes, fil snapshot fil params
  productItem: any;

  Products: Product[] = productsData.products;
    ngOnInit()
    {
      const id=this.activatedRoute.snapshot.params['id'];
      console.log(id);
      this.productItem = this.Products.find(product => product.id == id) ;
      
    }
    getStars(rating: number| undefined): number[] {
      return Array(Math.round(rating?? 0)).fill(0).map((_, i) => i + 1);
    }




}
