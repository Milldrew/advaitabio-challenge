import { TestBed } from '@angular/core/testing';
import { TwoWayPlotDirective } from 'd3-plot';
import { AppComponent } from './app.component';

describe('TestDotDirective', () => {
  let fixture;
  beforeEach(async () => {
    fixture = TestBed.configureTestingModule({
      declarations: [AppComponent, TwoWayPlotDirective],
    }).createComponent(AppComponent);
    fixture.detectChanges();
    console.log('BEFORE EACH fixture: ', Array.isArray(fixture));
  });
  afterEach(() => (fixture = null));
  it('should create an instance', () => {});
});
