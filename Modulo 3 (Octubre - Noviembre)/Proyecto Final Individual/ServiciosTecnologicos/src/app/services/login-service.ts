import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Usuario {
  id: string;
  email: string;
  password: string;
  nombre?: string;
  rol?: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  // Validar credenciales de usuario
  validarCredenciales(email: string, password: string): Observable<Usuario | null> {
    return this.http.get<Usuario[]>(this.baseUrl).pipe(
      map((usuarios) => {
        const usuarioEncontrado = usuarios.find(
          (usuario) => usuario.email === email && usuario.password === password
        );
        return usuarioEncontrado || null;
      })
    );
  }

  // Obtener todos los usuarios
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl);
  }

  // Obtener un usuario por id
  getUsuario(id: string): Observable<Usuario> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Usuario>(url);
  }
}