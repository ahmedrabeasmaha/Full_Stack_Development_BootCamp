import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product?: Product;
  classValue: string = 'far fa-heart';
  changeValue: boolean = false;
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    const product: string = this.product?.id!;
    if (localStorage.getItem('lovedItems')) {
      const items: string[] = JSON.parse(localStorage.getItem('lovedItems')!);
      const idx: number = items.findIndex((item: string) => {
        return item === product;
      });
      if (idx != -1) {
        this.classValue = 'fa fa-heart';
        this.changeValue = !this.changeValue;
      }
    }
  }
  addProductToCart() {
    this.productService.addProducts(this.product!, 1);
  }
}
