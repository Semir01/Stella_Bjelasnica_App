import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { Navbar } from './pages/navbar/navbar';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, CommonModule],
  template: `
    <app-navbar *ngIf="showNavBar"></app-navbar>
    <router-outlet></router-outlet>
    <router-outlet></router-outlet>
  `
})
export class App {
  showNavBar = true;
  onActivate() {
    const path = window.location.pathname;

    // GitHub Pages root
    const isHome =
      path === '/' ||
      path === '/Stella_Bjelasnica_App/' ||
      path === '/Stella_Bjelasnica_App';

    this.showNavBar = !isHome;
  }

}
