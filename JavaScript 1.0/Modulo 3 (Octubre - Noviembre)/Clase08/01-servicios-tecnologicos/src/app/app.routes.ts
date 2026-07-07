import { Routes } from '@angular/router';
import { Dahsboard } from './components/dahsboard/dahsboard';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Servicios } from './components/servicios/servicios';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'servicios', component: Servicios },
    { path: 'dashboard', component: Dahsboard },
    { path: 'home', component: Home }
];
