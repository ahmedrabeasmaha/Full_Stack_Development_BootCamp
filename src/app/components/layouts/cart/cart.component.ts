import { Component } from '@angular/core';
import { CartLineModule } from 'src/app/cart-line/cart-line.module';
import { CartLine } from 'src/app/interfaces/cart-line';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private storageService: StorageService) {
    this.cartLines = storageService.getCartLines();
  }
  cartLines: CartLine[] = [];

  calculation: CartLineModule = new CartLineModule(this.cartLines);
}
