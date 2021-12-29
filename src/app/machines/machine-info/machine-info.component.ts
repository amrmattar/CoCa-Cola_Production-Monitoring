import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation, ViewChild } from '@angular/core';
import {
  ProgressBar,
  ProgressAnnotation,
  IProgressValueEventArgs,
  ILoadedEventArgs,
  ProgressTheme,
  AnimationModel,
} from '@syncfusion/ej2-progressbar';
import { EmitType } from '@syncfusion/ej2-base';
import { ApiService } from 'src/app/APIsServices/api.service';
import { CurrentActivityService } from 'src/app/Services/current-activity.service';

@Component({
  selector: 'app-machine-info',
  templateUrl: './machine-info.component.html',
  styleUrls: ['./machine-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MachineInfoComponent implements OnInit {
  currenttab: string = 'Information';
  public load: EmitType<ILoadedEventArgs> = (args: ILoadedEventArgs) => {
    args.progressBar.annotations[0].content =
      '<div id="point1" class="plabeltxt" style="color:#000 ;font-size:10px "><span>80%</span></div>';
  };
  public type1: string = 'Circular';
  public min1: number = 0;
  public max1: number = 100;
  public value1: number = 76;
  public value2: number = 68;
  public value3: number = 32;
  public startAngle1: number = 360;
  public endAngle1: number = 0;
  public animation: AnimationModel = { enable: true, duration: 1000, delay: 0 };
  machines = [];

  constructor(private service: ApiService,public _CurrentActivityService: CurrentActivityService) {}

  ngOnInit(): void {
    // this.getMachines();

    // this._CurrentActivityService.machinesList[0].factory='svgeged';
    // {
    //   const data = x;
    //     this.machines = data;
    setTimeout(() => {
      
      console.log(this._CurrentActivityService);
      this.machines = this._CurrentActivityService.machinesList;
    }, 3000);
    // });
  }
  getMachines() {
    debugger
    this._CurrentActivityService.machinesList.subscribe((x) => {
      console.log(x); 
      this.machines = x;
    });
    console.log('this.machines');
  }
  // public get getMachines(): Object[] {
  //   //this.line.refresh();
  //   return this._CurrentActivityService.machines?.map(
  //     (x) => {
  //       return {
  //         factory: x.factory,
  //         machineId: x.machineId,
  //         line: x.line,
  //         shiftStartTime: x.shiftStartTime,
  //         avalability: x.avalability,
  //         performance: x.performance,
  //         quality: x.quality,
  //         oee: x.oee,
  //         teep: x.teep,
  //         mtbf: x.mtbf,
  //         upTime: x.upTime,
  //         downTime: x.downTime,
  //         productionHours: x.productionHours,
  //         cycleTime: x.cycleTime,
  //         utilization: x.utilization,
  //         productionOutput: x.productionOutput,
  //         throughput: x.throughput,
  //         co2Consumption: x.co2Consumption,
  //         waterConsumption: x.waterConsumption,
  //         syrupConsumption: x.syrupConsumption,
  //       };
  //     }
  //   );
  // }
}
