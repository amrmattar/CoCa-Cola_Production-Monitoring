import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import { ChartTheme, ILoadedEventArgs } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';
import { CurrentActivityService } from 'src/app/Services/current-activity.service';
import { ChartComponent } from '@syncfusion/ej2-angular-charts';
import { modelChanged } from '@syncfusion/ej2-grids';
import { data } from 'src/app/site/site-machines/data';

@Component({
  selector: 'app-cycle-time',
  templateUrl: './cycle-time.component.html',
  styleUrls: ['./cycle-time.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CycleTimeComponent implements OnInit, OnChanges {
  lineData = null;
  public chartArea: Object = {
    border: {
      width: 0,
    },
  };
  public border: Object = {
    width: 3,
    color: '#4278F0',
  };
  public border1: Object = {
    width: 3,
    color: '#CA4E82',
  };
  public border2: Object = {
    width: 3,
    color: '#7f2ccb',
  };
  public width: string = Browser.isDevice ? '100%' : '82%';
  public cycleChart: Object[] = [];
  public throughputChart: Object[] = [];
  public productionChart: Object[] = [];
  public cycleChartCompair: Object[] = [];
  public throughputChartCompair: Object[] = [];
  public productionChartCompair: Object[] = [];

  public primaryXAxis: Object = {
    valueType: 'DateTime',
    labelStyle: { color: 'transparent' },
    majorGridLines: { width: 0 },
    intervalType: 'Years',
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
  };
  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
    labelStyle: { color: 'transparent' },
    lineStyle: { width: 0 },
    majorGridLines: { width: 0 },
    intrval: 1,
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
  };
  public marker: Object = {
    visible: true,
    width: 5,
    height: 5,
  };
  public tooltip: Object = {
    enable: true,
  };
  // custom code start
  public load(args: ILoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = <ChartTheme>(
      (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(
        /-dark/i,
        'Dark'
      )
    );
  }
  // custom code end
  //Initializing Chart Title
  public title: string = 'Inflation Rate in Percentage';
  constructor(public _CurrentActivityService: CurrentActivityService) {
    // code
  }
  @ViewChild('line') public line: ChartComponent;
  @ViewChild('line2') public line2: ChartComponent;
  @ViewChild('line3') public line3: ChartComponent;
  ngOnInit(): void {
    setTimeout(() => {
      this.cycleChart = [];
      this.throughputChart = [];
      this.productionChart = [];
      const data = this._CurrentActivityService.onDataget;
      this._CurrentActivityService.dashboardModelCharts.machines[1]?.lineData.forEach(
        (element) => {
          element.cycleTime = element.cycleTime * 360000;
          // console.log(element.cycleTime);
          this.cycleChart.push({
            x: element.timeStamp,
            y: parseInt(element.cycleTime),
          });
          this.throughputChart.push({
            x: element.timeStamp,
            y: parseInt(element.throughput),
          });
          this.productionChart.push({
            x: element.timeStamp,
            y: parseInt(element.productionOutPut),
          });
        }
      );
      setTimeout(() => {
        this.line.refresh();
        this.line2.refresh();
        this.line3.refresh();
      }, 50);
      // console.log(this.cycleChart);
    }, 10000);

    // this._CurrentActivityService.onDatagetCompair.subscribe((x) => {
    //   this.cycleChartCompair = [];
    //   this.throughputChartCompair = [];
    //   this.productionChartCompair = [];
    //   const data = x;
    //   data?.factory_Hourly_Charts?.forEach((element, i) => {
    //     console.log(this.cycleChart[i]['x']);
    //     this.cycleChartCompair.push({
    //       x: this.cycleChart[i]['x'],
    //       y: parseInt(element.cycleTime),
    //     });
    //     this.throughputChartCompair.push({
    //       x: this.cycleChart[i]['x'],
    //       y: parseInt(element.throughput),
    //     });
    //     this.productionChartCompair.push({
    //       x: this.cycleChart[i]['x'],
    //       y: parseInt(element.productionOutput),
    //     });
    //   });
    //   setTimeout(() => {
    //     this.line.refresh();
    //     this.line2.refresh();
    //     this.line3.refresh();
    //   }, 50);
    //   console.log(this.throughputChart);
    // });
  }
  ngOnChanges(changes: SimpleChanges) {}
}
