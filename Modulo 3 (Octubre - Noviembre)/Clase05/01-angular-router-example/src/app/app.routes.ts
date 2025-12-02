import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { CursosComponent } from './components/cursos-component/cursos-component';
import { CursosDetalleComponent } from './components/cursos-detalle-component/cursos-detalle-component';
import { AcercaDeComponent } from './components/acerca-de-component/acerca-de-component';
import { NotFoundComponent } from './components/not-found-component/not-found-component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // inicio
  { path: 'home', component: HomeComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:id', component: CursosDetalleComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: '**', component: NotFoundComponent } // 404

];
