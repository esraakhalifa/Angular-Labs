import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountedPrice'
})
export class DiscountedPricePipe implements PipeTransform {

  transform(price:number, discount:number = 1): unknown {
    if (!price || !discount) return price;  
    return (price - (price * discount / 100)).toFixed(2);
  }

}
