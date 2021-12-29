import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { Subscription } from 'rxjs';
import { CurrentActivityService } from 'src/app/Services/current-activity.service';
@Component({
  selector: 'app-current-activity',
  templateUrl: './current-activity.component.html',
  styleUrls: ['./current-activity.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CurrentActivityComponent implements OnInit {
  currentActivityFlag: boolean = true;
  message: string = 'planet';
  subscription: Subscription;
  tabChange: string = 'OEE';
  public data1: Object[] = [
    { x: 'Sun', y: 10 },
    { x: 'Mon', y: 18 },
    { x: 'Tue', y: 28 },
    { x: 'Wed', y: 28 },
    { x: 'Thu', y: 26 },
    { x: 'Fri', y: 20 },
    { x: 'Sat', y: 15 },
  ];
  public chartArea: Object = {
    border: {
      width: 0,
    },
  };
  public width: string = Browser.isDevice ? '100%' : '100%';
  //Initializing Primary X Axis
  public primaryXAxis: Object = {
    valueType: 'Category',
    interval: 1,
    majorGridLines: { width: 0 },
    labelIntersectAction: 'Rotate90',
  };
  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
    labelFormat: '{value}°C',
    lineStyle: { width: 0 },
    interval: 10,
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
  };
  tabMachine(tabName) {
    this.tabChange = tabName;
    // this.route.navigate(['/about']);
  }
  public marker: Object = {
    visible: true,
    width: 4,
    height: 4,
  };
  public tooltip: Object = {
    enable: true,
  };
  ngOnInit(): void {}

  colors: string[] = [];
  public get currentActivity() {
    return this._CurrentActivityService.dashboardModel?.machines?.map(
      (x, i) => {
        var diff =
          this._CurrentActivityService.dashboardModelCompair?.lines_Current_Activiy.find(
            (e) => e.lineId == x.lineId
          );
        return {
          lineId: x.machineName,
          oee: (x.oee * 100).toFixed(1) + '%',
          oeeStyle: 'width:' + ((x.oee * 100) / 2.5).toFixed(0) + '%',
          availability: (x.availability * 100).toFixed(1) + '%',
          availabilityStyle:
            'width:' + ((x.availability * 100) / 2.5).toFixed(0) + '%',
          quality: (x.quality * 100).toFixed(1) + '%',
          qualityStyle: 'width:' + ((x.quality * 100) / 2.5).toFixed(0) + '%',
          performance: (x.performance * 100).toFixed(1) + '%',
          performanceStyle:
            'width:' + ((x.performance * 100) / 2.5).toFixed(0) + '%',
          mtbf: x.mtbf.toFixed(2) + ' H',
          mtbfStyle: 'width:' + ((x.mtbf * 100) / 2.5).toFixed(0) + '%',
          totalDownTime: x.totalDownTime.toFixed(2) + 'H',
          totalDownTimeStyle:
            'width:' + ((x.totalDownTime * 100) / 2.5).toFixed(0) + '%',
          color: `color-${i + 1}`,
          txtcolor: `color-${i + 1}-${i + 1}`,
          oeeDiff:
            diff == undefined || diff == null
              ? null
              : ((x?.oee * 100).toFixed(0) as any) -
                ((diff?.oee * 100).toFixed(0) as any),
          mtbfDiff:
            diff == undefined || diff == null
              ? null
              : ((x?.mtbf).toFixed(2) as any) -
                ((diff?.mtbf).toFixed(2) as any),
          uptimeDiff:
            diff == undefined || diff == null
              ? null
              : ((x?.uptime * 100).toFixed(0) as any) -
                ((diff?.uptime * 100).toFixed(0) as any),
        };
      }
    );
  }
  public get currentActivityCompair() {
    return this._CurrentActivityService.dashboardModel?.lines_Current_Activiy?.map(
      (x) => {
        return {
          oee: (x.oee * 100).toFixed(0) + '%',
          mtbf: x.mtbf.toFixed(0) + ' H',
          uptime: (x.uptime * 100).toFixed(0) + '%',
        };
      }
    );
  }
  constructor(public _CurrentActivityService: CurrentActivityService) {}
}
