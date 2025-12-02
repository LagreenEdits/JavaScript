import { Routes } from '@angular/router';

import { AcercaDeComponent } from './components/acerca-de-component/acerca-de-component';
import { CursosComponent } from './components/cursos-component/cursos-component';
import { CursosDetalleComponent } from './components/cursos-detalle-component/cursos-detalle-component';
import { HomeComponent } from './components/home-component/home-component';
import { NotFoundComponent } from './components/not-found-component/not-found-component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'acerca-de', component: AcercaDeComponent},
    {path: 'cursos', component: CursosComponent},
    {path: 'cursos/:id', component: CursosDetalleComponent},
    {path: '**', component: NotFoundComponent}
];
