import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TwoWayPlotDirective } from './two-way-plot.directive';

@NgModule({
  declarations: [AppComponent, TwoWayPlotDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
