import { NgModule } from '@angular/core';
import { D3PlotComponent } from './d3-plot.component';
import { TwoWayPlotDirective } from './two-way-plot.directive';

@NgModule({
  declarations: [D3PlotComponent, TwoWayPlotDirective],
  imports: [],
  exports: [D3PlotComponent, TwoWayPlotDirective],
})
export class D3PlotModule {}
