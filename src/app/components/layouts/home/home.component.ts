import { AfterViewInit, Component, OnInit } from '@angular/core';

declare function vendor_carousel(): void;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    vendor_carousel();
  }

}
