//hard linked between lib and app
import { NgModule } from '@angular/core';
import { TwoWayPlotDirective } from './two-way-plot.directive';
import { D3PlotComponent } from './d3-plot.component';

@NgModule({
  declarations: [D3PlotComponent, TwoWayPlotDirective],
  imports: [],
  exports: [TwoWayPlotDirective],
})
export class D3PlotModule {}
