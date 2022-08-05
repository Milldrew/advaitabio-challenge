import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('Testing D3 twoWayPlot', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`The data should be initialized`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.data).toBeTruthy();
  });

  it('The data should be assigned to the ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#twoWayPlot')?.textContent).toBeFalsy();
  });
});
