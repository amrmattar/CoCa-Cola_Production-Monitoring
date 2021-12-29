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
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-date-picker-compair',
  templateUrl: './date-picker-compair.component.html',
  styleUrls: ['./date-picker-compair.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DatePipe],
})
export class DatePickerCompairComponent implements OnInit {
  @Input() childProp;
  @Output() dateChangedCompair = new EventEmitter<string>();
  public start: CalendarView = 'Month';
  public depth: CalendarView = 'Month';
  public format: string = 'yyyy-MM-dd';
  endDate: any;
  public maxDate: Date = new Date();
  public disableFlag: boolean = false;
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
    this._CurrentActivityService.filter.endDate = this.datepipe.transform(
      event.value,
      'yyyy-MM-dd'
    );
    var date = this.datepipe.transform(event.value, 'yyyy-MM-dd');
    this.dateChangedCompair.emit(date.substring(0, date.length));
  }
}
