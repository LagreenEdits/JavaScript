import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Servicio {
  id: string;
  nombre: string;
  descripcion: string;
  categoria: string;
  precioReferencia: number;
  duracionEstimada: string;
  estado: string; // por ejemplo: "ACTIVO" | "INACTIVO"
}

@Injectable({
  providedIn: 'root',
})
export class ServiciosTechService {
  private baseUrl = 'http://localhost:3000/servicios';

  constructor(private http: HttpClient) {}

  // Obtener todos los servicios
  getServicios(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(this.baseUrl);
  }

  // Obtener un servicio por id
  getServicio(id: string): Observable<Servicio> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Servicio>(url);
  }

  // Crear un nuevo servicio
  createServicio(servicio: Servicio): Observable<Servicio> {
    return this.http.post<Servicio>(this.baseUrl, servicio);
  }

  // Actualizar un servicio (PUT)
  updateServicio(id: string, servicio: Partial<Servicio>): Observable<Servicio> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Servicio>(url, servicio);
  }

  // Eliminar un servicio
  deleteServicio(id: string): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}