import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interface/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories?:Category[];
  constructor() {
    this.categories = [
      {
        name : 'Category 1',
        image: '/assets/img/cat-1.jpg',
        count: 100
      },
      {
        name : 'Category 1',
        image: '/assets/img/cat-1.jpg',
        count: 100
      },
      {
        name : 'Category 1',
        image: '/assets/img/cat-1.jpg',
        count: 100
      },
      {
        name : 'Category 1',
        image: '/assets/img/cat-1.jpg',
        count: 100
      },
      {
        name : 'Category 1',
        image: '/assets/img/cat-1.jpg',
        count: 100
      },
      {
        name : 'Category 1',
        image: '/assets/img/cat-1.jpg',
        count: 100
      },
      {
        name : 'Category 1',
        image: '/assets/img/cat-1.jpg',
        count: 100
      },
      {
        name : 'Category 1',
        image: '/assets/img/cat-1.jpg',
        count: 100
      },
      {
        name : 'Category 1',
        image: '/assets/img/cat-1.jpg',
        count: 100
      },
      {
        name : 'Category 1',
        image: '/assets/img/cat-1.jpg',
        count: 100
      },
      {
        name : 'Category 1',
        image: '/assets/img/cat-1.jpg',
        count: 100
      },
      {
        name : 'Category 1',
        image: '/assets/img/cat-1.jpg',
        count: 100
      },
    ];
  }

  ngOnInit(): void {
  }
}
