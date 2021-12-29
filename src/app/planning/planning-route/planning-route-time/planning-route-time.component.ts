import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-planning-route-time',
  templateUrl: './planning-route-time.component.html',
  styleUrls: ['./planning-route-time.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PlanningRouteTimeComponent implements OnInit {
  public date: Object = new Date();
  constructor() {}

  ngOnInit(): void {}
  onLoad(args: any) {
    args.popup.element.setAttribute('width', '300px');
    args.popup.element.children[0].classList.add('allow-width');
  }
}
