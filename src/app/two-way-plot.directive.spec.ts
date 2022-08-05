import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TwoWayPlotDirective } from './two-way-plot.directive';
describe('TwoWayPlotDirective', () => {
  let fixture: ComponentFixture<any>;
  let dotElement = null;
  beforeEach(async () => {
    fixture = TestBed.configureTestingModule({
      declarations: [AppComponent, TwoWayPlotDirective],
    }).createComponent(AppComponent);
    fixture.detectChanges();
  });
  afterEach(() => (fixture = null));
  it('The twoWayPlot hasbeen instantiated', () => {
    const svgElement = fixture.nativeElement.querySelector('svg');
    const section = fixture.nativeElement.querySelector('section');
    expect(svgElement).toBeTruthy();
    expect(section).toBeFalsy();
  });
  it('The twoWayPlot hasbeen instantiated', () => {
    const twoWayPlot = fixture.nativeElement.querySelector('#twoWayPlot');
    const dot = fixture.nativeElement.querySelector('#pathway11202');
    console.log(fixture.componentInstance.clickDotValue, 'clickDotValue');
    const disableSelection = twoWayPlot.getAttribute(
      'ng-reflect-disable-selection'
    );
  });
});
