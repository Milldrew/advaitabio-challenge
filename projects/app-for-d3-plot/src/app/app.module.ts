import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TwoWayPlotDirective } from './two-way-plot.directive';

import { D3PlotComponent } from './app.component';

@NgModule({
  declarations: [D3PlotComponent, TwoWayPlotDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [D3PlotComponent],
})
export class AppModule {}
