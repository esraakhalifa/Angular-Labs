import { Component} from '@angular/core';
import { productsData, Product } from '../product-list/product-list.component';
import { ActivatedRoute} from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-product-details',
  imports: [NavigationComponent],
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
  productItem: Product = {
    id: 0,
    title: '',
    description: '',
    category: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    tags: [],
    brand: '',
    sku: '',
    weight: 0,
    dimensions: { width: 0, height: 0, depth: 0 },
    warrantyInformation: '',
    shippingInformation: '',
    availabilityStatus: '',
    reviews: [],
    returnPolicy: '',
    minimumOrderQuantity: 0,
    meta: { createdAt: '', updatedAt: '', barcode: '', qrCode: '' },
    images: [],
    thumbnail: ''
  };

  Products: Product[] = productsData.products;
    ngOninit()
    {
      const id=this.activatedRoute.snapshot.params['id'];
      console.log(id);
      this.productItem = this.Products.find(product => product.id == id) ?? this.productItem;
      
    }
    getStars(rating: number| undefined): number[] {
      return Array(Math.round(rating?? 0)).fill(0).map((_, i) => i + 1);
    }




}
