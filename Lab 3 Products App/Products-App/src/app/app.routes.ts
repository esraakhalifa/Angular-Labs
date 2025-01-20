import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


export const routes: Routes = [
    {
    path: '',
    component: ProductListComponent,
    title: 'Product list'
  },
  {
    path:'product-details/:id',
    component: ProductDetailsComponent,
    title: 'Product Details'
  },

  {
    path: '**',
    component: NotFoundComponentComponent,
    title: 'Not found page'
  },
];
