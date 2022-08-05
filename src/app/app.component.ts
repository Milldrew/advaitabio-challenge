import { Component, OnInit } from '@angular/core';
import * as data from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data;
  constructor() {
    this.data = Array.from(data);
  }
  handleDotClick(event) {
    console.log(event);
  }
}
