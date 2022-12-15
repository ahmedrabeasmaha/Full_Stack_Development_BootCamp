import { Inject, Injectable } from '@angular/core';
import { CartLine } from 'src/app/interfaces/cart-line';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  cartLines: CartLine[];
  constructor(@Inject('cartlines') private cartlines: CartLine[]) {
    this.cartLines = cartlines;
  }
  getTotal(): number {
    return this.getShipping() + this.getSubTotal();
  }
  getSubTotal(): number {
    return this.cartLines
      .map((x) => x.price * x.quantity)
      .reduce((a, v) => (a += v), 0);
  }
  getShipping(): number {
    return (
      this.cartLines.map((x) => x.quantity).reduce((a, v) => (a += v), 0) * 2
    );
  }
}
