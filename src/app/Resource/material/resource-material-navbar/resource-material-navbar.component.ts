import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resource-material-navbar',
  templateUrl: './resource-material-navbar.component.html',
  styleUrls: ['./resource-material-navbar.component.scss'],
})
export class ResourceMaterialNavbarComponent implements OnInit {
  tabChange: string = 'Time Line';
  constructor(private route: Router) {}

  ngOnInit(): void {
    if (window.location.href.includes('timeline')) {
      this.tabChange = 'Time Line';
    } else if (window.location.href.includes('Product&Scrap')) {
      this.tabChange = 'Product & Scrap';
    }
  }
  tabMachine(tabName) {
    this.tabChange = tabName;
  }
}
