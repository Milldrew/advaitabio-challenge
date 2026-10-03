//hard linked between lib and app
import * as data from './data.json';
import { Component } from '@angular/core';

interface Pathway {
  pathID: string;
  pName: string;
  pORA: string;
  pAcc: string;
  pComb: string;
  path_size: string;
  countDE: string;
  countAll: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './d3-plot.component.html',
  styleUrls: ['./app.component.scss'],
})
export class D3PlotComponent {
  data: Pathway[] = Array.from(data as any);
  selected: Pathway | null = null;

  /** The directive emits the clicked bubble's pathway id. */
  handleDotClick(pathID: unknown) {
    this.selected = this.data.find((p) => String(p.pathID) === String(pathID)) ?? null;
  }

  sci(value: string | number): string {
    const n = Number(value);
    return Number.isFinite(n) ? n.toExponential(2) : String(value);
  }
}
