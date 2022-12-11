import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from 'src/app/interfaces/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  numOfLikes: number = 0;
  constructor(private httpClient: HttpClient) {
    if (localStorage.getItem('lovedItems')) {
      const items: string[] = JSON.parse(localStorage.getItem('lovedItems')!);
      this.numOfLikes = items.length;
    }
  }
  getFeatured(): Observable<Object> {
    return this.httpClient.get(`${environment.apiUrl}products/getFeatured`);
  }
  getRecent(): Observable<Object> {
    return this.httpClient.get(`${environment.apiUrl}products/getRecent`);
  }
  addToLoved(product: Product): void {
    if (localStorage.getItem('lovedItems')) {
      const items: string[] = JSON.parse(localStorage.getItem('lovedItems')!);
      items.push(product.id!);
      localStorage.setItem('lovedItems', JSON.stringify(items));
      this.numOfLikes = items.length;
    } else {
      localStorage.setItem('lovedItems', JSON.stringify([product.id!]));
      this.numOfLikes = 1;
    }
  }
  delFromLoved(product: Product): void {
    const items: string[] = JSON.parse(localStorage.getItem('lovedItems')!);
    const idx: number = items.findIndex((item) => {
      return item === product.id;
    });
    items.splice(idx, 1);
    localStorage.setItem('lovedItems', JSON.stringify(items));
    this.numOfLikes = items.length;
  }
}
