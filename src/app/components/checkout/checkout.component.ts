import { Component } from '@angular/core';
import { CartLineModule } from 'src/app/cart-line/cart-line.module';
import { CartLine } from 'src/app/interfaces/cart-line';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  constructor(private storageService: StorageService) {
    this.cartLines = storageService.getCartLines();
  }

  cartLines: CartLine[] = [];

  calculation: CartLineModule = new CartLineModule(this.cartLines);
}
