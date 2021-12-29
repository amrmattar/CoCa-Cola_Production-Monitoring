import { Component, OnInit } from '@angular/core';
import { orderDatas } from '../site-machines/data';
import {
  EditService,
  PageService,
  CommandColumnService,
  CommandModel,
} from '@syncfusion/ej2-angular-grids';
import { ApiService } from 'src/app/APIsServices/api.service';

@Component({
  selector: 'app-site-lines',
  templateUrl: './site-lines.component.html',
  styleUrls: ['./site-lines.component.scss'],
  providers: [EditService, PageService, CommandColumnService],
})
export class SiteLinesComponent implements OnInit {
  public data: Object[];
  public editSettings: Object;
  public orderidrules: Object;
  public customeridrules: Object;
  public freightrules: Object;
  public editparams: Object;
  public pageSettings: Object;
  public commands: CommandModel[];
  public lines: any[];
  public ngOnInit(): void {
    this.data = orderDatas;
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
    this.apiService.getLineList().subscribe((lines) => {
      this.lines = lines;
    });
  }
  onlineEdit(evt) {
    if (evt.requestType == 'save') {
      this.apiService.putLine(evt.data).subscribe((x) => {});
    }
  }
}
