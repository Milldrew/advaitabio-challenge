import { TestBed } from '@angular/core/testing';

import { D3PlotService } from './d3-plot.service';

describe('D3PlotService', () => {
  let service: D3PlotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(D3PlotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
