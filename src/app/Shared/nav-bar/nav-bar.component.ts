import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  tabChange: string = 'Information';
  constructor(private route: Router) {}

  ngOnInit(): void {
    if (window.location.href.includes('info')) {
      this.tabChange = 'Information';
    } else if (window.location.href.includes('stat')) {
      this.tabChange = 'Statistics';
    } else if (window.location.href.includes('hist')) {
      this.tabChange = 'History';
    } 
  }
  tabMachine(tabName) {
    this.tabChange = tabName;
    // this.route.navigate(['/about']);
  }
}
