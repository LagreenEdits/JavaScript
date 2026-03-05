import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ServiciosTechService } from '../../services/servicios-tech-service';
import { Servicio } from '../../services/servicios-tech-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  servicioForm: FormGroup;
  loading: boolean = false;
  error: string = '';
  mensajeExito: string = '';
  servicios: Servicio[] = [];          // ← lista de servicios
  loadingEliminar: string = '';        // ← ID del servicio que se está eliminando

  constructor(
    private fb: FormBuilder,
    private serviciosTechService: ServiciosTechService
  ) {
    this.servicioForm = this.fb.group({
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      precioReferencia: [0, [Validators.required, Validators.min(0)]],
      duracionEstimada: ['', [Validators.required]],
      estado: ['ACTIVO', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.cargarServicios();
  }

  cargarServicios(): void {
    this.serviciosTechService.getServicios().subscribe({
      next: (data) => this.servicios = data,
      error: (err) => console.error('Error cargando servicios', err)
    });
  }

  onSubmit(): void {
    if (this.servicioForm.invalid) {
      this.servicioForm.markAllAsTouched();
      this.error = 'Por favor, completa todos los campos correctamente.';
      return;
    }

    this.loading = true;
    this.error = '';
    this.mensajeExito = '';

    const nuevoServicio: Servicio = this.servicioForm.value;

    this.serviciosTechService.createServicio(nuevoServicio).subscribe({
      next: (servicio) => {
        this.loading = false;
        this.mensajeExito = `Servicio "${servicio.nombre}" creado exitosamente.`;
        this.servicioForm.reset({ estado: 'ACTIVO' });
        this.cargarServicios();         // ← refresca la lista
      },
      error: (err) => {
        this.loading = false;
        this.error = 'Error al crear el servicio. Intenta de nuevo.';
        console.error(err);
      }
    });
  }

  eliminarServicio(id: string): void {
    if (!confirm('¿Estás seguro de eliminar este servicio?')) return;

    this.loadingEliminar = id;
    this.error = '';
    this.mensajeExito = '';

    this.serviciosTechService.deleteServicio(id).subscribe({
      next: () => {
        this.loadingEliminar = '';
        this.mensajeExito = 'Servicio eliminado correctamente.';
        this.cargarServicios();         // ← refresca la lista
      },
      error: (err) => {
        this.loadingEliminar = '';
        this.error = 'Error al eliminar el servicio.';
        console.error(err);
      }
    });
  }
}