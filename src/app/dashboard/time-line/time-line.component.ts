import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { formatDate } from '@angular/common';
import { CurrentActivityService } from 'src/app/Services/current-activity.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexFill,
  ApexGrid,
  ApexAnnotations,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStates,
  ApexTheme,
  ApexLegend,
} from 'ng-apexcharts';

export type ChartOptions = {
  chart: ApexChart;
  annotations: ApexAnnotations;
  colors: string[];
  dataLabels: ApexDataLabels;
  series: ApexAxisChartSeries;
  stroke: ApexStroke;
  labels: string[];
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  states: ApexStates;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  theme: ApexTheme;
};
@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TimeLineComponent implements OnInit {
  public line1Timeline: Partial<ChartOptions>;
  public line2Timeline: Partial<ChartOptions>;
  public line3Timeline: Partial<ChartOptions>;
  public line4Timeline: Partial<ChartOptions>;
  public line5Timeline: Partial<ChartOptions>;
  line1Data = {
    name: 'Line 1',
    data: [],
  };
  line2Data = {
    name: 'Line 2',
    data: [],
  };
  line3Data = {
    name: 'Line 3',
    data: [],
  };
  line4Data = {
    name: 'Line 4',
    data: [],
  };
  line5Data = {
    name: 'Line 5',
    data: [],
  };
  line1Null = null;
  line2Null = null;
  line3Null = null;
  line4Null = null;
  line5Null = null;
  constructor(public _CurrentActivityService: CurrentActivityService) {
    this.line1Timeline = {
      series: [],
      chart: {
        height: 100,
        type: 'rangeBar',
        toolbar: {
          show: false,
        },
      },

      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
          dataLabels: {
            hideOverflowingLabels: true,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: 'datetime',
        labels: {
          datetimeUTC: false,
          format: 'HH:mm',
        },
      },
      yaxis: {
        show: false,
      },
      grid: {
        show: false,
        row: {
          colors: ['#f3f4f5', '#fff'],
          opacity: 0,
        },
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return (
            '<div class="arrow_box p-2">' +
            '<span>' +
            // w.globals.initialSeries[seriesIndex].data[dataPointIndex].state
            // +'<br>'+
            formatDate(
              new Date(
                w.globals.initialSeries[seriesIndex].data[dataPointIndex].y[0]
              ),
              'hh:mm a',
              'en'
            ) +
            ' - ' +
            formatDate(
              new Date(
                w.globals.initialSeries[seriesIndex].data[dataPointIndex].y[1]
              ),
              'hh:mm a',
              'en'
            ) +
            '</span>' +
            '</div>'
          );
        },
      },
    };
    this.line2Timeline = {
      series: [],
      chart: {
        height: 100,
        type: 'rangeBar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
          dataLabels: {
            hideOverflowingLabels: true,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: 'datetime',
        labels: {
          datetimeUTC: false,
          format: 'HH:mm',
        },
      },
      yaxis: {
        show: false,
      },
      grid: {
        show: false,
        row: {
          colors: ['#f3f4f5', '#fff'],
          opacity: 0,
        },
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return (
            '<div class="arrow_box p-2">' +
            '<span>' +
            // w.globals.initialSeries[seriesIndex].data[dataPointIndex].state
            // +'<br>'+
            formatDate(
              new Date(
                w.globals.initialSeries[seriesIndex].data[dataPointIndex].y[0]
              ),
              'hh:mm a',
              'en'
            ) +
            ' - ' +
            formatDate(
              new Date(
                w.globals.initialSeries[seriesIndex].data[dataPointIndex].y[1]
              ),
              'hh:mm a',
              'en'
            ) +
            '</span>' +
            '</div>'
          );
        },
      },
    };
    this.line3Timeline = {
      series: [],
      chart: {
        height: 100,
        type: 'rangeBar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
          dataLabels: {
            hideOverflowingLabels: true,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: 'datetime',
        labels: {
          datetimeUTC: false,
          format: 'HH:mm',
        },
      },
      yaxis: {
        show: false,
      },
      grid: {
        show: false,
        row: {
          colors: ['#f3f4f5', '#fff'],
          opacity: 0,
        },
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return (
            '<div class="arrow_box p-2">' +
            '<span>' +
            // w.globals.initialSeries[seriesIndex].data[dataPointIndex].state
            // +'<br>'+
            formatDate(
              new Date(
                w.globals.initialSeries[seriesIndex].data[dataPointIndex].y[0]
              ),
              'hh:mm a',
              'en'
            ) +
            ' - ' +
            formatDate(
              new Date(
                w.globals.initialSeries[seriesIndex].data[dataPointIndex].y[1]
              ),
              'hh:mm a',
              'en'
            ) +
            '</span>' +
            '</div>'
          );
        },
      },
    };
    this.line4Timeline = {
      series: [],
      chart: {
        height: 100,
        type: 'rangeBar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
          dataLabels: {
            hideOverflowingLabels: true,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: 'datetime',
        labels: {
          datetimeUTC: false,
          format: 'HH:mm',
        },
      },
      yaxis: {
        show: false,
      },
      grid: {
        show: false,
        row: {
          colors: ['#f3f4f5', '#fff'],
          opacity: 0,
        },
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return (
            '<div class="arrow_box p-2">' +
            '<span>' +
            // w.globals.initialSeries[seriesIndex].data[dataPointIndex].state
            // +'<br>'+
            formatDate(
              new Date(
                w.globals.initialSeries[seriesIndex].data[dataPointIndex].y[0]
              ),
              'hh:mm a',
              'en'
            ) +
            ' - ' +
            formatDate(
              new Date(
                w.globals.initialSeries[seriesIndex].data[dataPointIndex].y[1]
              ),
              'hh:mm a',
              'en'
            ) +
            '</span>' +
            '</div>'
          );
        },
      },
    };
    this.line5Timeline = {
      series: [],
      chart: {
        height: 90,
        type: 'rangeBar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
          dataLabels: {
            hideOverflowingLabels: true,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: 'datetime',
        labels: {
          datetimeUTC: false,
          format: 'HH:mm',
        },
      },
      yaxis: {
        show: false,
      },
      grid: {
        show: false,
        row: {
          colors: ['#f3f4f5', '#fff'],
          opacity: 0,
        },
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return (
            '<div class="arrow_box p-2">' +
            '<span>' +
            // w.globals.initialSeries[seriesIndex].data[dataPointIndex].state
            // +'<br>'+
            formatDate(
              new Date(
                w.globals.initialSeries[seriesIndex].data[dataPointIndex].y[0]
              ),
              'hh:mm a',
              'en'
            ) +
            ' - ' +
            formatDate(
              new Date(
                w.globals.initialSeries[seriesIndex].data[dataPointIndex].y[1]
              ),
              'hh:mm a',
              'en'
            ) +
            '</span>' +
            '</div>'
          );
        },
      },
    };

  }

  ngOnInit(): void {
    setTimeout(() => {
      // console.log(this._CurrentActivityService.timeLine.lines_Timeline[0]);
      this.line1Data.data = [];
      this.line2Data.data = [];
      this.line3Data.data = [];
      this.line4Data.data = [];
      this.line5Data.data = [];
      const data = this._CurrentActivityService.timeLine;
      this.line1Null = data;
      console.log(data);
      // console.log(this.line1Null);
      data?.lines_Timeline?.forEach((element) => {
        if (element.identifier == 'Line 1') {
          if (element.state == 'Offline') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#e22517',
            };
            this.line1Data.data.push(obj);
          } else if (element.state == 'Waiting') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#dadada',
            };
            this.line1Data.data.push(obj);
          } else if (element.state == 'Online') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#29a32c',
            };
            this.line1Data.data.push(obj);
          }
        } else if (element.identifier == 'Line 2') {
          if (element.state == 'Offline') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#e22517',
            };
            this.line2Data.data.push(obj);
          } else if (element.state == 'Waiting') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#dadada',
            };
            this.line2Data.data.push(obj);
          } else if (element.state == 'Online') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#29a32c',
            };
            this.line2Data.data.push(obj);
          }
        } else if (element.identifier == 'Line 3') {
          if (element.state == 'Offline') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#e22517',
            };
            this.line3Data.data.push(obj);
          } else if (element.state == 'Waiting') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#dadada',
            };
            this.line3Data.data.push(obj);
          } else if (element.state == 'Online') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#29a32c',
            };
            this.line3Data.data.push(obj);
          }
        } else if (element.identifier == 'Line 4') {
          if (element.state == 'Offline') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#e22517',
            };
            this.line4Data.data.push(obj);
          } else if (element.state == 'Waiting') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#dadada',
            };
            this.line4Data.data.push(obj);
          } else if (element.state == 'Online') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#29a32c',
            };
            this.line4Data.data.push(obj);
          }
        } else if (element.identifier == 'Line 5') {
          if (element.state == 'Offline') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#e22517',
            };
            this.line5Data.data.push(obj);
          } else if (element.state == 'Waiting') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#dadada',
            };
            this.line5Data.data.push(obj);
          } else if (element.state == 'Online') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#29a32c',
            };
            this.line5Data.data.push(obj);
          }
        }
      });

      this.line1Timeline.series = [this.line1Data];
      this.line2Timeline.series = [this.line2Data];
      this.line3Timeline.series = [this.line3Data];
      this.line4Timeline.series = [this.line4Data];
      this.line5Timeline.series = [this.line5Data];

      console.log(this.line1Data);
      if (this.line1Data.data == []) {
        this.line1Null = null;
      } else {
        this.line1Null = this.line1Data;
      }
      if (this.line2Data.data == []) {
        this.line2Null = null;
      } else {
        this.line2Null = this.line2Data;
      }
      if (this.line3Data.data == []) {
        this.line3Null = null;
      } else {
        this.line3Null = this.line3Data;
      }
      if (this.line4Data.data == []) {
        this.line4Null = null;
      } else {
        this.line4Null = this.line4Data;
      }
      if (this.line5Data.data == []) {
        this.line5Null = null;
      } else {
        this.line5Null = this.line5Data;
      }

      console.log(this.line4Timeline);
    }, 5000);
  }
  // getTimeLine() {}
}
