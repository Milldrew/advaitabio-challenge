import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
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
  afterEach(() => (fixture = null));
  it('The twoWayPlot hasbeen instantiated', () => {
    const svgElement = fixture.nativeElement.querySelector('svg');
    const section = fixture.nativeElement.querySelector('section');
    expect(svgElement).toBeTruthy();
    expect(section).toBeFalsy();
  });
  it('If disableSelection is true clicking a spot emits the itemId', () => {
    const twoWayPlot = fixture.nativeElement.querySelector('#twoWayPlot');
    let disableSelection = twoWayPlot.getAttribute(
      'ng-reflect-disable-selection'
    );
    expect(fixture.componentInstance.clickDotValue).toBeNull();
    const dot = fixture.nativeElement.querySelector('#pathway11202');
    console.log(dot, 'DOT');
    dot.dispatchEvent(new Event('click'));
    disableSelection = twoWayPlot.getAttribute('ng-reflect-disable-selection');
    expect(fixture.componentInstance.clickDotValue).toBe('11202');
  });
  it("If disableSelection is false the click doesn't emit the itemId", () => {
    const AppComponent = fixture.componentInstance;
    expect(AppComponent.clickDotValue).toBeNull();
    const dot = fixture.nativeElement.querySelector(
      '#twoWayPlotDisableSelectionFalse #pathway11202'
    );
    console.log('dot', dot.dispatchEvent);
    dot.dispatchEvent(new Event('click'));
    expect(AppComponent.clickDotValue).toBeNull();
  });
});
