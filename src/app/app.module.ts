import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TwoWayPlotDirective } from './two-way-plot.directive';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, TwoWayPlotDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
