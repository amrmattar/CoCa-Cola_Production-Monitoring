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
  selector: 'app-machine-state',
  templateUrl: './machine-state.component.html',
  styleUrls: ['./machine-state.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MachineStateComponent implements OnInit {
  currenttab: string = 'Information';
  tabChange: string = 'Over Time';
  public load: EmitType<ILoadedEventArgs> = (args: ILoadedEventArgs) => {
    args.progressBar.annotations[0].content =
      '<div id="point1" class="plabeltxt" style="color:transparent ;font-size:10px "><span>80%</span></div>';
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
  machineValues:any;
  machinesOee:any;
  constructor(private service:ApiService,public _CurrentActivityService: CurrentActivityService) {}

  ngOnInit(): void {
    this.getMachines();
  }

  tabMachine(tabName) {
    this.tabChange = tabName;
    // this.route.navigate(['/about']);
  }

  getMachines()
  {
    this._CurrentActivityService.machinesValues.subscribe((res) => {
      const data = JSON.parse(JSON.stringify(res));
      this.machineValues = data;
      console.log(this.machineValues)
    });
  }
  public get performanceProgress() {
    return `width: ${
      this.machineValues?.oee * 100
    }%`;
  }
}
