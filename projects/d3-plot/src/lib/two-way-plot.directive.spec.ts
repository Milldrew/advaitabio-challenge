import * as d3 from 'd3';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { D3PlotComponent } from './d3-plot.component';
import { TwoWayPlotDirective } from './two-way-plot.directive';
describe('TwoWayPlotDirective', () => {
  let fixture: ComponentFixture<D3PlotComponent>;
  beforeEach(async () => {
    fixture = TestBed.configureTestingModule({
      declarations: [D3PlotComponent, TwoWayPlotDirective],
      schemas: [NO_ERRORS_SCHEMA],
    }).createComponent(D3PlotComponent);
    fixture.detectChanges();
  });
  afterEach(() => (fixture = null));
  it('The component should be instantiated', () => {
    fixture.detectChanges();
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it(`The data should be initialized`, () => {
    fixture = TestBed.createComponent(D3PlotComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    expect(app.data).toBeTruthy();
  });
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
    dot.dispatchEvent(new Event('click'));
    expect(AppComponent.clickDotValue).toBeNull();
  });
});
