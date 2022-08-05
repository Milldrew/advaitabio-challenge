import { TestBed } from '@angular/core/testing';
import { TwoWayPlotDirective } from './two-way-plot.directive';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TestDotDirective', () => {
  let fixture;
  let dotElement;
  beforeAll(async () => {
    fixture = TestBed.configureTestingModule({
      declarations: [AppComponent, TwoWayPlotDirective],
    }).createComponent(AppComponent);
    fixture.detectChanges();
    dotElement = fixture.nativeElement.querySelector('#pathway11202');
  });
  afterAll(() => (fixture = null));
  it('should create an instance', () => {
    dotElement.addEventListener('mouseover', (event) => {
      console.log('MOUSE OVER EVENT', event.target);
    });
    console.log(dotElement);
    dotElement.dispatchEvent(new Event('mouseover'));
  });
});
