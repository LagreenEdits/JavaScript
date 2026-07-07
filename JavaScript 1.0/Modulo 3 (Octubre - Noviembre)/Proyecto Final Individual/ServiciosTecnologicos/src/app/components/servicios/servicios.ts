import { Component, OnInit } from '@angular/core';
import { ServiciosTechService } from '../../services/servicios-tech-service';
import { Servicio } from '../../services/servicios-tech-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  imports: [CommonModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios implements OnInit {
  servicios: Servicio[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(private serviciosTechService: ServiciosTechService) {}

  ngOnInit(): void {
    this.obtenerServicios();
  }

  obtenerServicios(): void {
    this.loading = true;
    this.serviciosTechService.getServicios().subscribe({
      next: (data) => {
        this.servicios = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar los servicios';
        console.error(err);
        this.loading = false;
      }
    });
  }
}