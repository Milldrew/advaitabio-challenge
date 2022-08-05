import { TestBed } from '@angular/core/testing';
import { TwoWayPlotDirective } from 'd3-plot';
import { AppComponent } from './app.component';

describe('Testing D3 twoWayPlot', () => {
  let fixture;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, TwoWayPlotDirective],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  });
  afterEach(() => (fixture = null));

  /*
  it('should create the app', () => {
    fixture.detectChanges();
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`The data should be initialized`, () => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    expect(app.data).toBeTruthy();
  });
  */
});
