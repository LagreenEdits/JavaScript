import { Component, inject, signal } from '@angular/core';
import { PaisesService } from '../../services/paises-service';
import { Pais } from '../../models/pais-interface';

@Component({
  selector: 'app-pais-component',
  imports: [],
  standalone: true,
  templateUrl: './pais-component.html',
  styleUrl: './pais-component.css',
})

export class PaisComponent {
  private paisService = inject(PaisesService);
  paises = signal<Pais[]>([]);
  cargando = signal<boolean>(false);
  error = signal<string | null>(null);

  cobnstructor() {}

  cargarPaises() : void {
    this.paisService.obtenerPaises().subscribe({});
  }

}
