import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CursoService, Curso } from '../../services/curso-service';

@Component({
  selector: 'app-cursos-detalle-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './cursos-detalle-component.html',
  styleUrl: './cursos-detalle-component.css',
})
export class CursosDetalleComponent implements OnInit {
  cursoId: string | null = null;
  curso: Curso | undefined;

  constructor(
    private route: ActivatedRoute,
    private cursoService: CursoService
  ) {}

  ngOnInit(): void {
    this.cursoId = this.route.snapshot.paramMap.get('id');
    if (this.cursoId) {
      this.curso = this.cursoService.getCursoById(parseInt(this.cursoId));
    }
  }
}
