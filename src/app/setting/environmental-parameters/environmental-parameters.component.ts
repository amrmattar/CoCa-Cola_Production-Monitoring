import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CalendarComponent } from '@syncfusion/ej2-angular-calendars';
import { ChipList } from '@syncfusion/ej2-buttons';
import { ChipListComponent } from '@syncfusion/ej2-angular-buttons';
import { ClickEventArgs } from '@syncfusion/ej2-buttons';
import {
  TimePickerComponent,
  ChangeEventArgs,
} from '@syncfusion/ej2-angular-calendars';
import { ChangeEventArgs as checkboxChange } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-environmental-parameters',
  templateUrl: './environmental-parameters.component.html',
  styleUrls: ['./environmental-parameters.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EnvironmentalParametersComponent implements OnInit {
  choiceSelected;
  shiftNumber: number;
  Grade1: any='';
  Grade2: any='';
  Grade3: any='';
  shiftORfull: string;
  factorySelect: string;
  lineSelect: string;
  machineSelect: string;
  source: string[] = ['Line 1', 'Line 2', 'Line 3'];
  DowntimeSource: string[] = ['Upgrade', 'Renovation', 'Swap', 'Cleaning'];
  public year: number = new Date().getFullYear();
  public month: number = new Date().getMonth();
  public multiSelection: boolean = true;
  @ViewChild('calendar')
  public calendarObj: CalendarComponent;
  public dates: Date[] = [
    // new Date(this.year, this.month, 10),
    // new Date(this.year, this.month, 15),
    // new Date(this.year, this.month, 25),
  ];
  @ViewChild('ejchip') public ejchip: ChipListComponent;
  timeFrom: any = '';
  timeTo: any = '';
  Reason: any = '';
  configRowData: object[] = [];
  configRowDataMan: object[] = [];
  addChip() {
    // console.log(this.shiftNumber);
    console.log(this.ejchip.chips);
    this.ejchip.chips = ['Full day'];
    console.log(this.ejchip.chips);
    for (let i = 1; i <= this.shiftNumber; i++) {
      this.ejchip.add('Shift ' + i);
    }
  }
  chipclick(e: ClickEventArgs) {
    console.log(e.text);
    this.timeFrom = e.text;
    this.timeTo = e.text;
    setTimeout(() => {
      if (this.shiftORfull == e.text) {
        this.shiftORfull = undefined;
      } else {
        this.shiftORfull = e.text;
      }
    }, 50);
  }
  constructor() {}
  onValueChange(): void {
    for (let i: number = 0; i < this.calendarObj.values.length; i++) {
      // console.log(this.calendarObj.values[i].toLocaleDateString());
    }
  }
  addConfigration() {
    console.log(typeof this.timeFrom);
    for (let i: number = 0; i < this.calendarObj.values.length; i++) {
      if (typeof this.timeFrom == 'object') {
        this.configRowData.push({
          dayOff: this.calendarObj.values[i].toLocaleDateString(),
          from: this.timeFrom.toLocaleTimeString(),
          to: this.timeTo.toLocaleTimeString(),
          reason: this.Reason,
        });
      } else {
        this.configRowData.push({
          dayOff: this.calendarObj.values[i].toLocaleDateString(),
          // dayOff: this.calendarObj.values[i].,
          from: this.timeFrom,
          to: this.timeTo,
          reason: this.Reason,
        });
      }
    }
    // console.log(this.configRowData);
    this.calendarObj.values = [];
    this.timeFrom = '';
    this.timeTo = '';
    this.Reason = '';
  }
  ngOnInit(): void {}
  onChange(args): void {
    // this.service.getLinesByFactory(1).subscribe((res) => {
    //   console.log(res);
    //   Object.keys(res).forEach((key) => {
    //     this.lines.push(res[key].name);
    //   });
    // });
  }
  @ViewChild('startTime')
  public startObject: TimePickerComponent;
  @ViewChild('endTime')
  public endObject: TimePickerComponent;
  public isStartTimeChange: Boolean = true;
  public endInput: HTMLInputElement;
  ngAfterViewInit(): void {
    this.endInput = <HTMLInputElement>document.getElementById('endPicker');
  }

  public onEnableEndTime(args: ChangeEventArgs): void {
    /*Enables end time if start time is selected*/
    let value: Date;
    if (this.isStartTimeChange) {
      this.endObject.enabled = true;
      this.endObject.value = null;
      this.endInput.value = '';
      value = new Date(args.value);
      value.setMinutes(value.getMinutes() + this.endObject.step);
      this.endObject.min = value;
    } else {
      this.isStartTimeChange = true;
    }
  }

  public changeTime(args: checkboxChange): void {
    /*To determine whether we have selected business hours or not*/
    this.isStartTimeChange = false;
    if (args.checked) {
      /*Business hours*/
      this.startObject.value = new Date('9/6/2017 9:00');
      this.endObject.enabled = true;
      this.endObject.value = new Date('9/6/2017 18:00');
      this.startObject.readonly = true;
      this.endObject.readonly = true;
    } else {
      this.endObject.value = null;
      this.startObject.value = null;
      this.endInput.value = '';
      this.startObject.readonly = false;
      this.endObject.readonly = false;
      this.endObject.enabled = false;
    }
  }

  addConfigrationManPower(){
    console.log(this.Grade1);
    this.configRowDataMan.push({
      id: null,
      g1: this.Grade1,
      g2: this.Grade2,
      g3: this.Grade3,
      total: Number(this.Grade1) + Number(this.Grade2) + Number(this.Grade3),
    });
this.Grade1='';
this.Grade2='';
this.Grade3='';
  }
}
