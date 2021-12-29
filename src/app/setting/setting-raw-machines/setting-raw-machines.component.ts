import { Component, OnInit, ViewChild } from '@angular/core';
import { orderDataSource } from '../data';
import {
  EditService,
  ToolbarService,
  PageService,
  NewRowPosition,
} from '@syncfusion/ej2-angular-grids';
import {
  ChangeEventArgs,
  DropDownListComponent,
  ListBox,
  ListBoxComponent,
} from '@syncfusion/ej2-angular-dropdowns';
import { ApiserviceService } from 'src/app/Services/apiservice.service';
import { Machine } from '../UnAllocatedMachines';
import { getInstance } from '@syncfusion/ej2-base';
import { ApiService } from 'src/app/APIsServices/api.service';
@Component({
  selector: 'app-setting-raw-machines',
  templateUrl: './setting-raw-machines.component.html',
  styleUrls: ['./setting-raw-machines.component.scss'],
  providers: [ToolbarService, EditService, PageService],
})
export class SettingRawMachinesComponent implements OnInit {
  @ViewChild('ddsample') public dropDown: DropDownListComponent;
  public setfield = { text: 'text' };
  linetemp: string[] = ['Line 1', 'Line 2', 'Line 3'];
  public machineList: Object[] = [];
  factorySelect: any;
  lineSelect: any;
  machineTypeSelect: any;
  machineFunctionSelect: any;
  speedSelect: any;
  MachineID: any;
  newmachineFunction: any;
  @ViewChild('ListBox') public listObj: ListBoxComponent;
  factories: any;
  created(): void {
    let listboxobj: ListBox = getInstance(
      document.getElementById('listbox'),
      ListBox
    ) as ListBox;
    listboxobj.selectItems(['AlBlow3']);
  }
  valueChange(args): void {
    console.log(args);
    this.MachineID = args[0];
  }
  // public factories: string[] = [];
  public MachineFunctionality: any;
  public MachineTypes: any;
  public lines: any;

  constructor(private service: ApiserviceService) {
    this.service.getUnAllocatedMachines().subscribe((UnAllocatedMachine) => {
      Object.keys(UnAllocatedMachine).forEach((key) => {
        let asd = {
          text: UnAllocatedMachine[key],
          id: UnAllocatedMachine[key],
        };
        this.machineList.push(asd);
      });
      this.listObj.refresh();
      let listboxobj: ListBox = getInstance(
        document.getElementById('listbox'),
        ListBox
      ) as ListBox;
      listboxobj.selectItems(['AlBlow3']);
    });

    this.service.getfactories().subscribe((res) => {
      this.factories = res.map((x) => {
        return { text: x.name, value: x.id };
      });
    });
    this.service.getMachineFunctionality().subscribe((res) => {
      this.MachineFunctionality = res.map((x) => {
        return { text: x.name, value: x.id };
      });
    });
    this.service.getMachineTypes().subscribe((res) => {
      this.MachineTypes = res.map((x) => {
        return { text: x.type, value: x.id };
      });
    });
  }
  public ngOnInit(): void {}

  @ViewChild('ddlelement')
  public dropDownListObject: DropDownListComponent;
  onChange(args): void {
    if (args.value > 0) {
      this.speedSelect = args.value;
    }
    if (args.element.id == 'factory') {
      this.factorySelect = args.itemData.value;
      this.service.getLinesByFactory(args.itemData.value).subscribe((res) => {
        console.log(res);
        this.lines = res.map((x) => {
          return { text: x.name, value: x.id };
        });
      });
    } else if (args.element.id == 'line') {
      this.lineSelect = args.itemData.value;
    } else if (args.element.id == 'machine type') {
      this.machineTypeSelect = args.itemData.value;
    } else if (args.element.id == 'machine functionality') {
      this.machineFunctionSelect = args.itemData.value;
    }
  }
  save() {
    // console.log(this.MachineID);
    // console.log(this.factorySelect);
    // console.log(this.lineSelect);
    // console.log(this.machineTypeSelect);
    // console.log(this.machineFunctionSelect);
    // console.log(this.speedSelect);
    if (
      this.MachineID != undefined &&
      this.factorySelect != undefined &&
      this.lineSelect != undefined &&
      this.machineTypeSelect != undefined &&
      this.machineFunctionSelect != undefined &&
      this.speedSelect != undefined
    ) {
      console.log('this.machineFunctionSelect');
      let obj = {
        machineID: this.MachineID,
        lineID: this.lineSelect,
        machineTypeID: this.machineTypeSelect,
        machineFunctionalityID: this.machineFunctionSelect,
        ratedSpeed: this.speedSelect,
        factoryID: this.factorySelect,
      };
      this.service.postMachinesAssigned(obj).subscribe((x) => {});
      setTimeout(() => {
        window.location.reload();
      }, 150);
    }
  }
  addmachineFunction() {
    this.service
      .postMachineFunctionality({ name: this.newmachineFunction })
      .subscribe((x) => {
        this.service.getMachineFunctionality().subscribe((res) => {
          this.MachineFunctionality = res.map((x) => {
            return { text: x.name, value: x.id };
          });
        });
      });
    this.newmachineFunction = null;
  }
  deletemachineFunction(id) {
    this.service
      .deleteMachineFunctionality(id)
      .subscribe((x) => {
        this.service.getMachineFunctionality().subscribe((res) => {
          this.MachineFunctionality = res.map((x) => {
            return { text: x.name, value: x.id };
          });
        });
      });
  }
}
