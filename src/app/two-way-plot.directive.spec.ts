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
    console.log('BEFORE EACH fixture: ', Array.isArray(fixture));
  });
  afterEach(() => (fixture = null));
  it('The twoWayPlot hasbeen instantiated', () => {
    //const directive = new TwoWayPlotDirective();

    const svgElement = fixture.nativeElement.querySelector('svg');
    const section = fixture.nativeElement.querySelector('section');
    expect(svgElement).toBeTruthy();
    expect(section).toBeFalsy();
  });
  it('The twoWayPlot hasbeen instantiated', () => {
    //const directive = new TwoWayPlotDirective();

    const svgElement = fixture.nativeElement.querySelector('svg');
    const section = fixture.nativeElement.querySelector('section');
    expect(svgElement).toBeTruthy();
    expect(section).toBeFalsy();
  });
  it('Test the dot initial, mouse over, mouse out values', () => {
    //const directive = new TwoWayPlotDirective();
    //11202 initialValue = 14, hoverValue = 19 mouseOut = 14
    let dot11202: HTMLElement =
      fixture.nativeElement.querySelector('#pathway11202');
    let r = dot11202.attributes.getNamedItem('r').value;
    console.log(r, 'FROM DOT11202');
    console.log(typeof r, 'FROM DOT11202 TYPEOF');
    expect(r).toBe('14');
    console.log(dot11202.dispatchEvent, 'dispatch function');
    dot11202.addEventListener('mouseover', () => {
      console.log(dot11202);
      console.log(r);
    });
    dot11202.dispatchEvent(new Event('mouseover'));
    console.log(r, 'AFTER EVENT');
  });
});
