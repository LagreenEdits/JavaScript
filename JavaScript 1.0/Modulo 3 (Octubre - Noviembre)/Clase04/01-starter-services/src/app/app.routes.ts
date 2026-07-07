import { Routes } from '@angular/router';
import { TableUser } from './components/table-user/table-user';
import { Saludo } from './components/saludo/saludo';
import { TableTechs } from './components/table-techs/table-techs';

export const routes: Routes = [
    { path: 'usuarios', component: TableUser },
    { path: 'saludo', component: Saludo },
    { path: 'tecnologias', component: TableTechs },
    { path: '', redirectTo: '/tecnologias', pathMatch: 'full' }
];
