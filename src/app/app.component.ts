import { Component, OnInit } from '@angular/core';
import * as data from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'd3-lib-workspace';
  data = 'data from component';
  mockData = {
    xLabel: 'xlabel',
    yLabel: 'ylabel',
  };
  constructor() {
    console.log('hello from app root');
  }
}
