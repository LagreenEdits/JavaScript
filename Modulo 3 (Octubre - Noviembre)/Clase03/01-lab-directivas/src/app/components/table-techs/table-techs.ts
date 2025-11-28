import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-techs',
  imports: [CommonModule],
  templateUrl: './table-techs.html',
  styleUrl: './table-techs.css',
})
export class TableTechs {

  tecnologias = [
    { nombre: 'Angular', tipo: 'Frontend' },
    { nombre: 'Spring Boot', tipo: 'Backend' },
    { nombre: 'PostgreSQL', tipo: 'Base de Datos' },
    { nombre: 'React', tipo: 'Frontend' },
    { nombre: 'Node.js', tipo: 'Backend' },
    { nombre: 'Django', tipo: 'Backend' },
    { nombre: 'JSF', tipo: 'Backend' },
    { nombre: 'SQLite', tipo: 'Base de Datos' },
    { nombre: 'Laravel', tipo: 'Backend' },
    { nombre: 'MongoDB', tipo: 'Base de Datos' },
    { nombre: 'Vue.js', tipo: 'Frontend' },
    { nombre: 'Bootstrap', tipo: 'Frontend' }
  ];

}
