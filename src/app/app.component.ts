import { Component, OnChanges, OnInit } from '@angular/core';
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

  clickDotValue = null;
  handleDotClick(event) {
    this.clickDotValue = event;
    console.log(this.clickDotValue, 'click dot event value');
  }
}
