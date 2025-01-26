import { Component } from '@angular/core';
import productsDataJSON from './../../../public/assets/products.json'; 
import { ProductCardComponent } from '../product-card/product-card.component';
//import { ShoppingCartService } from '../services/shopping-cart.service';
import { ProductsService } from '../services/products.service';



interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Review {
  rating: number;
  comment: string;
  date: string; 
  reviewerName: string;
  reviewerEmail: string;
}

interface Meta {
  createdAt: string;
  updatedAt: string; 
  barcode: string;
  qrCode: string;
}
export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

 export interface ProductsData {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
export const productsData = productsDataJSON as { products: Product[]; total: number; skip: number; limit: number };
@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {
  Products:any = []
  constructor(private productsService: ProductsService) {}
  ngOnInit(){
    this.productsService.getProductList().subscribe(res => this.Products 
      = res.products);
  }
  


}
