import { Component, OnInit } from '@angular/core';
import { L10n, setCulture } from '@syncfusion/ej2-base';
import { ApiserviceService } from 'src/app/Services/apiservice.service';
import { data } from '../data';
import {
  EditService,
  PageService,
  CommandColumnService,
  CommandModel,
} from '@syncfusion/ej2-angular-grids';
import { command, rowEdit } from '../setting-assigned-machines/commandclass';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

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
  selector: 'app-setting-product',
  templateUrl: './setting-product.component.html',
  styleUrls: ['./setting-product.component.scss'],
  providers: [EditService, PageService, CommandColumnService],
})
export class SettingProductComponent implements OnInit {
  ProductName: string;
  UOM: string;
  newUOM: string;
  newDesc: string;
  ProductSize: number;
  PackSize: number;
  PalletSize: number;
  SKUSize: number;
  ratedSpeed: number;
  public commandParse: command;
  data: Object;
  UOMList: any;
  // UOMList: any;
  constructor(private service: ApiserviceService) {
    this.service.getProductSKUs().subscribe((res) => {
      this.data = res;
    });
    this.service.getUnitOfMeasurings().subscribe((res) => {
      console.log(res);
      // this.UOMList = res;
      this.UOMList = res.map((x) => {
        return { text: x.unit, value: x.id, description: x.description };
      });
    });
  }

  public editSettings: Object;
  public orderidrules: Object;
  public customeridrules: Object;
  public freightrules: Object;
  public editparams: Object;
  public pageSettings: Object;
  public commands: CommandModel[];
  public rowParse: rowEdit;
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
  }

  save() {
    console.log(this.ProductName);
    console.log(this.ProductSize);
    console.log(this.PackSize);
    console.log(this.PalletSize);
    if (
      this.ProductName != undefined &&
      this.ProductSize != undefined &&
      this.PackSize != undefined &&
      this.SKUSize != undefined &&
      this.UOM != undefined &&
      this.ratedSpeed != undefined &&
      this.PalletSize != undefined
    ) {
      let obj = {
        productName: this.ProductName,
        size: this.SKUSize,
        measuringUnit: this.UOM,
        machineID: 'string',
        packSize: this.PackSize,
        palteSize: this.PalletSize,
        technicalSKU: this.SKUSize,
        ratedSpeed: this.ratedSpeed,
      };
      this.service.postProductSKUs(obj).subscribe((x) => {});
      setTimeout(() => {
        window.location.reload();
      }, 150);
    }
  }
  onChange(args): void {}
  adduom() {
    let obj = {
      unit: this.newUOM,
      description: this.newDesc,
    };
    this.service.postUnitOfMeasurings(obj).subscribe((x) => {
      this.service.getUnitOfMeasurings().subscribe((res) => {
      console.log(res);
      this.UOMList = res.map((x) => {
        return { text: x.unit, value: x.id, description: x.description };
      });
    });
    });
    // this.UOMList.push(this.newUOM);
    this.newUOM = null;
    this.newDesc = null;
  }
  deleteUOM(id){
this.service.deleteUnitOfMeasurings(id).subscribe((x) => {
  this.service.getUnitOfMeasurings().subscribe((res) => {
      console.log(res);
      this.UOMList = res.map((x) => {
        return { text: x.unit, value: x.id, description: x.description };
      });
    });
});
  }
  clickHandler(args: ClickEventArgs): void {
    this.commandParse = args.commandColumn as command;
    if (this.commandParse.type == 'Save') {
      setTimeout(() => {
        this.rowParse = args.rowData as rowEdit;
        console.log(this.rowParse);
        let obj = {
          id: this.rowParse.id,
          productName: this.rowParse.productName,
          size: this.rowParse.size,
          unitMeasuringID: 1,
          machineID: this.rowParse.machineID,
          packSize: this.rowParse.packSize,
          palteSize: this.rowParse.palteSize,
          technicalSKU: this.rowParse.technicalSKU,
          ratedSpeed: this.rowParse.ratedSpeed,
        };
        console.log(obj);
        this.service.putproduct(obj).subscribe((x) => {});
      }, 50);
    }
    if (this.commandParse.type == 'Delete') {
      this.service.deleteProductSKUs(this.rowParse.id).subscribe((x) => {});
    }
  }
}
