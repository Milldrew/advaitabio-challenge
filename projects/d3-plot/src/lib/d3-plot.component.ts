import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-d3-plot',
  template: `
    <div
      id="twoWayPlot"
      class="plot"
      [data]="data"
      twoWayPlot
      correction=""
      l
      sigThr="thr"
      [disableSelection]="true"
      axisXLabel="pORA"
      axisYLabel="pAcc"
      [numTicks]="35"
      sigLabel="pComb"
      itemLabel="pName"
      itemSize="path_size"
      itemId="pathID"
      item="pathway"
      itemScale="log"
      (nextStateFn)="handleDotClick($event)"
    ></div>
    <div
      id="twoWayPlotDisableSelectionFalse"
      class="plot"
      [data]="data"
      twoWayPlot
      correction=""
      l
      sigThr="thr"
      [disableSelection]="false"
      axisXLabel="pORA"
      axisYLabel="pAcc"
      [numTicks]="35"
      sigLabel="pComb"
      itemLabel="pName"
      itemSize="path_size"
      itemId="pathID"
      item="pathway"
      itemScale="log"
      (nextStateFn)="handleDotClick($event)"
    ></div>
  `,
  styles: [],
})
export class D3PlotComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
