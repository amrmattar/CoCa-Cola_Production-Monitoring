import {
  Component,
  ViewEncapsulation,
  ViewChild,
  ViewContainerRef,
  TemplateRef,
  OnInit,
} from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import {
  DashboardLayoutComponent,
  PanelModel,
} from '@syncfusion/ej2-angular-layouts';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';
import { UUID } from 'angular2-uuid';
import { CurrentActivityService } from '../Services/current-activity.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  templateDropdown: string;
  uuidValue: string;
  allowResizing: boolean = false;
  allowDragging: boolean = false;
  public position1: object = { Y: 100 };
  public data: string[] = [
    'Performance',
    'Current Activity',
    'Time Line',
    'Cycle Time',
  ];
  // set placeholder text to DropDownList input element
  public placeholder: string = 'Select a Panal';
  public allowFloating: boolean = true;
  public cellAspectRatio: number = 100 / 75;
  public cellSpacing: number[] = [10, 10];
  @ViewChild('dashboard', { static: true })
  public Dashboard: DashboardLayoutComponent;
  @ViewChild('saveBtn') saveBtn: ButtonComponent;
  public count: number = 50;
  public count1: number = 0;
  public restoreModel: any = [];
  public targetElement: HTMLElement;
  public hidden: Boolean = false;
  @ViewChild('viewContainer', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;
  @ViewChild('CustomTemplate1', { static: true })
  CustomTemplate1: TemplateRef<any>;
  @ViewChild('CustomTemplate2', { static: true })
  CustomTemplate2: TemplateRef<any>;
  @ViewChild('CustomTemplate3', { static: true })
  CustomTemplate3: TemplateRef<any>;
  @ViewChild('CustomTemplate4', { static: true })
  CustomTemplate4: TemplateRef<any>;
  allow: any = false;

  BtnClick() {
    this.uuidValue = UUID.UUID();
    // adding panel dynamically

    //rendes the (CustomTemplate) temaplte in dom
    if (this.templateDropdown == 'Performance') {
      let panel: PanelModel[] = [
        {
          id: this.templateDropdown + '_' + this.uuidValue,
          sizeX: 42,
          sizeY: 9,
          row: 0,
          col: 0,
        },
      ];
      this.Dashboard.addPanel(panel[0]);
      //// console.log(this.uuidValue);
      const templateValue = this.CustomTemplate1.createEmbeddedView(null);
      this.viewContainer.insert(templateValue);
      let panel_Content = document.getElementById(
        this.templateDropdown + '_' + this.uuidValue + '_content'
      );
      panel_Content.appendChild(templateValue.rootNodes[0]);
    } else if (this.templateDropdown == 'Current Activity') {
      let panel: PanelModel[] = [
        {
          id: this.templateDropdown + '_' + this.uuidValue,
          sizeX: 42,
          sizeY: 11,
          row: 0,
          col: 0,
        },
      ];
      this.Dashboard.addPanel(panel[0]);
      //// console.log(this.uuidValue);
      const templateValue = this.CustomTemplate2.createEmbeddedView(null);
      this.viewContainer.insert(templateValue);
      let panel_Content = document.getElementById(
        this.templateDropdown + '_' + this.uuidValue + '_content'
      );
      panel_Content.appendChild(templateValue.rootNodes[0]);
    } else if (this.templateDropdown == 'Time Line') {
      let panel: PanelModel[] = [
        {
          id: this.templateDropdown + '_' + this.uuidValue,
          sizeX: 42,
          sizeY: 15,
          row: 0,
          col: 0,
        },
      ];
      this.Dashboard.addPanel(panel[0]);
      // console.log(this.uuidValue);
      const templateValue = this.CustomTemplate3.createEmbeddedView(null);
      this.viewContainer.insert(templateValue);
      let panel_Content = document.getElementById(
        this.templateDropdown + '_' + this.uuidValue + '_content'
      );
      panel_Content.appendChild(templateValue.rootNodes[0]);
    }
    //  else if (this.templateDropdown == 'Cycle Time') {
    //   let panel: PanelModel[] = [
    //     {
    //       id: this.templateDropdown + '_' + this.uuidValue,
    //       sizeX: 10,
    //       sizeY: 27,
    //       row: 0,
    //       col: 32,
    //     },
    //   ];
    //   this.Dashboard.addPanel(panel[0]);
    //   // console.log(this.uuidValue);
    //   const templateValue = this.CustomTemplate4.createEmbeddedView(null);
    //   this.viewContainer.insert(templateValue);
    //   let panel_Content = document.getElementById(
    //     this.templateDropdown + '_' + this.uuidValue + '_content'
    //   );
    //   panel_Content.appendChild(templateValue.rootNodes[0]);
    // }
    this.count = this.count + 1;
    this.ejDialog1.hide();
  }

  onCloseIconHandler(event: any): void {
    if ((<HTMLElement>event.target).offsetParent) {
      this.Dashboard.removePanel((<HTMLElement>event.target).offsetParent.id);
    }
  }

  onSaveClick(arg) {
    this.restoreModel = this.Dashboard.serialize();
    for (let i = this.restoreModel.length - 1; i >= 0; i--) {
      let x = 0;
      this.restoreModel[i].content = this.Dashboard.panels[x].content;
      x++;
    }
    const circularReplacer = () => {
      const seen = new WeakSet();
      return (key, value) => {
        if (typeof value === 'object' && value !== null) {
          if (seen.has(value)) {
            return 'Object';
          }
          seen.add(value);
        }
        return value;
      };
    };

    var jsonString = JSON.stringify(this.restoreModel, circularReplacer());
    // // console.log(this.restoreModel[0].content);
    // console.log(jsonString);
    localStorage.setItem('datas', jsonString);
  }
  onallowClick(arg) {
    this.allowDragging = !this.allowDragging;
    this.allowResizing = !this.allowResizing;
  }
  ngOnInit(): void {
    console.log('aqf2qes')
    setTimeout(() => {
      
      let data = JSON.parse(localStorage.getItem('datas'));
      for (let index = 0; index < data.length; index++) {
        data[index];
        let panel: PanelModel[] = [
          {
            id: data[index].id,
            sizeX: data[index].sizeX,
            sizeY: data[index].sizeY,
            row: data[index].row,
            col: data[index].col,
          },
        ];
        this.Dashboard.addPanel(panel[0]);
        // // console.log(data[index].id.split('_')[0]);

        if (data[index].id.split('_')[0] == 'Performance') {
          const templateValue = this.CustomTemplate1.createEmbeddedView(null);
          this.viewContainer.insert(templateValue);
          let panel_Content = document.getElementById(
            data[index].id + '_content'
          );
          panel_Content.appendChild(templateValue.rootNodes[0]);
        } else if (data[index].id.split('_')[0] == 'Current Activity') {
          const templateValue = this.CustomTemplate2.createEmbeddedView(null);
          this.viewContainer.insert(templateValue);
          let panel_Content = document.getElementById(
            data[index].id + '_content'
          );
          panel_Content.appendChild(templateValue.rootNodes[0]);
        } else if (data[index].id.split('_')[0] == 'Time Line') {
          const templateValue = this.CustomTemplate3.createEmbeddedView(null);
          this.viewContainer.insert(templateValue);
          let panel_Content = document.getElementById(
            data[index].id + '_content'
          );
          panel_Content.appendChild(templateValue.rootNodes[0]);
        }
        //  else if (data[index].id.split('_')[0] == 'Cycle Time') {
        //   const templateValue = this.CustomTemplate4.createEmbeddedView(null);
        //   this.viewContainer.insert(templateValue);
        //   let panel_Content = document.getElementById(
        //     data[index].id + '_content'
        //   );
        //   panel_Content.appendChild(templateValue.rootNodes[0]);
        // }
      }
    }, 50);
    // if(window)
    // window.location.reload();
    setTimeout(() => {
      // console.log(this.Dashboard.panels.length);
      if (this.Dashboard.panels.length == 0) {
        setTimeout(() => {
          this.templateDropdown = 'Cycle Time';
          this.BtnClick();
        }, 150);
        setTimeout(() => {
          this.templateDropdown = 'Time Line';
          this.BtnClick();
        }, 300);
        setTimeout(() => {
          this.templateDropdown = 'Current Activity';
          this.BtnClick();
        }, 450);
        setTimeout(() => {
          this.templateDropdown = 'Performance';
          this.BtnClick();
        }, 600);
      }
    }, 100);
  }

  @ViewChild('ejDialog1') ejDialog1: DialogComponent;
  public onOpenDialog1 = function (event: any): void {
    // Call the show method to open the Dialog
    this.ejDialog1.show();
  };
  public hideDialog: EmitType<object> = () => {
    this.ejDialog1.hide();
  };
  public onOverlayClick: EmitType<object> = () => {
    this.ejDialog1.hide();
  };
  public btnclick2() {
    this.ejDialog1.hide();
  }
  @ViewChild('ddlelement')
  public dropDownListObject: DropDownListComponent;
  onChange(args): void {
    this.templateDropdown = args.value;
  }

  constructor(public _CurrentActivityService: CurrentActivityService) {
    this._CurrentActivityService.getMessage1().subscribe((allow) => {
      this.allow = allow;
    });
  }
  onResizeStart(args: any) {
    // console.log(args.element.id.split('_')[0]);
  }

}
