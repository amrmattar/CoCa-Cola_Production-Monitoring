import { Injectable } from '@angular/core';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';
import { Observable, Subject } from 'rxjs';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';
import {
  DashboardFilter,
  GroupIdentifierType,
  TimeType,
} from '../Shared/models/DashboardFilter';
import { ApiService } from '../APIsServices/api.service';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrentActivityService {
  private subject = new Subject<MenuItemModel>();
  private allowCustome = new Subject<any>();
  public filter: DashboardFilter = new DashboardFilter();
  public dashboardModel: any;
  public dashboardModelCharts: any;
  public dashboardModelCompair: any;
  public machinesModel: any;
  public machines: any;
  constructor(private apiService: ApiService) {}
  private subject1 = new Subject<any>();
  public ShiftNum: number = 1;
  public FactoryNum: number = 0;
  public onDataget: any;
  public onDatagetCompair: EventEmitter<any> = new EventEmitter();
  public machinesList: any;
  public machinesValues: EventEmitter<any> = new EventEmitter();
  public timeLine: any;
  public lineSelect: any;
  public machinesTimeLine: EventEmitter<any> = new EventEmitter();

  sendMessage1(message: boolean) {
    this.subject1.next(message);
  }
  getMessage1(): Observable<any> {
    return this.subject1.asObservable();
  }

  sendMessage(message: ItemModel) {
    if (message.value == null) {
      // this.filter.groupIdentifier = null;
      // this.filter.groupIdentifierType = null;
      return;
    }

    switch (message.id) {
      case 'planet':
        this.filter.Factory = message.text;
        break;
      case 'line':
        // this.filter.groupIdentifierType = GroupIdentifierType.Line;
        this.filter.LineID = message.value;
        break;
      case 'function':
        // this.filter.groupIdentifierType = GroupIdentifierType.Function;
        // this.filter.groupIdentifier = message.value;
        break;
      case 'machine':
        // this.filter.groupIdentifierType = GroupIdentifierType.Machine;
        // this.filter.groupIdentifier = message.value;
        break;
      case 'date':

        break;
      case 'dateTime':
        // this.filter.TimeType = message.text;
        break;
      case 'dateTimeCompair':
        // this.filter.TimeType = message.text;
        break;
    }
    // this.filter.TimeType = 0;
    if (this.filter.TimeType != null) {

      this.apiService.getDashboard(this.filter).subscribe((x) => {
        if (x[0] == 0) {
          this.dashboardModel = undefined;
        } else {
          this.dashboardModel = x;
          console.log(x);
          
        }
        console.log(this.dashboardModel);
      });

      this.apiService.getTimeLine(this.filter).subscribe((x) => {
        this.timeLine = x;
      });

    }

    this.subject.next(message);
  }
  sendLine(line) {
    this.lineSelect = line;
  }
  getMessage() {
    return this.subject.asObservable();
  }
}
