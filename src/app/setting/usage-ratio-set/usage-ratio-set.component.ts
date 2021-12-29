import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-usage-ratio-set',
  templateUrl: './usage-ratio-set.component.html',
  styleUrls: ['./usage-ratio-set.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UsageRatioSetComponent implements OnInit {
  public headerText: Object = [{ text: 'Energy' }, { text: 'Water' }];
  constructor() {}

  ngOnInit(): void {}
}
