import { Component, ViewEncapsulation, ViewChild, OnInit, SimpleChanges } from '@angular/core';
import { ProgressBar, ITextRenderEventArgs, AnimationModel, FontModel,ILoadedEventArgs,ProgressTheme } from '@syncfusion/ej2-progressbar';
import { CurrentActivityService } from 'src/app/Services/current-activity.service';
import {ApiService} from '../../APIsServices/api.service'

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss'],

  encapsulation: ViewEncapsulation.None,
})
export class PerformanceComponent implements OnInit {
  actualProduction: number ;
  flag: boolean = false;
  totalPacketstit: number =0;
  totalPalletstit: number =0;
  energyBottleRatiotit: any;
  energyLiterRatiotit: any;
  waterBottleRatio: any;
  waterLiterRatio: any;


  co2Yield: any;

  /**/ 
  preformYield: any;
  crownsYield:any;
  cansYield:any;
  nrGlassYield:any;
  closures:any;

  /*****/

  syrupYield: any;


  constructor(public _CurrentActivityService: CurrentActivityService) {}
  ngOnChanges(changes: SimpleChanges) {
    console.log(this._CurrentActivityService.dashboardModel?.throughput);
    if (
      typeof this._CurrentActivityService.dashboardModelCompair?.throughput ==
      'number'
    ) {
      console.log(this.flag);
      this.flag = true;
    }
  }
  ngOnInit(): void {
    this._CurrentActivityService;
  }
  public get totalbottels() {
    if (this._CurrentActivityService.dashboardModel != undefined) {
      this.totalPacketstit =
        this._CurrentActivityService.dashboardModel[0][0]?.totalPackets;
      this.totalPalletstit =
        this._CurrentActivityService.dashboardModel[0][0]?.totalPallet;
      this.energyBottleRatiotit =
        this._CurrentActivityService.dashboardModel[0][0]?.energyBottleRatio;
      this.energyLiterRatiotit =
        this._CurrentActivityService.dashboardModel[0][0]?.energyLiterRatio;
      this.waterLiterRatio =
        this._CurrentActivityService.dashboardModel[0][0]?.waterLiterRatio;
      this.waterBottleRatio =
        this._CurrentActivityService.dashboardModel[0][0]?.waterBottleRatio;


        this.co2Yield =
        this._CurrentActivityService.dashboardModel[0][0]?.co2Yield;

/********************** */
        this.preformYield =
        this._CurrentActivityService.dashboardModel[0][0]?.preformYield;


        this.crownsYield =
        this._CurrentActivityService.dashboardModel[0][0]?.crownsYield;


        this.cansYield =
        this._CurrentActivityService.dashboardModel[0][0]?.cansYield;


        this.nrGlassYield =
        this._CurrentActivityService.dashboardModel[0][0]?.nrGlassYield;


        this.closures =
        this._CurrentActivityService.dashboardModel[0][0]?.closures;

        // this.preformYield =
        // this._CurrentActivityService.dashboardModel[0][0]?.preformYield;

        // this.preformYield =
        // this._CurrentActivityService.dashboardModel[0][0]?.preformYield;

/********************** */


        this.syrupYield =
        this._CurrentActivityService.dashboardModel[0][0]?.syrupYield;




      return this._CurrentActivityService.dashboardModel[0][0]?.totalbottels;
    }
  }
}
