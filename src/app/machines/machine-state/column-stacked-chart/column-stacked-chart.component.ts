import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-column-stacked-chart',
  templateUrl: './column-stacked-chart.component.html',
  styleUrls: ['./column-stacked-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ColumnStackedChartComponent implements OnInit {
  public data: Object[] = [
    { x: '2014', y: 111.1 },
    { x: '2015', y: 127.3 },
    { x: '2016', y: 143.4 },
    { x: '2017', y: 159.9 },
    { x: '2018', y: 100 },
    { x: '2019', y: 59.9 },
  ];
  public data1: Object[] = [
    { x: '2014', y: 76.9 },
    { x: '2015', y: 99.5 },
    { x: '2016', y: 121.7 },
    { x: '2017', y: 142.5 },
    { x: '2018', y: 110 },
    { x: '2019', y: 42.5 },
  ];
  public data2: Object[] = [
    { x: '2014', y: 66.1 },
    { x: '2015', y: 79.3 },
    { x: '2016', y: 91.3 },
    { x: '2017', y: 102.4 },
    { x: '2018', y: 111 },
    { x: '2019', y: 82.4 },
  ];
  public data3: Object[] = [
    { x: '2014', y: 34.1 },
    { x: '2015', y: 38.2 },
    { x: '2016', y: 44.0 },
    { x: '2017', y: 51.6 },
    { x: '2018', y: 51.6 },
    { x: '2019', y: 151.6 },
  ];
  //Initializing Primary X Axis
  public primaryXAxis: Object = {
    majorGridLines: { width: 0 },
    minorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    interval: 1,
    lineStyle: { width: 0 },
    labelIntersectAction: 'Rotate45',
    valueType: 'Category',
  };
  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
    title: 'Sales',
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    majorGridLines: { width: 1 },
    minorGridLines: { width: 1 },
    minorTickLines: { width: 0 },
    labelFormat: '{value}B',
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
  public title: string = 'Mobile Game Market by Country';
  public chartArea: Object = {
    border: {
      width: 0,
    },
  };
  public width: string = Browser.isDevice ? '100%' : '85%';

  constructor() {
    //code
  }
  ngOnInit(): void {}
}
