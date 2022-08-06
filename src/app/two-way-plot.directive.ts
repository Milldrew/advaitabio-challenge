import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { log10 } from './common-function';
import * as d3 from 'd3';
@Directive({
  selector: '[libTwoWayPlot]',
})
export class TwoWayPlotDirective implements OnChanges {
  /**
   *@description each elment is an object that represents a dot.
   */
  @Input() data: Object[];
  /**
   *@description FIND OUT WHAT THIS IS AND DOCUMENT IT HERE
   */
  @Input() correction;
  /**
   *@description FIND OUT WHAT THIS IS AND DOCUMENT IT HERE
   */
  @Input() upType;
  /**
   *@description FIND OUT WHAT THIS IS AND DOCUMENT IT HERE
   */
  @Input() sigThr;
  /**
   *@description FIND OUT WHAT THIS IS AND DOCUMENT IT HERE
   */
  @Input() selectedItem;
  /**
   *@description When true the spots will emit their itemID, via nextStateFn Output when false it will not emit.
   */
  @Input() disableSelection;
  /**
   *@description The value will be used to label the x axis on the two way plot.
   */
  @Input() axisXLabel;
  /**
   *@description  The value will be used to label the y axis on the two way plot.
   */
  @Input() axisYLabel;
  /**
   *@description FIND OUT WHAT THIS IS AND DOCUMENT IT HERE
   */
  @Input() numTicks: number;
  /**
   *@description FIND OUT WHAT THIS IS AND DOCUMENT IT HERE
   */
  @Input() sigLabel;
  /**
   *@description This value matches the key on the data that deterimnes the spots name.
   */
  @Input() itemLabel;
  /**
   *@description This value will match the key on the data that determines the spots size from the data.
   */
  @Input() itemSize;
  /**
   *@description This value matches the key used to create the spotsId `${item}${itemId}`
   */
  @Input() itemId;
  /**
   *@description This value matches the key used to create the spotsId `${item}${itemId}`
   */
  @Input() item;
  /**
   *@description This function will triggered when clicking a spot if the disableSelection is true and it will emit the itemId of the spot that is clicked
   */
  @Output() nextStateFn = new EventEmitter<{}>();
  @Input() itemScale;
  @Input() showXThreshold;
  @Input() showYThreshold;
  private margin;
  private axisOffset;
  private mainComp;
  private tooltip;
  private svgExt;
  private svg;
  private width;
  private height;
  private x;
  private y;
  private color;
  /**
   * @description property  itemScale determines if pSize uses linear or log to determine axes
   */
  private pSize:
    | d3.ScaleLogarithmic<number, number, never>
    | d3.ScaleLinear<number, number, never>;
  private xAxis;
  private yAxis;
  private twoWayPlotVersion = 'TWP v2.0';

  constructor(private ele: ElementRef) {
    this.margin = { top: 20, right: 20, bottom: 75, left: 70 };
  }
  init() {
    this.axisOffset = 20;

    this.mainComp = d3.select(this.ele.nativeElement).append('div');

    this.tooltip = this.mainComp
      .append('div')
      .attr('class', 'd3-tip')
      .style('position', 'absolute')
      .style('z-index', '10')
      .style('visibility', 'hidden')
      .text('');

    this.svgExt = this.mainComp
      .append('svg')
      .attr('width', this.ele.nativeElement.parentElement.offsetWidth)
      .attr('height', this.ele.nativeElement.parentElement.offsetWidth);

    this.svgExt
      .append('rect')
      .attr('width', '100%')
      .attr('height', '100%')
      .style('fill', 'white');

    this.svg = this.svgExt
      .append('g')
      .attr('class', 'drawingRegion')
      .attr(
        'transform',
        'translate(' + this.margin.left + ',' + this.margin.top + ')'
      );

    this.width =
      this.svgExt.attr('width') - this.margin.left - this.margin.right;
    this.height =
      this.svgExt.attr('height') - this.margin.top - this.margin.bottom;

    if (!this.disableSelection) {
      this.disableSelection = false;
    }

    this.x = d3.scaleLinear().range([0, this.width]);
    this.y = d3.scaleLinear().range([this.height, 0]);

    this.color = d3.scaleOrdinal().range(['black', 'red']);
    this.color.domain([false, true]);

    if (this.itemScale === 'log') {
      this.pSize = d3.scaleLog().base(2).range([3.5, 14]);
    } else {
      this.pSize = d3.scaleLinear().range([3.5, 14]);
    }

    this.xAxis = d3.axisBottom(this.x);
    this.yAxis = d3.axisLeft(this.y);

    var numTicks = Math.floor(this.width / this.numTicks);

    this.yAxis.ticks(numTicks);
    this.xAxis.ticks(numTicks);

    this.svg
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + (this.height + this.axisOffset) + ')')
      .append('text')
      .style('font-weight', 'bold')
      .style('font-size', '12px')
      .style('font-family', "'Helvetica Neue', Helvetica, Arial, sans-serif")
      .attr('class', 'label')
      .attr('x', this.width)
      .attr('y', -6)
      .style('text-anchor', 'end');

    this.svg
      .append('g')
      .attr('class', 'y axis')
      .append('text')
      .style('font-weight', 'bold')
      .style('font-size', '12px')
      .style('font-family', "'Helvetica Neue', Helvetica, Arial, sans-serif")
      .attr('class', 'label')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end');

    if (this.showXThreshold) {
      this.svg
        .append('line')
        .attr('class', 'x thr')
        .style('stroke-dasharray', '3, 3')
        .style('stroke', this.color(true))
        .style('stroke-opacity', 1e-6);
    }

    if (this.showYThreshold) {
      this.svg
        .append('line')
        .attr('class', 'y thr')
        .style('stroke-dasharray', '3, 3')
        .style('stroke', this.color(true))
        .style('stroke-opacity', 1e-6);
    }

    this.svgExt
      .append('text')
      .attr('x', '99%')
      .attr('y', '99%')
      .style('font-size', '10px')
      .style('font-weight', 'bold')
      .style('font-family', "'Helvetica Neue', Helvetica, Arial, sans-serif")
      .attr('class', 'label')
      .style('text-anchor', 'end')
      .text(
        this.twoWayPlotVersion +
          ', ' +
          '(c) Advaita Corporation ' +
          new Date().getFullYear()
      );
  }

  ngOnChanges(changes) {
    if (!this.svgExt) {
      this.init();
    }

    if (changes.upType && changes.upType.currentValue) {
      this.updateData(this.data, this.correction, this.sigThr);
    }

    if (changes.selectedItem && changes.selectedItem.currentValue) {
      this.updateSelection(
        changes.selectedItem.currentValue,
        changes.selectedItem.previousValue
      );
    }

    if (changes.sigThr && changes.sigThr.currentValue) {
      this.updateData(this.data, this.correction, changes.sigThr.currentValue);
    }

    if (changes.data && changes.data.currentValue) {
      this.updateData(changes.data.currentValue, this.correction, this.sigThr);
    }

    if (changes.correction && changes.correction.currentValue != undefined) {
      this.updateData(this.data, changes.correction.currentValue, this.sigThr);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.ele.nativeElement.parentElement.offsetWidth === 0) {
      return;
    }

    this.svgExt
      .attr('width', this.ele.nativeElement.parentElement.offsetWidth)
      .attr('height', this.ele.nativeElement.parentElement.offsetWidth);

    this.width =
      this.svgExt.attr('width') - this.margin.left - this.margin.right;
    this.height =
      this.svgExt.attr('height') - this.margin.top - this.margin.bottom;

    this.x.range([0, this.width]);
    this.y.range([this.height, 0]);
    var numTicks = Math.floor(this.width / this.numTicks);

    this.yAxis.ticks(numTicks);
    this.xAxis.ticks(numTicks);

    this.updateData(this.data, this.correction, this.sigThr);
  }

  updateSelection(newID, oldID) {
    if (oldID) {
      this.svg
        .select('#' + this.item + oldID)
        .transition()
        .duration(500)
        .style('fill', (d) => {
          return this.color(d[this.sigLabel + this.correction] < this.sigThr);
        })
        .style('fill-opacity', 0.7);
    }

    if (newID) {
      this.svg.select('#' + this.item + newID).raise();

      this.svg
        .select('#' + this.item + newID)
        .transition()
        .duration(500)
        .style('fill', function (d) {
          return 'yellow';
        })
        .style('fill-opacity', 1);
    }
  }

  updateData(data, correction, thr) {
    if (!data) {
      return;
    }
    if (correction !== '') {
      if (!correction) {
        return;
      }
    }
    if (!thr) {
      thr = 0;
    }

    let yLabel, yDisplayLabel;
    if (this.upType) {
      yLabel = this.axisYLabel + this.upType + correction;
      if (this.itemLabel === 'chemicalName') {
        yDisplayLabel =
          this.axisYLabel +
          (this.upType === '_p' ? '_pres' : '_abs') +
          correction;
      } else {
        yDisplayLabel =
          this.axisYLabel +
          (this.upType === '_p' ? '_act' : '_inh') +
          correction;
      }
    } else {
      yLabel = this.axisYLabel + correction;
      yDisplayLabel = yLabel;
    }

    let xLabel = this.axisXLabel + correction;
    let sigLabel = this.sigLabel + correction;
    let sigThr = thr;

    this.x
      .domain([
        0,
        d3.max(data, function (d) {
          if (d[xLabel]) {
            return -log10(d[xLabel]);
          }
        }) || -log10(1e-6),
      ])
      .nice();
    this.y
      .domain([
        0,
        d3.max(data, function (d) {
          if (d[yLabel]) {
            return -log10(d[yLabel]);
          }
        }) || -log10(1e-6),
      ])
      .nice();
    this.pSize.domain(
      d3.extent(data, (d) => {
        return +d[this.itemSize];
      })
    );

    // update axes
    this.svg
      .transition()
      .duration(750)
      .select('.x.axis')
      .attr('transform', 'translate(0,' + (this.height + this.axisOffset) + ')')
      .call(this.xAxis)
      .select('.label')
      .attr('x', this.width / 2)
      .attr('y', this.margin.bottom - 2 * this.axisOffset)
      .style('text-anchor', 'middle')
      .style('fill', 'black')
      .text('-log10(' + xLabel + ')');
    this.svg
      .transition()
      .duration(750)
      .select('.y.axis')
      .attr('transform', 'translate(-' + this.axisOffset + ',0)')
      .call(this.yAxis)
      .select('.label')
      .attr('x', -this.height / 2)
      .attr('y', -this.margin.left + this.axisOffset)
      .style('text-anchor', 'middle')
      .style('fill', 'black')
      .text('-log10(' + yDisplayLabel + ')');

    this.svg
      .select('.x.axis')
      .select('.domain')
      .style('fill', 'none')
      .style('stroke', '#000')
      .style('shape-rendering', 'crispEdges');

    this.svg
      .select('.y.axis')
      .select('.domain')
      .style('fill', 'none')
      .style('stroke', '#000')
      .style('shape-rendering', 'crispEdges');

    this.svg
      .select('.x.axis')
      .selectAll('.tick text')
      .style('font-size', '14px')
      .style('font-family', "'Helvetica Neue', Helvetica, Arial, sans-serif");

    this.svg
      .select('.y.axis')
      .selectAll('.tick text')
      .style('font-size', '14px')
      .style('font-family', "'Helvetica Neue', Helvetica, Arial, sans-serif");

    // update the dots
    var allDots = this.svg.selectAll('.dot').data(data, (d) => {
      return d[this.itemId];
    });

    allDots.attr('class', 'update');

    var self = this;

    allDots
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .style('cursor', 'pointer')
      .style('stroke', '#000')
      .style('fill-opacity', '70%')
      .attr('id', (d) => {
        return this.item + d[this.itemId];
      })
      .attr('r', (d) => {
        return this.pSize(d[this.itemSize]);
      })
      .attr('cx', (d) => {
        return this.x(-log10(d[xLabel]));
      })
      .attr('cy', (d) => {
        return d[yLabel] ? this.y(-log10(d[yLabel])) : this.y(-log10(1));
      })
      .on('mouseover', function (event, d) {
        let circle_data = d;
        self.tooltip.text(circle_data[self.itemLabel]);
        self.tooltip.style('visibility', 'visible');
        d3.select(this)
          .transition()
          .duration(100)
          .attr('r', 5 + self.pSize(circle_data[self.itemSize]));
      })
      .on('mousemove', (event) => {
        this.tooltip
          .style('top', event.layerY - 10 + 'px')
          .style('left', event.layerX + 10 + 'px');
      })
      .on('mouseout', function (event, d) {
        let circle_data = d;
        self.tooltip.style('visibility', 'hidden');
        d3.select(this)
          .transition()
          .duration(100)
          .attr('r', self.pSize(circle_data[self.itemSize]));
      })
      .on('click', (event, d) => {
        if (this.disableSelection) {
          this.nextStateFn.emit(d[this.itemId]);
        }
      });

    allDots
      .attr('class', 'dot')
      .attr('r', (d) => {
        return this.pSize(d[this.itemSize]);
      })
      .transition()
      .duration(750)
      .attr('cy', (d) => {
        return d[yLabel] ? this.y(-log10(d[yLabel])) : this.y(-log10(1));
      })
      .attr('cx', (d) => {
        return this.x(-log10(d[xLabel]));
      })
      .style('fill', (d) => {
        if (this.selectedItem) {
          if (Number(this.selectedItem) === d[this.itemId]) {
            return 'yellow';
          }
        }
        return d[sigLabel]
          ? this.color(d[sigLabel] < sigThr)
          : this.color(d[xLabel] < sigThr);
      });

    // update thresholds
    //
    this.svg
      .select('.x.thr')
      .attr('x1', this.x(-log10(sigThr)))
      .attr('y1', this.y.range()[0])
      .attr('x2', this.x(-log10(sigThr)))
      .attr('y2', this.y.range()[0])
      .transition()
      .duration(750)
      .style('stroke-opacity', 1)
      .attr('y2', this.y.range()[1]);

    this.svg
      .select('.y.thr')
      .attr('x1', this.x.range()[0])
      .attr('y1', this.y(-log10(sigThr)))
      .attr('x2', this.x.range()[0])
      .attr('y2', this.y(-log10(sigThr)))
      .transition()
      .duration(750)
      .style('stroke-opacity', 1)
      .attr('x2', this.x.range()[1]);

    allDots.exit().remove();
    // end update dots
  }
}
