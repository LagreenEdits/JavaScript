import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Login } from './components/login/login';
import { Servicios } from './components/servicios/servicios';
import { Home } from './components/home/home';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'servicios', component: Servicios },
    { path: 'dashboard', component: Dashboard },
    { path: 'home', component: Home }
    
];