import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart-component';


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
    path:'login',
    component: UserLoginComponent,
    title: 'Login'
  },
  {
    path:'register',
    component: RegistrationComponent,
    title: 'Register'
  },
  {
    path:'shopping-cart',
    component: ShoppingCartComponent,
    title: 'Shopping Cart'
  },

  {
    path: '**',
    component: NotFoundComponentComponent,
    title: 'Not found page'
  },

];
