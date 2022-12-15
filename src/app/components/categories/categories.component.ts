import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category/category.service';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories?: Category[];
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((apiData: Object) => {
      const data: Object[] = Object.assign(apiData).data;
      this.categories = data.map((data: any) => {
        return {
          id: data._id,
          name: data.name,
          image: data.image,
          count: data.productCount,
        } as Category;
      });
    });
  }
}
