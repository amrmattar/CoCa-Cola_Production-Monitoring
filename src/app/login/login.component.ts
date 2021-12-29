import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public focusIn(target: HTMLElement): void {
    let parent: HTMLElement = target.parentElement;
    if (parent.classList.contains('e-input-in-wrap')) {
      parent.parentElement.classList.add('e-input-focus');
    } else {
      parent.classList.add('e-input-focus');
    }
  }

  public focusOut(target: HTMLElement): void {
    let parent: HTMLElement = target.parentElement;
    if (parent.classList.contains('e-input-in-wrap')) {
      parent.parentElement.classList.remove('e-input-focus');
    } else {
      parent.classList.remove('e-input-focus');
    }
  }

  public onMouseDown(target: HTMLElement): void {
    target.classList.add('e-input-btn-ripple');
  }

  public onMouseUp(target: HTMLElement): void {
    let ele: HTMLElement = target;
    setTimeout(() => {
      ele.classList.remove('e-input-btn-ripple');
    }, 500);
  }
  constructor(private router: Router) {
    if (sessionStorage.getItem('userId') != null) {
      this.router.navigate(['dashboard']);
    }
  }

  ngOnInit(): void {
    this.onLoginClick();
  }

  onLoginClick() {
    sessionStorage.setItem('userId', '1');
    this.router.navigate(['#/dashboard']);
  }
}
