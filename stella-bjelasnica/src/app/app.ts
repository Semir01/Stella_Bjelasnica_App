import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './pages/navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, CommonModule],
  template: `
    <app-navbar *ngIf="showNavBar"></app-navbar>
    <router-outlet (activate)="onActivate()"></router-outlet>
  `
})
export class App {
  showNavBar = true;

  onActivate() {
    // sakrij navbar samo na root/Home
    this.showNavBar = window.location.pathname !== '/';
  }
}
