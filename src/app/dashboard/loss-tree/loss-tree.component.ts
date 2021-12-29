import { Component, OnInit } from '@angular/core';
import { CurrentActivityService } from 'src/app/Services/current-activity.service';

@Component({
  selector: 'app-loss-tree',
  templateUrl: './loss-tree.component.html',
  styleUrls: ['./loss-tree.component.scss'],
})
export class LossTreeComponent implements OnInit {
  totalLosstit: number = 0;
  totalGaintit: number = 0;
  QualityLosstit: number = 0;
  SpeedLosstit: number = 0;
  Break_downtit: number = 0;
  Cleansing_processtit: number = 0;
  Change_over_timetit: number = 0;
  Idletit: number = 0;
  Minor_stopstit: number = 0;
  standbytit: number;
  constructor(public service: CurrentActivityService) {}

  ngOnInit(): void {}

  public get totalLoss() {
    if (this.service.dashboardModel != undefined) {
      this.totalLosstit = 100 - this.service.dashboardModel[0][0]?.upTime * 100;
      return `height: calc(${
        100 - this.service.dashboardModel[0][0]?.upTime * 100
      }%);`;
    }
  }
  public get totalGain() {
    if (this.service.dashboardModel != undefined) {
      this.totalGaintit = this.service.dashboardModel[0][0]?.upTime * 100;
      return `height: calc(${
        this.service.dashboardModel[0][0]?.upTime * 100
      }% - 56px);bottom: 0px;`;
    }
  }
  public get QualityLoss() {
    if (this.service.dashboardModel != undefined) {
      this.QualityLosstit =
        (1 - this.service.dashboardModel[0][0]?.quality) * 100;
      return `height: ${
        (100 / (this.service.dashboardModel[0][0]?.upTime * 100)) *
        ((1 - this.service.dashboardModel[0][0]?.quality) * 100)
      }%;bottom: 0px;`;
    }
  }
  public get SpeedLoss() {
    if (this.service.dashboardModel != undefined) {
      this.Minor_stopstit = this.service.dashboardModel[0][0]?.lossTime*100;
      this.SpeedLosstit =this.service.dashboardModel[0][0]?.lossTime*100;
      return `height: ${
        (100 / (this.service.dashboardModel[0][0]?.upTime * 100)) *
        this.SpeedLosstit
      }%;top: 0%;`;
    }
  }

  public get Break_down() {
    if (this.service.dashboardModel != undefined) {
      this.Break_downtit = this.service.dashboardModel[0][0]?.downTime * 100;
      return `height: ${
        (100 / (100 - this.service.dashboardModel[0][0]?.upTime * 100)) *
        (this.service.dashboardModel[0][0]?.downTime * 100)
      }%;top: 0px;`;
    }
  }
  public get Break_down_Top() {
    if (this.service.dashboardModel != undefined) {
      return `top: calc(${
        (100 / (100 - this.service.dashboardModel[0][0]?.upTime * 100)) *
        (this.service.dashboardModel[0][0]?.downTime * 100)
      }% - 12px);`;
    }
  }

  public get Cleansing_process() {
    if (this.service.dashboardModel != undefined) {
      this.Cleansing_processtit =
        this.service.dashboardModel[0][0]?.cleanigTime * 100;
      return `height: ${
        (100 / (100 - this.service.dashboardModel[0][0]?.upTime * 100)) *
        (this.service.dashboardModel[0][0]?.cleanigTime * 100)
      }%;top: ${
        (100 / (100 - this.service.dashboardModel[0][0]?.upTime * 100)) *
        (this.service.dashboardModel[0][0]?.downTime * 100)
      }%;`;
    }
  }

  public get Cleansing_process_Top() {
    if (this.service.dashboardModel != undefined) {
      return `top: calc(${
        (100 / (100 - this.service.dashboardModel[0][0]?.upTime * 100)) *
        (this.service.dashboardModel[0][0]?.cleanigTime * 100 +
          this.service.dashboardModel[0][0]?.downTime * 100)
      }% - 12px);`;
    }
  }

  public get Change_over_time() {
    if (this.service.dashboardModel != undefined) {
      this.Change_over_timetit =
        this.service.dashboardModel[0][0]?.changeOverTime * 100;
      return `height: ${
        (100 / (100 - this.service.dashboardModel[0][0]?.upTime * 100)) *
        (this.service.dashboardModel[0][0]?.changeOverTime * 100)
      }%;top: ${
        (100 / (100 - this.service.dashboardModel[0][0]?.upTime * 100)) *
        (this.service.dashboardModel[0][0]?.downTime * 100 +
          this.service.dashboardModel[0][0]?.cleanigTime * 100)
      }%;`;
    }
  }

  public get Change_over_time_Top() {
    if (this.service.dashboardModel != undefined) {
      return `top: calc(${
        (100 / (100 - this.service.dashboardModel[0][0]?.upTime * 100)) *
        (this.service.dashboardModel[0][0]?.cleanigTime * 100 +
          this.service.dashboardModel[0][0]?.downTime * 100 +
          this.service.dashboardModel[0][0]?.changeOverTime * 100)
      }% - 12px);`;
    }
  }

  public get Idle() {
    if (this.service.dashboardModel != undefined) {
      this.Idletit = this.service.dashboardModel[0][0]?.idleTime * 100;
      // this.totalLosstit-this.Break_downtit-this.Cleansing_processtit-this.Change_over_timetit;
      // this.service.dashboardModel[this.service.ShiftNum][this.service.FactoryNum]?.idleTime * 100;
      return `height: ${
        (100 / (100 - this.service.dashboardModel[0][0]?.upTime * 100)) *
        this.Idletit
      }%;top: ${
        (100 / (100 - this.service.dashboardModel[0][0]?.upTime * 100)) *
        (this.service.dashboardModel[0][0]?.downTime * 100 +
          this.service.dashboardModel[0][0]?.cleanigTime * 100 +
          this.service.dashboardModel[0][0]?.changeOverTime * 100)
      }%;background:#ffd400;z-index:1000`;
    }
  }

  public get Idle_Top() {
    if (this.service.dashboardModel != undefined) {
      return `top: calc(${
        (100 / (100 - this.service.dashboardModel[0][0]?.upTime * 100)) *
        (this.service.dashboardModel[0][0]?.cleanigTime * 100 +
          this.service.dashboardModel[0][0]?.downTime * 100 +
          this.service.dashboardModel[0][0]?.changeOverTime * 100 +
          this.Idletit)
      }% - 27px);width:100px`;
    }
  }
  public get standby() {
    if (this.service.dashboardModel != undefined) {
      this.standbytit = this.service.dashboardModel[0][0]?.standByTime * 100;
      // this.totalLosstit-this.Break_downtit-this.Cleansing_processtit-this.Change_over_timetit;
      // this.service.dashboardModel[this.service.ShiftNum][this.service.FactoryNum]?.idleTime * 100;
      return `height: ${
        (100 / (100 - this.service.dashboardModel[0][0]?.upTime * 100)) *
        this.standbytit
      }%;top: ${
        (100 / (100 - this.service.dashboardModel[0][0]?.upTime * 100)) *
        (this.service.dashboardModel[0][0]?.downTime * 100 +
          this.service.dashboardModel[0][0]?.cleanigTime * 100 +
          this.service.dashboardModel[0][0]?.changeOverTime * 100)
      }%;`;
    }
  }

  public get standby_Top() {
    if (this.service.dashboardModel != undefined) {
      return `top: calc(${
        (100 / (100 - this.service.dashboardModel[0][0]?.upTime * 100)) *
        (this.service.dashboardModel[0][0]?.cleanigTime * 100 +
          this.service.dashboardModel[0][0]?.downTime * 100 +
          this.service.dashboardModel[0][0]?.changeOverTime * 100 +
          this.standbytit)
      }% - 17px);width:100px`;
    }
  }
  // public get totalbottels() {
  //   if (this.service.dashboardModel != undefined) {
  //     return this.service.dashboardModel[0][0]?.totalbottels;
  //   }
  // }
  public get totalbottels() {
    if (this.service.dashboardModel != undefined) {
      return this.service.dashboardModel[0][0]?.totalbottels;
    }
  }
}
