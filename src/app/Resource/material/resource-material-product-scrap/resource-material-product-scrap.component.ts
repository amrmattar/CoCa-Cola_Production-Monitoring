import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataUtil } from '@syncfusion/ej2-data';
import { data } from '../resource-material-time-line/data';
import { MouseEventArgs } from '@syncfusion/ej2-base';
import { EmitType } from '@syncfusion/ej2-base';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import {
  EditSettingsModel,
  ToolbarItems,
  GridComponent,
  DialogEditEventArgs,
  RowDataBoundEventArgs,
} from '@syncfusion/ej2-angular-grids';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { ApiserviceService } from 'src/app/Services/apiservice.service';

@Component({
  selector: 'app-resource-material-product-scrap',
  templateUrl: './resource-material-product-scrap.component.html',
  styleUrls: ['./resource-material-product-scrap.component.scss'],
})
export class ResourceMaterialProductScrapComponent implements OnInit {
  asd: string = '';
  email: string;
  newPassord: string;
  roleName;
  public selectedItem: string;
  public data: Object[];
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[] | object;
  public targetElement: HTMLElement;
  public hidden: Boolean = false;
  // public users: any[];
  public shipCountryDistinctData: Object;
  @ViewChild('grid')
  grid: GridComponent;
  @ViewChild('orderForm')
  orderForm: FormGroup;
  @ViewChild('tab')
  tabObj: any;
  products: Object;
  roles: Object;
  arrayOfName: string[] = ['ascwas', 'qascasc'];
  linetemp: string[] = ['Line 1', 'Line 2', 'Line 3'];
  public prod_Type: string[] = ['Finished', 'Semi Finished'];
  emailFlag: any;

  ngOnInit(): void {
    this.data = data;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Dialog',
    };
    this.toolbar = ['Add'];

    // this.shipCountryDistinctData = DataUtil.distinct(data, 'ShipCountry', true);
  }

  moveNext() {
    if (this.orderForm.valid) {
      this.tabObj.select(1);
    }
  }
  submitBtn() {
    if (this.orderForm.valid) {
      this.grid.endEdit();
    }
  }
  btnClick1(args) {
    // alert('hi');
    // Edit the seleted row
    // this.grid.selectRow(10000000);
    setTimeout(() => {
      this.grid.startEdit();
      this.grid.clearSelection();
    }, 50);
  }

  constructor(private apiService: ApiserviceService) {
    this.arrayOfName = new Array();
    this.apiService.getProducts().subscribe((products) => {
      this.products = products;
      console.log(this.products);
      Object.keys(this.products).forEach((key) => {
        if (this.products[key].product_Type == 0) {
          this.products[key].product_Type = 'Finished';
        } else {
          this.products[key].product_Type = 'Semi Finished';
        }
      });
    });
    // this.apiService.getRoles().subscribe((roles) => {
    //   this.roles = roles;
    //   Object.keys(this.roles).forEach((key) => {
    //     this.arrayOfName.push(this.roles[key].name);
    //   });

    // });
  }
  clickHandler(args: ClickEventArgs): void {
    if (args.item.id === 'Click') {
      this.onOpenDialog1(args);
    } else if (args.item.id === 'deleteClick') {
      this.onOpenDialog2(args);
    }
  }
  onUsersEdit(evt) {
    console.log(evt.requestType);

    let newuser = {
      name: '',
      product_Type: 1,
      code: '',
      unit_Of_Measure: '',
      secondary_Unit_Of_Measure: '',
    };
    let edituser = {
      id: 1,
      name: '',
      product_Type: 1,
      code: '',
      unit_Of_Measure: '',
      secondary_Unit_Of_Measure: '',
    };
    if (evt.requestType == 'save' && this.emailFlag != 'beginEdit') {
      newuser.name = evt.data.name;
      newuser.product_Type = this.prod_Type.indexOf(evt.data.product_Type);
      newuser.code = evt.data.code;
      newuser.unit_Of_Measure = evt.data.unit_Of_Measure;
      newuser.secondary_Unit_Of_Measure = evt.data.secondary_Unit_Of_Measure;
      this.apiService.putProducts(newuser).subscribe((x) => {});
      setTimeout(() => {
        debugger;
        this.apiService.getProducts().subscribe((products) => {
          this.products = products;
          console.log(this.products);
          Object.keys(this.products).forEach((key) => {
            if (this.products[key].product_Type == 0) {
              this.products[key].product_Type = 'Finished';
            } else {
              this.products[key].product_Type = 'Semi Finished';
            }
          });
        });
        this.grid.refresh();
      }, 100);
    } else if (evt.requestType == 'save' && this.emailFlag == 'beginEdit') {
      edituser.id = evt.data.id;
      edituser.name = evt.data.name;
      edituser.product_Type = this.prod_Type.indexOf(evt.data.product_Type);
      edituser.code = evt.data.code;
      edituser.unit_Of_Measure = evt.data.unit_Of_Measure;
      edituser.secondary_Unit_Of_Measure = evt.data.secondary_Unit_Of_Measure;
      this.apiService.putEditProducts(edituser).subscribe((x) => {});
      setTimeout(() => {
        debugger;
        this.apiService.getProducts().subscribe((products) => {
          this.products = products;
          console.log(this.products);
          Object.keys(this.products).forEach((key) => {
            if (this.products[key].product_Type == 0) {
              this.products[key].product_Type = 'Finished';
            } else {
              this.products[key].product_Type = 'Semi Finished';
            }
          });
        });
        this.grid.refresh();
      }, 100);
    }
    this.emailFlag = evt.requestType;
  }
  @ViewChild('ejDialog1') ejDialog1: DialogComponent;
  @ViewChild('ejDialog2') ejDialog2: DialogComponent;
  public onOpenDialog1 = function (event: any): void {
    this.ejDialog1.show();
  };
  public onOpenDialog2 = function (event: any): void {
    this.ejDialog2.show();
  };
  public onOverlayClick: EmitType<object> = () => {
    this.ejDialog1.hide();
    this.ejDialog2.hide();
  };
  btnClick() {
    let newRole = {
      name: '',
    };
    newRole.name = this.roleName;
    // this.apiService.AddRoles(newRole).subscribe((x) => {});
    this.ejDialog1.hide();
    setTimeout(() => {
      this.grid.refresh();
    }, 100);
  }
  btnClickdeleteRole() {
    Object.keys(this.roles).forEach((key) => {
      if (this.roles[key].name == this.selectedItem) {
        console.log(this.roles[key].id);
        // this.apiService.DeleteRoles(this.roles[key].id).subscribe((x) => {});
      }
    });
    this.ejDialog2.hide();
  }
}
