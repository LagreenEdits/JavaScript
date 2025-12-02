import { Component } from '@angular/core';
import { CursoService, Curso } from '../../services/curso-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cursos-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './cursos-component.html',
  styleUrl: './cursos-component.css',
})
export class CursosComponent {

  cursos: Curso[];

  constructor(public cursoService: CursoService) {
    this.cursos = this.cursoService.getCursos();
  }

}
