import { CartLine } from '../interfaces/cart-line';

export class CartLineModule {
  private cartLines: CartLine[];
  constructor(cartlines: CartLine[]) {
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
