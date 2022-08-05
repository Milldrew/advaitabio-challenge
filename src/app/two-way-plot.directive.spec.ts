import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TwoWayPlotDirective } from './two-way-plot.directive';
describe('TwoWayPlotDirective', () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    fixture = TestBed.configureTestingModule({
      declarations: [AppComponent, TwoWayPlotDirective],
    }).createComponent(AppComponent);
    fixture.detectChanges();
  });
  it('The twoWayPlot hasbeen instantiated', () => {
    //const directive = new TwoWayPlotDirective();

    const svgElement = fixture.nativeElement.querySelector('svg');
    const section = fixture.nativeElement.querySelector('section');
    expect(svgElement).toBeTruthy();
    expect(section).toBeFalsy();
  });
});
