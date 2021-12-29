import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ChartComponent } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';
import { ApiService } from 'src/app/APIsServices/api.service';
import { CurrentActivityService } from 'src/app/Services/current-activity.service';
@Component({
  selector: 'app-current-spline-chart',
  templateUrl: './current-spline-chart.component.html',
  styleUrls: ['./current-spline-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CurrentSplineChartComponent implements OnInit {
  lineNull = null;
  public asdf: Object[] = [
    { x: 'Sun', y: 10 },
    { x: 'Mon', y: 18 },
    { x: 'Tue', y: 28 },
    { x: 'Wed', y: 28 },
    { x: 'Thu', y: 26 },
    { x: 'Fri', y: 20 },
    { x: 'Sat', y: 15 },
  ];
  public data2: Object[] = [];
  public data3: Object[] = [];
  public data4: Object[] = [];
  public chartArea: Object = {
    border: {
      width: 0,
    },
  };
  public width: string = Browser.isDevice ? '100%' : '100%';
  //Initializing Primary X Axis
  public primaryXAxis: Object = {
    valueType: 'DateTime',
    // interval: 1,
    majorGridLines: { width: 0 },
    labelIntersectAction: 'Rotate90',
  };
  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
    labelFormat: '{value}%',
    lineStyle: { width: 0 },
    interval: 10,
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
  };
  public marker: Object = {
    visible: true,
    width: 4,
    height: 4,
  };
  public tooltip: Object = {
    enable: true,
  };
  constructor(
    private service: ApiService,
    public _CurrentActivityService: CurrentActivityService
  ) {}

  ngOnInit(): void {
    this.getMachines();
  }
  @ViewChild('line') public line: ChartComponent;

  getMachines() {
    // this.data1 = [];
    this.lineNull = null;
    this.data2 = [];
    this.data3 = [];
    this.data4 = [];
    this._CurrentActivityService.machinesValues.subscribe((res) => {
      const data = JSON.parse(JSON.stringify(res)).oeeChart;
      this.lineNull = 0;
      data.forEach((element, i) => {
        // this.data1.push({
        //   x: element.timeStamp,
        //   y: parseInt((element.oee * 100).toFixed(0)),
        // });
        this.data2.push({
          x: element.timeStamp,
          y: parseInt((element.avalability * 100).toFixed(0)),
        });
        this.data3.push({
          x: element.timeStamp,
          y: parseInt((element.performance * 100).toFixed(0)),
        });
        this.data4.push({
          x: element.timeStamp,
          y: parseInt((element.quality * 100).toFixed(0)),
        });
      });
      this.line.refresh();
      // console.log(this.data1);
    });
  }
}
