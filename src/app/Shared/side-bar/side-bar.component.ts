import { identifierModuleUrl } from '@angular/compiler';
import {
  Component,
  HostBinding,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import {
  MenuItemModel,
  SidebarComponent,
} from '@syncfusion/ej2-angular-navigations';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';
import { CurrentActivityService } from 'src/app/Services/current-activity.service';
import { ApiService } from '../../APIsServices/api.service';
import { TimeType } from '../models/DashboardFilter';
import { SelectedModel } from '../side-bar/select-option';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SideBarComponent implements OnInit {
  value: string = 'driving';
  parentProp = 'Angular 5';
  customEnable: boolean = false;
  shiftFlag: boolean = true;
  @ViewChild('sidebarMenuInstance')
  public sidebarMenuInstance: SidebarComponent;
  public width: string = '185px';
  // public mediaQuery: string = '(min-width: 600px)';
  public target: string = '.main-content';
  public dockSize: string = '70px';
  public enableDock: boolean = true;
  logo: boolean = true;
  spinnerflag: boolean = false;
  spinnerflagmachine: boolean = false;
  dashboardShow: string;
  public get logined() {
    return sessionStorage.getItem('userId') != null;
  }
  Planet_name: string = 'Alex';
  Area_name: string = 'Area';
  Line_name: string = 'ALL';
  Function_name: string = 'Function';
  Machine_name: string = 'Machine';
  date_choose: string = 'All';
  date_choose_block: string = 'Select Time';
  date_choose_compair: string = 'Time Frame';
  planets: SelectedModel[] = [];
  lines: SelectedModel[] = [];
  functions: SelectedModel[] = [];
  loads: SelectedModel[] = [];
  get isMachineRouteActivated() {
    return window.location.href.indexOf('machines') != -1;
  }
  get isResourceRouteActivated() {
    return window.location.href.indexOf('resource-material') != -1;
  }
  get isDashboardRouteActivated() {
    if (window.location.href.split('#/')[1] == '') {
      this.dashboardShow = 'display: block;';
    } else {
      this.dashboardShow = 'display: none;';
    }
    // console.log(window.location.href.split('#/')[1] == '');
    return window.location.href.indexOf('') != -1;
  }
  constructor(
    public _CurrentActivityService: CurrentActivityService,
    public router: Router,
    private service: ApiService
  ) {
    //  this._CurrentActivityService.getMessage().subscribe(message => { this.message = message; });
  }
  public menuItems: MenuItemModel[] = [
    {
      text: 'Dashboard',
      iconCss: 'fas fa-th-large',
      url: '#/dashboard',
    },
    {
      text: 'Machines',
      iconCss: 'fas fa-adjust',
      url: '#/machines/info',
    },
    {
      text: 'Site ',
      iconCss: 'fas fa-industry',
      items: [
        { text: 'Factories', url: '#/site-factories' },
        { text: 'Lines', url: '#/site-lines' },
        { text: 'Functions', url: '#/site-functions' },
        { text: 'Machines ', url: '#/site-machine' },
      ],
    },
    {
      text: 'Resources ',
      iconCss: 'fas fa-500px',
      items: [
        { text: 'Materials', url: '#/resource-material/timeline' },
        // { text: 'Energy', url: '#/resource-energy' },
        // { text: 'Man Power', url: '#/resource-man-power' },
      ],
    },
    {
      text: 'Planning',
      iconCss: 'fas fa-wrench',
      url: '#/planning',
    },
  ];
  public menuItems2: MenuItemModel[] = [
    {
      text: 'Settings',
      iconCss: 'fab fa-adn',

      items: [
        { text: 'Machine Settings', url: '#/setting' },
        { text: 'Product Settings ', url: '#/Setting-Product' },
        { text: 'plan Settings', url: '#/Environmental-Parameters' },
        { text: 'Usage Ratio Settings', url: '#/UsageRatioSetComponent' },
      ],
    },
    {
      text: 'Logout ',
      iconCss: 'fab fa-adversal',
    },
  ];
  // open new tab
  public planets_drop: ItemModel[] = [];
  public lines_drop: ItemModel[] = [];
  public functions_drop: ItemModel[] = [];
  public machines: ItemModel[] = [];
  public date_choose_drop: ItemModel[] = [
    {
      text: 'Shift 1',
      value: TimeType.Shift,
      id: 'date',
    },
    {
      text: 'Shift 2',
      value: TimeType.Shift,
      id: 'date',
    },

    {
      text: 'All',
      value: TimeType.Day,
      id: 'date',
    },
  ];
  public date_choose_drop_block: ItemModel[] = [
    {
      text: 'Yasterday',
      value: TimeType.Shift,
      id: 'block',
    },
    {
      text: 'Last week',
      value: TimeType.Shift,
      id: 'block',
    },

    {
      text: 'Last month',
      value: TimeType.Day,
      id: 'block',
    },
    {
      text: 'duration',
      value: TimeType.Day,
      id: 'block',
    },
  ];
  public date_choose_drop_compair: ItemModel[] = [
    {
      text: 'Shift 2',
      value: TimeType.Shift,
      id: 'date1',
    },
    // {
    //   text: 'Shift 1',
    //   value: TimeType.Shift,
    //   id: 'date',
    // },
    // {
    //   text: 'Day',
    //   value: TimeType.Day,
    //   id: 'date',
    // },
    // // {
    // //   text: 'Week',
    // //   id: 'date',
    // // },
    // {
    //   text: 'Month',
    //   value: TimeType.Month,
    //   id: 'date',
    // },
    // // {
    // //   text: 'Quarter',
    // //   id: 'date',
    // // },
    // {
    //   text: 'year',
    //   value: TimeType.Year,
    //   id: 'date',
    // },
  ];
  openClick() {
    this.logo = !this.logo;
    this.sidebarMenuInstance.toggle();
  }
  ngOnInit(): void {
    console.log(this.throughputChart.length);
    setTimeout(() => {
      this.getFactories();
      this.openClick();
      this.openClick();
    }, 50);
  }
  public select(args: MenuEventArgs) {
    // console.log(args.item.id)
    if (args.item.id == 'line') {
      this.Line_name = args.item.text;
      this._CurrentActivityService.sendMessage(args.item);
      this._CurrentActivityService.sendLine(args.item.text);
      this.getLoads(args.item.value);
      this.spinnerflag = false;
      this.spinnerflagmachine = false;
    } else if (args.item.id == 'machine') {
      this.Machine_name = args.item.text;
      this._CurrentActivityService.sendMessage(args.item);
      this.getLoads(args.item.value);
      this.spinnerflag = false;
      this.spinnerflagmachine = false;
    } else if (args.item.id == 'function') {
      this.Function_name = args.item.text;
      this._CurrentActivityService.sendMessage(args.item);

      this.getLoads(args.item.value);
      this.spinnerflag = false;
      this.spinnerflagmachine = false;
    } else if (args.item.id == 'planet') {
      this.Line_name = 'ALL';
      this._CurrentActivityService.filter.LineID = null;
      this.Planet_name = args.item.text;
      console.log(args.item.text);
      if (args.item.text == 'Alex') {
        this._CurrentActivityService.FactoryNum = 0;
      } else {
        this._CurrentActivityService.FactoryNum = 1;
      }
      // this.getFactories();
      this._CurrentActivityService.sendMessage(args.item);
      this.getLines(args.item.value);
      this.getFunctions(args.item.value);
      // this.spinnerflag = false;
      // this.spinnerflagmachine = false;
    } else if (args.item.id == 'date') {
      this.date_choose = args.item.text;
      if (args.item.text == 'Shift 1') {
        this._CurrentActivityService.filter.TimeType = 1;
        this.date_choose_drop_compair = [
          { text: 'Shift 2', value: TimeType.Shift, id: 'date1' },
        ];
      } else if (args.item.text == 'Shift 2') {
        this._CurrentActivityService.filter.TimeType = 2;
        this.date_choose_drop_compair = [
          { text: 'Shift 1', value: TimeType.Shift, id: 'date1' },
        ];
      } else if (args.item.text == 'All') {
        this._CurrentActivityService.filter.TimeType = 0;
        this.date_choose_drop_compair = [
          { text: 'Shift 1', value: TimeType.Shift, id: 'date1' },
        ];
      } else {
        this.date_choose_drop_compair = [
          { text: args.item.text, value: TimeType.Shift, id: 'date1' },
        ];
      }
      this.value = 'date';
      // this.parentProp = args.item.text;
      // console.log(this.parentProp);
      console.log(args);
      this._CurrentActivityService.sendMessage(args.item);
      this.spinnerflag = false;
      this.spinnerflagmachine = false;
    } else if (args.item.id == 'date1') {
      this.date_choose_compair = args.item.text;
    } else if (args.item.id == 'block') {
      if (args.item.text == 'Yasterday') {
        this.shiftFlag = true;
        this._CurrentActivityService.filter.duration = 0;
      } else if (args.item.text == 'Last week') {
        this.shiftFlag = true;
        this._CurrentActivityService.filter.duration = 1;
      } else if (args.item.text == 'Last month') {
        this.shiftFlag = true;
        this._CurrentActivityService.filter.duration = 2;
      } else if (args.item.text == 'duration') {
        this.shiftFlag = false;
      }
      this._CurrentActivityService.sendMessage(args.item);
      this.date_choose_block = args.item.text;
    }
  }

  public menuclick(args: MenuEventArgs) {
    console.log(args.item.text);
    setTimeout(() => {
      window.location.reload();
    }, 50);
  }
  public throughputChart: Object[] = [];
  getFactories() {
    this.planets = [];
    this.planets = [];
    this.service.getFactories().subscribe((res) => {
      const data = JSON.parse(JSON.stringify(res));
      data.forEach((element) => {
        this.planets.push({
          text: element.name,
          value: element.id,
          id: 'planet',
        });
      });
      this.planets_drop = this.planets;

      this._CurrentActivityService.sendMessage(this.planets[0]);
      // this._CurrentActivityService.sendMessage(this.date_choose_drop[0]);

      this.getLines(this.planets[0].value);
      this.getFunctions(this.planets[0].value);
    });
    this._CurrentActivityService.onDataget;
    // this._CurrentActivityService.machinesList.subscribe((x) => {
    //   if (this.throughputChart.length >= 0) {
    //     this.spinnerflagmachine = true;
    //   }
    //   console.log(x);
    // });
  }
  getLines(factId) {
    console.log(factId);
    this.lines_drop = [];
    this.lines = [];
    this.service.getLinesFactories(factId).subscribe((res) => {
      this.lines.push({ text: "All", value: null, id: 'line' });
      const data = JSON.parse(JSON.stringify(res));
      console.log(res)
      data.forEach((element) => {
        this.lines.push({ text: element.name, value: element.id, id: 'line' });
      });
      // this.lines.push({ text: "All", value: null, id: 'line' });
      this.lines_drop = this.lines;
      this.lines_drop.unshift();
    });
  }
  getLoads(lineId) {
    this.machines = [];
    this.loads = [];
    this.service.getMachinesofLines(lineId).subscribe((res) => {
      const data = JSON.parse(JSON.stringify(res));
      data.forEach((element) => {
        this.loads.push({
          text: element.name,
          value: element.id,
          id: 'machine',
        });
      });
      this.machines = this.loads;
    });
  }
  getFunctions(factId) {
    this.functions_drop = [];
    this.functions = [];
    // this.service.getFunctionsFactories(factId).subscribe((res) => {
    //   const data = JSON.parse(JSON.stringify(res));
    //   data.forEach((element) => {
    //     this.functions.push({
    //       text: element.name,
    //       value: element.id,
    //       id: 'function',
    //     });
    //   });
    //   this.functions_drop = this.functions;
    //   this.functions_drop.unshift({
    //     text: 'Functions',
    //     value: null,
    //     id: 'line',
    //   });
    // });
  }
  @ViewChild('local')
  public mulObj: ButtonComponent;
  onOpen(event) {
    if (
      !(this.mulObj as any).popupObj.element
        .querySelectorAll('.e-list-item')[0]
        .classList.contains('e-hide')
    ) {
      (this.mulObj as any).popupObj.element
        .querySelectorAll('.e-list-item')[0]
        .classList.add('e-hide');
    }
  }
  OnDateChanged(date) {
    this._CurrentActivityService.sendMessage({
      id: 'dateTime',
      text: date,
      value: 1,
    });
  }
  OnDateChangedCompair(date) {
    this._CurrentActivityService.sendMessage({
      id: 'dateTimeCompair',
      text: date,
      value: 1,
    });
  }

  onallowClick(arg) {
    this.customEnable = !this.customEnable;
    this._CurrentActivityService.sendMessage1(this.customEnable);
  }
}
