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
  `
})
export class App {
  showNavBar = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = (event as NavigationEnd).urlAfterRedirects;

        const isHome =
          url === '/' ||
          url === '/home' ||
          url === '/Stella_Bjelasnica_App/' ||
          url === '/Stella_Bjelasnica_App';

        this.showNavBar = !isHome;
      });
  }
}
