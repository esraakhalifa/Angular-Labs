import { Component, inject, Input} from '@angular/core';
import { productsData, Product } from '../product-list/product-list.component';
import { ActivatedRoute} from '@angular/router';
import { DiscountedPricePipe } from '../discounted-price.pipe';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  imports: [ DiscountedPricePipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',

})





export class ProductDetailsComponent {

  //@Input() id: string = '';
  activatedRoute = inject(ActivatedRoute)
  productsService = inject(ProductsService);
  productItem: any;
    ngOnInit()
    {
      const id=this.activatedRoute.snapshot.params['id'];
      
      // console.log(id);
      // this.productItem = this.Products.find(product => product.id == id);
      return this.productsService.getProductById(id).subscribe(res => this.productItem =
        res
      );
    }
        getStars(rating: number| undefined): number[] {
      return Array(Math.round(rating?? 0)).fill(0).map((_, i) => i + 1);
    }
      
    }






