import { Component, OnInit } from '@angular/core';
import { data } from '../usage-ratio-top/data';
import { SelectionService } from '@syncfusion/ej2-angular-grids';
import {
  EditService,
  PageService,
  CommandColumnService,
  CommandModel,
} from '@syncfusion/ej2-angular-grids';
@Component({
  selector: 'app-usage-ratio-bottom',
  templateUrl: './usage-ratio-bottom.component.html',
  styleUrls: ['./usage-ratio-bottom.component.scss'],
  providers: [SelectionService, EditService, PageService, CommandColumnService],
})
export class UsageRatioBottomComponent implements OnInit {
  public data: Object[];
  public selectOptions: Object;
  public pageSettings: Object;
  factorySelect: string;
  public editSettings: Object;
  public orderidrules: Object;
  public customeridrules: Object;
  public freightrules: Object;
  public editparams: Object;
  public commands: CommandModel[];
  source: string[] = ['Line 1', 'Line 2', 'Line 3'];
  rowSelected(args: any) {
    debugger;
    var grid = (document.getElementsByClassName('e-grid')[0] as any)
      .ej2_instances[0];
    console.log(grid.getSelectedRecords());
  }
  constructor() {}

  ngOnInit(): void {
    this.data = data;
    this.selectOptions = { type: 'Single', persistSelection: true };
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
        type: 'Delete',
        buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' },
      },
    ];
  }
  onChange(args): void {
    // this.service.getLinesByFactory(1).subscribe((res) => {
    //   console.log(res);
    //   Object.keys(res).forEach((key) => {
    //     this.lines.push(res[key].name);
    //   });
    // });
  }
  valueChange(args): void {
    console.log(args);
    // this.MachineID = args[0];
  }
}
