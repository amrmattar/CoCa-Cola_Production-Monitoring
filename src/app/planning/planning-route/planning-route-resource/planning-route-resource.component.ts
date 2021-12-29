import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-route-resource',
  templateUrl: './planning-route-resource.component.html',
  styleUrls: ['./planning-route-resource.component.scss'],
})
export class PlanningRouteResourceComponent implements OnInit {
  constructor() {}
  // defined the array of data
  resources: number[] = [1, 2];
  public data: string[] = [
    'Badminton',
    'Basketball',
    'Cricket',
    'Golf',
    'Hockey',
    'Rugby',
  ];
  // set placeholder text to DropDownList input element
  public placeholder: string = 'Resources / Materials';
  ngOnInit(): void {}
  addMatrial(){
    this.resources.push(1)
  }
}
