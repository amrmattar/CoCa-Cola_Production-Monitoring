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
import { ActivatedRoute } from '@angular/router';
ProgressBar.Inject(ProgressAnnotation);

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MachinesComponent implements OnInit {
  public activeTab: string;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.activeTab = params['tab'];
    });
  }
}
