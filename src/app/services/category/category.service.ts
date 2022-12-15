import { Injectable } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }
  getCategories(): any {
    return this.httpClient.get(`${environment.apiUrl}categories`);
  }
}
