import { Component, ViewChild } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-planning-route-function',
  templateUrl: './planning-route-function.component.html',
  styleUrls: ['./planning-route-function.component.scss'],
})
export class PlanningRouteFunctionComponent {
  @ViewChild('sample')
  public listObj: DropDownListComponent;
  // define the JSON of data
  public sportsData: Object[] = [
    { Id: 'Game1', Game: 'Function Name' },
    { Id: 'Game2', Game: 'Function Name' },
    { Id: 'Game3', Game: 'Function Name' },
    { Id: 'Game4', Game: 'Function Name' },
    { Id: 'Game5', Game: 'Function Name' },
    { Id: 'Game6', Game: 'Function Name' },
    { Id: 'Game7', Game: 'Function Name' },
    { Id: 'Game8', Game: 'Function Name' },
    { Id: 'Game9', Game: 'Function Name' },
    { Id: 'Game10', Game: 'Function Name' },
  ];
  // maps the appropriate column to fields property
  public fields: Object = { text: 'Game', value: 'Id' };
  // set the height of the popup element
  public height: string = '215px';
  // set the placeholder to DropDownList input element
  public waterMark: string = 'Function';
  // set the value to select an item based on mapped value at initial rendering
  public value: string = 'Game3';
  public onChange(args: any): void {
    let value: Element = document.getElementById('value');
    let text: Element = document.getElementById('text');
    // update the text and value property values in property panel based on selected item in DropDownList
    value.innerHTML = this.listObj.value.toString();
    text.innerHTML = this.listObj.text;
  }
  ngAfterViewInit(e: any): void {
    // call the change event's function after initialized the component.
    setTimeout(() => {
      this.onChange(e);
    });
    setTimeout(() => {
      this.listObj.showPopup();
    }, 1000);
  }
}
