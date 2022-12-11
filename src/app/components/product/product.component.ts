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
  constructor(private productService: ProductService) {}

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

  addToLove(loveItems: string) {
    if (loveItems) {
      const items: string[] = JSON.parse(loveItems);
      items.push(this.product?.id!);
      localStorage.setItem('lovedItems', JSON.stringify(items));
    } else {
      localStorage.setItem('lovedItems', JSON.stringify([this.product?.id]));
    }
  }

  changeClass(changeValue: boolean): void {
    if (changeValue) {
      this.classValue = 'far fa-heart';
      this.changeValue = !changeValue;
      this.productService.delFromLoved(this.product!);
    } else {
      this.productService.addToLoved(this.product!);
      this.classValue = 'fa fa-heart';
      this.changeValue = !changeValue;
    }
  }
}
