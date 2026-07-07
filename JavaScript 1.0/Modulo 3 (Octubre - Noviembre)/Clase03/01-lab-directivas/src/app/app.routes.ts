import { Routes } from '@angular/router';
import { TableUser } from './components/table-user/table-user';
import { TableTechs } from './components/table-techs/table-techs';
import { TableCourses } from './components/table-courses/table-courses';

export const routes: Routes = [
    { path: 'usuarios', component: TableUser },
    { path: 'tecnologias', component: TableTechs },
    { path: 'cursos', component: TableCourses },
    { path: '', pathMatch: 'full', redirectTo: 'cursos' },
];
