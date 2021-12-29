import { Component, OnInit } from '@angular/core';
import { CommandModel } from '@syncfusion/ej2-angular-grids';
import { L10n, setCulture } from '@syncfusion/ej2-base';
import { ApiserviceService } from 'src/app/Services/apiservice.service';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from '../data';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Query } from '@syncfusion/ej2-data';
import {
  EditSettingsModel,
  ToolbarItems,
  IEditCell,
} from '@syncfusion/ej2-angular-grids';
import { command, rowEdit } from './commandclass';

setCulture('en-US');

L10n.load({
  'en-US': {
    pager: {
      currentPageInfo: '',
      totalItemsInfo: '{1} to {2} of {0}',
    },
  },
});

@Component({
  selector: 'app-setting-assigned-machines',
  templateUrl: './setting-assigned-machines.component.html',
  styleUrls: ['./setting-assigned-machines.component.scss'],
})
export class SettingAssignedMachinesComponent implements OnInit {
  asd: ClickEventArgs;
  MachineTypes: any;
  MachineFunctionality: any;
  constructor(private service: ApiserviceService) {
    this.service.getMachineTypes().subscribe((res) => {
      console.log(res);
      this.MachineTypes = res;
    });
    this.service.getMachineFunctionality().subscribe((res) => {
      console.log(res);
      this.MachineFunctionality = res;
    });
    this.service.getfactories().subscribe((res) => {
      // map on response to put obj(x).name in countryName & obj(x).id in countryId
      this.country = res.map((x) => {
        return { countryName: x.name, countryId: `${x.id}` };
      });
    });
    this.service.getLines().subscribe((res) => {
      this.state = res.map((x) => {
        return {
          stateName: x.name,
          countryId: `${x.factoryId}`,
          stateId: `${x.id}`,
        };
      });
    });
  }

  public data: Object;
  public initialPage: Object;
  public editSettings: Object;
  public orderidrules: Object;
  public customeridrules: Object;
  public freightrules: Object;
  public editparams: Object;
  public pageSettings: Object;
  public countryParams: IEditCell;
  public countryElem: HTMLElement;
  public countryObj: DropDownList;
  public stateParams: IEditCell;
  public stateElem: HTMLElement;
  public stateObj: DropDownList;
  public rowParse: rowEdit;
  public commandParse: command;
  public commands: CommandModel[];
  public country: { [key: string]: Object }[] = [
    // { countryName: 'Alex', countryId: '1' },
    // { countryName: 'Tnta', countryId: '2' },
  ];
  public state: { [key: string]: Object }[] = [];

  ngOnInit(): void {
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Normal',
      allowEditOnDblClick: false,
    };
    this.orderidrules = { required: true };
    this.customeridrules = { required: true };
    this.freightrules = { required: true };
    this.editparams = { params: { popupHeight: '300px' } };
    this.pageSettings = { pageCount: 5 };
    this.commands = [
      {
        type: 'Edit',
        buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' },
      },
      {
        type: 'Delete',
        buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' },
      },
      {
        type: 'Save',
        buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' },
      },
      {
        type: 'Cancel',
        buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' },
      },
    ];
    this.service.getUnMachinesAssigned().subscribe((res) => {
      console.log(res);
      this.data = res;
      console.log(this.data);
    });
    this.initialPage = { pageSizes: true, pageCount: 4 };
    this.countryParams = {
      create: () => {
        this.countryElem = document.createElement('input');
        return this.countryElem;
      },
      read: () => {
        return this.countryObj.text;
      },
      destroy: () => {
        this.countryObj.destroy();
      },
      write: () => {
        this.countryObj = new DropDownList({
          dataSource: this.country,
          fields: { value: 'countryId', text: 'countryName' },
          change: () => {
            this.stateObj.enabled = true;
            let tempQuery: Query = new Query().where(
              'countryId',
              'equal',
              this.countryObj.value
            );
            this.stateObj.query = tempQuery;
            this.stateObj.text = null;
            this.stateObj.dataBind();
          },
          placeholder: 'Select a Factory',
          floatLabelType: 'Never',
        });
        this.countryObj.appendTo(this.countryElem);
      },
    };
    this.stateParams = {
      create: () => {
        this.stateElem = document.createElement('input');
        return this.stateElem;
      },
      read: () => {
        return this.stateObj.text;
      },
      destroy: () => {
        this.stateObj.destroy();
      },
      write: () => {
        this.stateObj = new DropDownList({
          dataSource: this.state,
          fields: { value: 'stateId', text: 'stateName' },
          enabled: false,
          placeholder: 'Select a Line',
          floatLabelType: 'Never',
        });
        this.stateObj.appendTo(this.stateElem);
      },
    };
  }

  clickHandler(args: ClickEventArgs): void {
    this.commandParse = args.commandColumn as command;
    // console.log(this.commandParse.type);
    // console.log(args);
    if (this.commandParse.type == 'Save') {
      setTimeout(() => {
        this.rowParse = args.rowData as rowEdit;
        console.log(args.rowData);
        console.log(this.rowParse);
        console.log(this.rowParse.factory);
        console.log(this.rowParse.line);
        let obj = {
          id: this.rowParse.id,
          machineID: this.rowParse.machineID,
          factoryID: null,
          lineID: null,
          machineTypeID: null,
          machineFunctionalityID: null,
          ratedSpeed: this.rowParse.ratedSpeed,
          useInCalculation: this.rowParse.useInCalculation,
        };
        Object.keys(this.country).forEach((key) => {
          if (this.country[key].countryName == this.rowParse.factory) {
            obj.factoryID = Number(this.country[key].countryId);
          }
        });
        Object.keys(this.state).forEach((key) => {
          if (
            this.state[key].stateName == this.rowParse.line &&
            this.state[key].countryId == obj.factoryID
          ) {
            obj.lineID = Number(this.state[key].stateId);
          }
        });
        Object.keys(this.MachineTypes).forEach((key) => {
          console.log(this.MachineTypes[key].type);
          console.log(this.MachineTypes[key].id);
          if (this.MachineTypes[key].type == this.rowParse.machineType) {
            obj.machineTypeID = this.MachineTypes[key].id;
          }
        });
        Object.keys(this.MachineFunctionality).forEach((key) => {
          if (
            this.MachineFunctionality[key].name ==
            this.rowParse.machineFunctionality
          ) {
            obj.machineFunctionalityID = this.MachineFunctionality[key].id;
          }
        });
        console.log(obj);
        this.service.putmachine(obj).subscribe((x) => {});
      }, 50);
    }
    // if (this.commandParse.type == 'Save') {
    //   this.service.putmachine(obj).subscribe((x) => {});
    // }
    if (this.commandParse.type == 'Delete') {
      this.service
        .deleteUnMachinesAssigned(this.rowParse.machineID)
        .subscribe((x) => {});
    }
  }
}
