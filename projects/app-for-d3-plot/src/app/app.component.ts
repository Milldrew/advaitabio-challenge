//hard linked between lib and app
import * as data from './data.json';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './d3-plot.component.html',
  styles: [],
})
export class D3PlotComponent implements OnInit {
  data;
  constructor() {
    this.data = Array.from(data);
  }

  clickDotValue = null;
  handleDotClick(event) {
    this.clickDotValue = event;
    console.log(this.clickDotValue, 'click dot event value');
  }
  ngOnInit(): void {}
}
