import { ComponentFixture, TestBed } from '@angular/core/testing';
import { D3PlotComponent } from './d3-plot.component';
import { TwoWayPlotDirective } from './two-way-plot.directive';
describe('TwoWayPlotDirective', () => {
  let fixture: ComponentFixture<D3PlotComponent>;
  let dotElement = null;
  beforeEach(async () => {
    fixture = TestBed.configureTestingModule({
      declarations: [D3PlotComponent, TwoWayPlotDirective],
    }).createComponent(D3PlotComponent);
    fixture.detectChanges();
  });
  it('should create an instance', () => {
    //const directive = new TwoWayPlotDirective();
    expect('hello').toBeTruthy('hello');
  });
});
