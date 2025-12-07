import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Apartments} from './pages/apartments/apartments';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'apartments', component: Apartments}
];
