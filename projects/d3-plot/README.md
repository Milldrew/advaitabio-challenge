<h1>d3-plot quick start</h1>

```
npm i -S d3-plot
```

<p>
add to app.module.ts imports array
</p>

```
import { D3PlotModule } = from "d3-plot";
```


<p>add directive to div</p>


```
<div twoWayPlot><div>
```



<h3>Example</h3>
<p>Fill in the attributes</p>


```
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

```


















