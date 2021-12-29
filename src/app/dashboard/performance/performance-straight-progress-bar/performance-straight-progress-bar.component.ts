import { Component } from '@angular/core';
import { CurrentActivityService } from 'src/app/Services/current-activity.service';

@Component({
  selector: 'app-performance-straight-progress-bar',
  templateUrl: './performance-straight-progress-bar.component.html',
  styleUrls: ['./performance-straight-progress-bar.component.scss'],
})
export class PerformanceStraightProgressBarComponent {
  public get availabitiyProgress() {
    return `width: ${this.service.dashboardModel[0][0]?.avgAvailability * 100}%`;
  }
  public get availabitiyProgressValue() {
    return `${(this.service.dashboardModel[0][0]?.avgAvailability * 100).toFixed(
      0
    )}%`;
  }

  public get performanceProgress() {
    if (this.service.dashboardModel != undefined) {
    return `width: ${this.service.dashboardModel[0][0]?.performance * 100}%`;
  }
  }
  public get performanceProgressValue() {
    if (this.service.dashboardModel != undefined) {
    return this.service.dashboardModel[0][0]?.performance * 100;
    }
  }

  public get qualityProgress() {
    if (this.service.dashboardModel != undefined) {
      return `width: ${this.service.dashboardModel[0][0]?.quality * 100}%`;
    }
  }
  public get qualityProgressValue() {
    if (this.service.dashboardModel != undefined) {
    return this.service.dashboardModel[0][0]?.quality * 100;
    }
  }
  constructor(public service: CurrentActivityService) {}
}
