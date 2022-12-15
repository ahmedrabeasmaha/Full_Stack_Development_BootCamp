import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input() stars?:number;
  constructor() { }

  ngOnInit(): void {

  }

  getClass(idx: number): string {
    if (idx <= this.stars!) {
      return 'fa fa-star text-primary mr-1';
    }
    else if (idx <= this.stars! + 0.5) {
      return 'fa fa-star-half-alt text-primary mr-1';
    }
    else {
      return 'far fa-star text-primary mr-1';
    }
  }

}
