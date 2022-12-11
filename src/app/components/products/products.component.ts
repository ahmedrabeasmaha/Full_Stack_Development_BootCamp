import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input() type?: string;
  @Input() title?: string;
  products?: Product[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    const getProducts = (data: any) => {
      this.products = data.data.map((data: any) => {
        return {
          id: data._id,
          name: data.name,
          image: data.image,
          descr: data.description,
          price: data.price,
          discount: data.discount,
          rating: data.rating,
          ratingCount: data.rating_count,
        } as Product;
      });
    };
    if (this.type == 'featured') {
      this.productService.getFeatured().subscribe(getProducts);
    } else {
      this.productService.getRecent().subscribe(getProducts);
    }
  }
}
