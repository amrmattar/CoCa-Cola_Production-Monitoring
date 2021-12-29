import { Component, Inject, OnInit } from '@angular/core';

import {
  EditService,
  PageService,
  CommandColumnService,
  CommandModel,
  SortService,
} from '@syncfusion/ej2-angular-grids';
import { ApiService } from 'src/app/APIsServices/api.service';
@Component({
  selector: 'app-machine-history',
  templateUrl: './machine-history.component.html',
  styleUrls: ['./machine-history.component.scss'],
  providers: [EditService, PageService, CommandColumnService, SortService],
})
export class MachineHistoryComponent implements OnInit {
  public data: Object[];
  public editSettings: Object;
  public orderidrules: Object;
  public customeridrules: Object;
  public freightrules: Object;
  public editparams: Object;
  public pageSettings: Object;
  tabChange: string = 'List';
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
    this.apiService.getMachineHistory().subscribe((machines) => {
      this.machines = machines;
      this.initialSort = {
        columns: [
          { field: 'machineName', direction: 'Ascending' },
          { field: 'state', direction: 'Ascending' },
          { field: 'timeStamp', direction: 'Ascending' },
        ],
      };
    });
  }
  onmachineEdit(evt) {
    if (evt.requestType == 'save') {
      this.apiService.putMachine(evt.data).subscribe((x) => {});
    }
  }
  tabMachine(tabName) {
    this.tabChange = tabName;
    // this.route.navigate(['/about']);
  }
  getTime(last)
  {
    return new Date(last).toLocaleString();
  }
}
