import { Component, Inject, OnInit } from '@angular/core';
import { orderDatas } from './data';
import {
  EditService,
  PageService,
  CommandColumnService,
  CommandModel,
  SortService,
} from '@syncfusion/ej2-angular-grids';
import { ApiService } from 'src/app/APIsServices/api.service';

@Component({
  selector: 'app-site-machines',
  templateUrl: './site-machines.component.html',
  styleUrls: ['./site-machines.component.scss'],
  providers: [EditService, PageService, CommandColumnService, SortService],
})
export class SiteMachinesComponent implements OnInit {
  public data: Object[];
  public editSettings: Object;
  public orderidrules: Object;
  public customeridrules: Object;
  public freightrules: Object;
  public editparams: Object;
  public pageSettings: Object;
  public commands: CommandModel[];
  public initialSort: Object;
  public machines: any[];
  public ngOnInit(): void {
    this.editSettings = {
      allowEditing: true,
      mode: 'Normal',
      allowEditOnDblClick: false,
    };
    this.editparams = { params: { popupHeight: '300px' } };
    this.pageSettings = { pageCount: 5 };
    this.commands = [
      {
        type: 'Edit',
        buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' },
      },
      // {
      //   type: 'Delete',
      //   buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' },
      // },
      {
        type: 'Save',
        buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' },
      },
      {
        type: 'Cancel',
        buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' },
      },
    ];
  }
  constructor(private apiService: ApiService) {
    this.apiService.getMachineList().subscribe((machines) => {
      this.machines = machines;
      this.initialSort = {
        columns: [
          { field: 'name', direction: 'Ascending' },
          { field: 'functionName', direction: 'Ascending' },
          { field: 'factoryName', direction: 'Ascending' },
          { field: 'lineName', direction: 'Ascending' },
        ],
      };
    });
  }
  onmachineEdit(evt) {
    if (evt.requestType == 'save') {
      this.apiService.putMachine(evt.data).subscribe((x) => {});
    }
  }
}
