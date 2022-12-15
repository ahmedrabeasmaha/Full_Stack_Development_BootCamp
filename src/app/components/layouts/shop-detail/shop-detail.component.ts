import { AfterViewInit, Component, OnInit } from '@angular/core';

declare function related_carousel(): void;

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css'],
})
export class ShopDetailComponent implements OnInit, AfterViewInit {
  color: string = 'blue';
  colors: string[] = ['blue', 'red', 'green'];
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    related_carousel();
  }
}
