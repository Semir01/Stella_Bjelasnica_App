import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Apartments} from './pages/apartments/apartments';
import {Info} from './pages/info/info';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'apartments', component: Apartments},
    {path: 'info', component: Info}
];
