import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartLine } from 'src/app/interfaces/cart-line';
import { CalculationService } from 'src/app/services/calculation/calculation.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  country = ['Egypt', 'Kuwait', 'United States'];
  cartline: CartLine[] = this.product.getCartLines();
  calc: CalculationService = new CalculationService(this.cartline);
  order!: any;
  data!: any;
  request!: any;
  checkOutForm!: FormGroup;
  constructor(private product: ProductService) {}

  ngOnInit(): void {
    this.checkOutForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobileNum: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      address1: new FormControl('', Validators.required),
      address2: new FormControl(''),
      country: new FormControl(this.country[0], Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zipCode: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
    });
  }

  onSubmit() {
    if (this.checkOutForm.valid) {
      this.order = this.cartline.map((p) => {
        return { product_id: p.product.id, price: p.price, qty: p.quantity };
      });
      this.data = {
        sub_total_price: this.calc.getSubTotal(),
        shipping: this.calc.getShipping(),
        total_price: this.calc.getTotal(),
        user_id: '6346ac23bb862e01fe4b6535',
        order_date: '2022-12-12',
        order_details: this.order,
        shipping_info: {
          first_name: this.checkOutForm.get('firstName')?.value,
          last_name: this.checkOutForm.get('lastName')?.value,
          email: this.checkOutForm.get('email')?.value,
          mobile_number: this.checkOutForm.get('mobileNum')?.value,
          address1: this.checkOutForm.get('address1')?.value,
          address2: this.checkOutForm.get('address2')?.value,
          country: this.checkOutForm.get('country')?.value,
          city: this.checkOutForm.get('city')?.value,
          state: this.checkOutForm.get('state')?.value,
          zip_code: this.checkOutForm.get('zipCode')?.value,
        },
      };
      this.product.postOrder(this.data).subscribe({
        next(value) {
          console.log(value);
        },
      });
    }
  }
}
