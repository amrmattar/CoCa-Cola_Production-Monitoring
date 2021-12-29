import { DatePipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { CalendarView, PreventableEventArgs } from '@syncfusion/ej2-calendars';
import { CurrentActivityService } from 'src/app/Services/current-activity.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DatePipe],
})
export class DatePickerComponent implements OnInit {
  @Input() childProp;
  @Output() dateChanged = new EventEmitter<string>();
  public start: CalendarView = 'Month';
  public depth: CalendarView = 'Month';
  public format: string = 'yyyy-MM-dd';
  public disableFlag: boolean = false;
  startDate: any;
  public maxDate: Date = new Date();
  constructor(
    public _CurrentActivityService: CurrentActivityService,
    public datepipe: DatePipe
  ) {}
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.childProp);
    if (this.childProp == 'Day') {
      this.disableFlag = true;
      this.start = 'Month';
      this.depth = 'Month';
      this.format = 'dd MMMM y';
    } else if (this.childProp == 'Week') {
      this.disableFlag = true;
      this.start = 'Month';
      this.depth = 'Month';
      this.format = 'dd MMMM y';
    } else if (this.childProp == 'Month') {
      this.disableFlag = true;
      this.start = 'Year';
      this.depth = 'Year';
      this.format = 'MMMM y';
    } else if (this.childProp == 'Quarter') {
      this.disableFlag = true;
      this.start = 'Year';
      this.depth = 'Year';
      this.format = 'MMMM y';
    } else if (this.childProp == 'year') {
      this.disableFlag = true;
      this.start = 'Decade';
      this.depth = 'Decade';
      this.format = 'y';
    } else {
      this.disableFlag = false;
    }
  }

  onDateChange(event) {
    this._CurrentActivityService.filter.startDate = this.datepipe.transform(
        event.value[0],
        'yyyy-MM-dd'
      );
    this._CurrentActivityService.filter.endDate = this.datepipe.transform(
        event.value[1],
        'yyyy-MM-dd'
      );
      var date = this.datepipe.transform(event.value[0], 'yyyy-MM-dd');
      var date1 = this.datepipe.transform(event.value[1], 'yyyy-MM-dd');
      console.log(date);
      console.log(date1);
    this.dateChanged.emit(date.substring(0, date.length));
  }

  //  onClose(args: PreventableEventArgs): void {
  //         args.preventDefault();
  //     }
}
