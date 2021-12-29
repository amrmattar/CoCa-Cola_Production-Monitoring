import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  selector: 'app-planning-machine-second-level',
  templateUrl: './planning-machine-second-level.component.html',
  styleUrls: ['./planning-machine-second-level.component.scss'],
})
export class PlanningMachineSecondLevelComponent implements OnInit {
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

  constructor(
    private service: ApiService,
    public _CurrentActivityService: CurrentActivityService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this._CurrentActivityService.machinesList);
    }, 10000);
    // console.log(this._CurrentActivityService.machinesList[2].machineId);
    this.machines = this._CurrentActivityService.machinesList;
  }
}
