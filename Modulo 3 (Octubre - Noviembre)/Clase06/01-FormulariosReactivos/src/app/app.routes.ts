import { Routes } from '@angular/router';
import { LoginComponent } from './components/login-component/login-component';
import { CursoListComponent } from './components/curso-list-component/curso-list-component';
import { FormularioSimpleComponent } from './components/formulario-simple-component/formulario-simple-component';
import { EjemploFormComponent } from './components/ejemplo-form-component/ejemplo-form-component';

export const routes: Routes = [
{path: 'ejemplo-form', component: EjemploFormComponent},
{path: 'formulario-simple', component: FormularioSimpleComponent},
{path: 'cursos','component': CursoListComponent},
{path: 'login', component: LoginComponent},
{path: '', redirectTo: 'login', pathMatch: 'full'},
{path:' ** ', redirectTo: 'login', pathMatch: 'full'}

];