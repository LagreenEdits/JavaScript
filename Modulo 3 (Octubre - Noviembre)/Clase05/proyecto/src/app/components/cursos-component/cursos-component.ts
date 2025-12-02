import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CursoService, Curso } from '../../services/curso-service';

@Component({
  selector: 'app-cursos-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './cursos-component.html',
  styleUrl: './cursos-component.css',
})
export class CursosComponent {
  cursos: Curso[] = [];

  constructor(private cursoService: CursoService) {
    this.cursos = this.cursoService.getCursos();
  }
}
