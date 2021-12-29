import { Component, OnInit } from '@angular/core';
import {  ViewEncapsulation, ViewChild } from '@angular/core';
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
  selector: 'app-factories',
  templateUrl: './factories.component.html',
  styleUrls: ['./factories.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FactoriesComponent implements OnInit {
  public load: EmitType<ILoadedEventArgs> = (args: ILoadedEventArgs) => {
    args.progressBar.annotations[0].content =
      '<div id="point1" class="plabeltxt" style="color:#000 ;font-size:15px "><span>80%</span></div>';
  };
  constructor() {}
  public type1: string = 'Circular';
  public min1: number = 0;
  public max1: number = 100;
  public value1: number = 76;
  public value2: number = 76;
  public value3: number = 76;
  public startAngle1: number = 360;
  public endAngle1: number = 0;
  public width: string = '80';
  public height: string = '80';
  public animation: AnimationModel = { enable: true, duration: 1000, delay: 0 };
  ngOnInit(): void {}
}
