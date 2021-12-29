import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  ProgressBar,
  ProgressAnnotation,
  IProgressValueEventArgs,
  ILoadedEventArgs,
  ProgressTheme,
  AnimationModel,
} from '@syncfusion/ej2-progressbar';
import { EmitType } from '@syncfusion/ej2-base';
import { CurrentActivityService } from 'src/app/Services/current-activity.service';
ProgressBar.Inject(ProgressAnnotation);

@Component({
  selector: 'app-performance-circle-progress-bar',
  templateUrl: './performance-circle-progress-bar.component.html',
  styleUrls: ['./performance-circle-progress-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PerformanceCircleProgressBarComponent {
  temp: number;
  oeevalue: number;
  slevalue: number;
  // public load: EmitType<ILoadedEventArgs> = (args: ILoadedEventArgs) => {
  //   args.progressBar.annotations[0].content =
  //     '<div id="point1" class="plabeltxt" style="color:#000 ;font-size:28px "><span>80%</span></div>';
  // };
  constructor(public service: CurrentActivityService) {}
  // public type1: string = 'Circular';
  // public min1: number = 0;
  // public max1: number = 100;
  // public value1: number = 76;
  // public startAngle1: number = 360;
  // public endAngle1: number = 0;
  // public width: string = '100';
  // public height: string = '100';
  // public animation: AnimationModel = { enable: true, duration: 1000, delay: 0 };
  public load: EmitType<ILoadedEventArgs> = (args: ILoadedEventArgs) => {
    args.progressBar.annotations[0].content =
      '<div id="point1" class="plabeltxt" style="color:#000 ;font-size:15px "><span>80%</span></div>';
  };
  // constructor() {}
  public type1: string = 'Circular';
  public min1: number = 0;
  public max1: number = 100;
  public value1: number = 76;
  public value2: number = 76;
  public value3: number = 76;
  public startAngle1: number = 360;
  public endAngle1: number = 0;
  public width: string = '140';
  public height: string = '120';
  public animation: AnimationModel = { enable: true, duration: 1000, delay: 0 };
  @ViewChild('annotation1')
  public annotation1: ProgressBar;
  ngOnInit(): void {}
  public get oee() {
    if (this.service.dashboardModel != undefined) {
      return (
        this.service.dashboardModel[0][0]?.oee * 100
      );
    }
  }
  public get oee2() {
    if (this.service.dashboardModel != undefined) {
      return (
        this.service.dashboardModel[0][0]?.oee * 100
      );
    }
  }
  public get sle() {
    if (this.service.dashboardModel != undefined) {
      return (
        this.service.dashboardModel[0][0]?.sle * 100
      );
    }
  }
  public get sle2() {
    if (this.service.dashboardModel != undefined) {
      return (
        this.service.dashboardModel[0][0]?.sle * 100
      );
    }
  }
}
