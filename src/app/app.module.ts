import { D3PlotModule } from "d3-plot";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, D3PlotModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
