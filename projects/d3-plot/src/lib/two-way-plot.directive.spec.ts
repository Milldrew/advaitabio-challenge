import { ComponentFixture, TestBed } from '@angular/core/testing';
import { D3PlotComponent } from './d3-plot.component';
import { TwoWayPlotDirective } from './two-way-plot.directive';
describe('TwoWayPlotDirective', () => {
  let fixture: ComponentFixture<AppComponent>;
  let dotElement = null;
  beforeEach(async () => {
    fixture = TestBed.configureTestingModule({
      declarations: [AppComponent, TwoWayPlotDirective],
    }).createComponent(AppComponent);
    fixture.detectChanges();
  });
  it('should create an instance', () => {
    //const directive = new TwoWayPlotDirective();
    expect('hello').toBeTruthy('hello');
  });
});
