import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
import { CurrentActivityService } from 'src/app/Services/current-activity.service';
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
  selector: 'app-machine-history-time-line',
  templateUrl: './machine-history-time-line.component.html',
  styleUrls: ['./machine-history-time-line.component.scss'],
})
export class MachineHistoryTimeLineComponent implements OnInit {
  pall1Data = {
    name:'',
    data: [],
  };
  pall2Data = {
    name:'',
    data: [],
  };
  pall3Data = {
    name:'',
    data: [],
  };
  pall4Data = {
    name:'',
    data: [],
  };
  pall5Data = {
    name:'',
    data: [],
  };

  fill1Data = {
    name:'',
    data: [],
  };
  fill2Data = {
    name:'',
    data: [],
  };
  fill3Data = {
    name:'',
    data: [],
  };
  fill4Data = {
    name:'',
    data: [],
  };
  fill5Data = {
    name:'',
    data: [],
  };

  mix3Data = {
    name:'',
    data: [],
  };
  mix5Data = {
    name:'',
    data: [],
  };

  label1Data = {
    name:'',
    data: [],
  };
  label3Data = {
    name:'',
    data: [],
  };
  label4Data = {
    name:'',
    data: [],
  };

  dPal1Data = {
    name:'',
    data: [],
  };

  blow3Data = {
    name:'',
    data: [],
  };
  blow5Data = {
    name:'',
    data: [],
  };

  cart3Data = {
    name:'',
    data: [],
  };
  cart2Data = {
    name:'',
    data: [],
  };
  public pall1Timeline: Partial<ChartOptions>;
  public pall2Timeline: Partial<ChartOptions>;
  public pall3Timeline: Partial<ChartOptions>;
  public pall4Timeline: Partial<ChartOptions>;
  public pall5Timeline: Partial<ChartOptions>;

  public fill1Timeline: Partial<ChartOptions>;
  public fill2Timeline: Partial<ChartOptions>;
  public fill3Timeline: Partial<ChartOptions>;
  public fill4Timeline: Partial<ChartOptions>;
  public fill5Timeline: Partial<ChartOptions>;

  public label1Timeline: Partial<ChartOptions>;
  public label3Timeline: Partial<ChartOptions>;
  public label4Timeline: Partial<ChartOptions>;

  public mix3Timeline: Partial<ChartOptions>;
  public mix5Timeline: Partial<ChartOptions>;

  public dPall1Timeline: Partial<ChartOptions>;

  public cart2Timeline: Partial<ChartOptions>;
  public cart3Timeline: Partial<ChartOptions>;

  public blow3Timeline: Partial<ChartOptions>;
  public blow5Timeline: Partial<ChartOptions>;

  constructor(public _CurrentActivityService: CurrentActivityService) {
    this.pall1Timeline = {
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
    this.pall2Timeline = {
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
    this.pall3Timeline = {
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
    this.pall4Timeline = {
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
    this.pall5Timeline = {
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

    this.fill1Timeline = {
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
    this.fill2Timeline = {
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
    this.fill3Timeline = {
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
    this.fill4Timeline = {
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
    this.fill5Timeline = {
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

    this.label1Timeline = {
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
    this.label3Timeline = {
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
    this.label4Timeline = {
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

    this.mix3Timeline = {
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
    this.mix5Timeline = {
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

    this.dPall1Timeline = {
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

    this.cart2Timeline = {
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
    this.cart3Timeline = {
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

    this.blow3Timeline = {
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
    this.blow5Timeline = {
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
   // this.getTimeLine();
  }
  getTimeLine() {
    this._CurrentActivityService.machinesTimeLine.subscribe((x) => {
      this.pall1Data = {
      name:'',
        data: [],
      };
      this.pall2Data = {
      name:'',
        data: [],
      };
      this.pall3Data = {
        name:'',
        data: [],
      };
      this.pall4Data = {
        name:'',
        data: [],
      };
      this.pall5Data = {
        name:'',
        data: [],
      };

      this.fill1Data = {
        name:'',
        data: [],
      };
      this.fill2Data = {
        name:'',
        data: [],
      };
      this.fill3Data = {
        name:'',
        data: [],
      };
      this.fill4Data = {
        name:'',
        data: [],
      };
      this.fill5Data = {
        name:'',
        data: [],
      };

      this.mix3Data = {
        name:'',
        data: [],
      };
      this.mix5Data = {
        name:'',
        data: [],
      };

      this.label1Data = {
        name:'',
        data: [],
      };
      this.label3Data = {
        name:'',
        data: [],
      };
      this.label4Data = {
        name:'',
        data: [],
      };

      this.dPal1Data = {
        name:'',
        data: [],
      };

      this.blow3Data = {
        name:'',
        data: [],
      };
      this.blow5Data = {
        name:'',
        data: [],
      };

      this.cart3Data = {
        name:'',
        data: [],
      };
      this.cart2Data = {
        name:'',
        data: [],
      };
      const data = x;
      console.log(data);
      data?.palletReads?.forEach((element) => {
        if (element.lineId == 1) {
          if (element.state == '0') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#e22517',
            };
            this.pall1Data.data.push(obj);
          }  else if (element.state == '1') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#29a32c',
            };
            this.pall1Data.data.push(obj);
          }
        }
        else if (element.lineId == 2) {
          if (element.state == '0') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#e22527',
            };
            this.pall2Data.data.push(obj);
          }  else if (element.state == '1') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#29a32c',
            };
            this.pall2Data.data.push(obj);
          }
        }
        else if (element.lineId == 3) {
          if (element.state == 'Offline') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#e33537',
            };
            this.pall3Data.data.push(obj);
          } else if (element.state == 'Waiting') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#dadada',
            };
            this.pall3Data.data.push(obj);
          } else if (element.state == 'Online') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#39a33c',
            };
            this.pall3Data.data.push(obj);
          }
        }
        else if (element.lineId == 4) {
          if (element.state == 'Offline') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#e44547',
            };
            this.pall4Data.data.push(obj);
          } else if (element.state == 'Waiting') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#dadada',
            };
            this.pall4Data.data.push(obj);
          } else if (element.state == 'Online') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#49a34c',
            };
            this.pall4Data.data.push(obj);
          }
        }
        else if (element.lineId == 5) {
          if (element.state == 'Offline') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#e55557',
            };
            this.pall5Data.data.push(obj);
          } else if (element.state == 'Waiting') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#dadada',
            };
            this.pall5Data.data.push(obj);
          } else if (element.state == 'Online') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#59a35c',
            };
            this.pall5Data.data.push(obj);
          }
        }
      });
      this.pall1Timeline.series = [this.pall1Data];
      this.pall2Timeline.series = [this.pall2Data];
      this.pall3Timeline.series = [this.pall3Data];
      this.pall4Timeline.series = [this.pall4Data];
      this.pall5Timeline.series = [this.pall5Data];

      data?.fillerReads?.forEach((element) => {
        if (element.lineId == 1) {
          if (element.state == 'Offline') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#e22517',
            };
            this.fill1Data.data.push(obj);
          } else if (element.state == 'Waiting') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#dadada',
            };
            this.fill1Data.data.push(obj);
          } else if (element.state == 'Online') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#29a32c',
            };
            this.fill1Data.data.push(obj);
          }
        }
        else if (element.lineId == 2) {
          if (element.state == 'Offline') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#e22527',
            };
            this.fill2Data.data.push(obj);
          } else if (element.state == 'Waiting') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#dadada',
            };
            this.fill2Data.data.push(obj);
          } else if (element.state == 'Online') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#29a32c',
            };
            this.fill2Data.data.push(obj);
          }
        }
        else if (element.lineId == 3) {
          if (element.state == 'Offline') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#e33537',
            };
            this.fill3Data.data.push(obj);
          } else if (element.state == 'Waiting') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#dadada',
            };
            this.fill3Data.data.push(obj);
          } else if (element.state == 'Online') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#39a33c',
            };
            this.fill3Data.data.push(obj);
          }
        }
        else if (element.lineId == 4) {
          if (element.state == 'Offline') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#e44547',
            };
            this.fill4Data.data.push(obj);
          } else if (element.state == 'Waiting') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#dadada',
            };
            this.fill4Data.data.push(obj);
          } else if (element.state == 'Online') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#49a34c',
            };
            this.fill4Data.data.push(obj);
          }
        }
        else if (element.lineId == 5) {
          if (element.state == 'Offline') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#e55557',
            };
            this.fill5Data.data.push(obj);
          } else if (element.state == 'Waiting') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#dadada',
            };
            this.fill5Data.data.push(obj);
          } else if (element.state == 'Online') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#59a35c',
            };
            this.fill5Data.data.push(obj);
          }
        }
      });
      this.fill1Timeline.series = [this.fill1Data];
      this.fill2Timeline.series = [this.fill2Data];
      this.fill3Timeline.series = [this.fill3Data];
      this.fill4Timeline.series = [this.fill4Data];
      this.fill5Timeline.series = [this.fill5Data];

      data?.labelReads?.forEach((element) => {
        if (element.lineId == 1) {
          if (element.state == 'Offline') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#e22517',
            };
            this.label1Data.data.push(obj);
          } else if (element.state == 'Waiting') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#dadada',
            };
            this.label1Data.data.push(obj);
          } else if (element.state == 'Online') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#29a32c',
            };
            this.label1Data.data.push(obj);
          }
        }
        else if (element.lineId == 3) {
          if (element.state == 'Offline') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#e33537',
            };
            this.label3Data.data.push(obj);
          } else if (element.state == 'Waiting') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#dadada',
            };
            this.label3Data.data.push(obj);
          } else if (element.state == 'Online') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#39a33c',
            };
            this.label3Data.data.push(obj);
          }
        }
        else if (element.lineId == 4) {
          if (element.state == 'Offline') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#e44547',
            };
            this.label4Data.data.push(obj);
          } else if (element.state == 'Waiting') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#dadada',
            };
            this.label4Data.data.push(obj);
          } else if (element.state == 'Online') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#49a34c',
            };
            this.label4Data.data.push(obj);
          }
        }
      });
      this.label1Timeline.series = [this.label1Data];
      this.label3Timeline.series = [this.label3Data];
      this.label4Timeline.series = [this.label4Data];

      data?.mixerReads?.forEach((element) => {
         if (element.lineId == 3) {
          if (element.state == 'Offline') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#e33537',
            };
            this.mix3Data.data.push(obj);
          } else if (element.state == 'Waiting') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#dadada',
            };
            this.mix3Data.data.push(obj);
          } else if (element.state == 'Online') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#39a33c',
            };
            this.mix3Data.data.push(obj);
          }
        }
        else if (element.lineId == 5) {
          if (element.state == 'Offline') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#e55557',
            };
            this.mix5Data.data.push(obj);
          } else if (element.state == 'Waiting') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#dadada',
            };
            this.mix5Data.data.push(obj);
          } else if (element.state == 'Online') {
            let obj = {
              x: 'Time',
              y: [
                new Date(element.from).getTime(),
                new Date(element.to).getTime(),
              ],
              fillColor: '#59a35c',
            };
            this.mix5Data.data.push(obj);
          }
        }
      });
      this.mix3Timeline.series = [this.mix3Data];
      this.mix5Timeline.series = [this.mix5Data];

      data?.blowReads?.forEach((element) => {
        if (element.lineId == 3) {
         if (element.state == 'Offline') {
           let obj = {
             x: 'Time',
             y: [
               new Date(element.from).getTime(),
               new Date(element.to).getTime(),
             ],
             fillColor: '#e33537',
           };
           this.blow3Data.data.push(obj);
         } else if (element.state == 'Waiting') {
           let obj = {
             x: 'Time',
             y: [
               new Date(element.from).getTime(),
               new Date(element.to).getTime(),
             ],
             fillColor: '#dadada',
           };
           this.blow3Data.data.push(obj);
         } else if (element.state == 'Online') {
           let obj = {
             x: 'Time',
             y: [
               new Date(element.from).getTime(),
               new Date(element.to).getTime(),
             ],
             fillColor: '#39a33c',
           };
           this.blow3Data.data.push(obj);
         }
       }
       else if (element.lineId == 5) {
         if (element.state == 'Offline') {
           let obj = {
             x: 'Time',
             y: [
               new Date(element.from).getTime(),
               new Date(element.to).getTime(),
             ],
             fillColor: '#e55557',
           };
           this.blow5Data.data.push(obj);
         } else if (element.state == 'Waiting') {
           let obj = {
             x: 'Time',
             y: [
               new Date(element.from).getTime(),
               new Date(element.to).getTime(),
             ],
             fillColor: '#dadada',
           };
           this.blow5Data.data.push(obj);
         } else if (element.state == 'Online') {
           let obj = {
             x: 'Time',
             y: [
               new Date(element.from).getTime(),
               new Date(element.to).getTime(),
             ],
             fillColor: '#59a35c',
           };
           this.blow5Data.data.push(obj);
         }
       }
     });
     this.blow3Timeline.series = [this.blow3Data];
     this.blow5Timeline.series = [this.blow5Data];

      data?.cartReads?.forEach((element) => {
        if (element.lineId == 3) {
         if (element.state == 'Offline') {
           let obj = {
             x: 'Time',
             y: [
               new Date(element.from).getTime(),
               new Date(element.to).getTime(),
             ],
             fillColor: '#e33537',
           };
           this.cart3Data.data.push(obj);
         } else if (element.state == 'Waiting') {
           let obj = {
             x: 'Time',
             y: [
               new Date(element.from).getTime(),
               new Date(element.to).getTime(),
             ],
             fillColor: '#dadada',
           };
           this.cart3Data.data.push(obj);
         } else if (element.state == 'Online') {
           let obj = {
             x: 'Time',
             y: [
               new Date(element.from).getTime(),
               new Date(element.to).getTime(),
             ],
             fillColor: '#39a33c',
           };
           this.cart3Data.data.push(obj);
         }
       }
       else if (element.lineId == 2) {
         if (element.state == 'Offline') {
           let obj = {
             x: 'Time',
             y: [
               new Date(element.from).getTime(),
               new Date(element.to).getTime(),
             ],
             fillColor: '#e55557',
           };
           this.cart2Data.data.push(obj);
         } else if (element.state == 'Waiting') {
           let obj = {
             x: 'Time',
             y: [
               new Date(element.from).getTime(),
               new Date(element.to).getTime(),
             ],
             fillColor: '#dadada',
           };
           this.cart2Data.data.push(obj);
         } else if (element.state == 'Online') {
           let obj = {
             x: 'Time',
             y: [
               new Date(element.from).getTime(),
               new Date(element.to).getTime(),
             ],
             fillColor: '#59a35c',
           };
           this.cart2Data.data.push(obj);
         }
       }
     });
     this.cart3Timeline.series = [this.cart3Data];
     this.cart2Timeline.series = [this.cart2Data];

     data?.dPallReads?.forEach((element) => {
      if (element.lineId == 1) {
       if (element.state == 'Offline') {
         let obj = {
           x: 'Time',
           y: [
             new Date(element.from).getTime(),
             new Date(element.to).getTime(),
           ],
           fillColor: '#e33537',
         };
         this.dPal1Data.data.push(obj);
       } else if (element.state == 'Waiting') {
         let obj = {
           x: 'Time',
           y: [
             new Date(element.from).getTime(),
             new Date(element.to).getTime(),
           ],
           fillColor: '#dadada',
         };
         this.dPal1Data.data.push(obj);
       } else if (element.state == 'Online') {
         let obj = {
           x: 'Time',
           y: [
             new Date(element.from).getTime(),
             new Date(element.to).getTime(),
           ],
           fillColor: '#39a33c',
         };
         this.dPal1Data.data.push(obj);
       }
     }

   });
   this.dPall1Timeline.series = [this.dPal1Data];

    });
  }
}
