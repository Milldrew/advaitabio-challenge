import { NgModule } from '@angular/core';
import { D3PlotComponent } from './d3-plot.component';
import { TwoWayPlotDirective } from './two-way-plot.directive';

@NgModule({
  declarations: [TwoWayPlotDirective, D3PlotComponent],
  imports: [],
  exports: [TwoWayPlotDirective],
})
export class D3PlotModule {}
