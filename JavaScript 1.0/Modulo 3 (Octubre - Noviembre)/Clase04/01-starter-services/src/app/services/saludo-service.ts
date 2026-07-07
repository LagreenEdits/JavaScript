import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaludoService {

  constructor() { }

  getSaludo(nombre : string): string {
    return `¡Hola, ${nombre}! Bienvenido a nuestro sitio web.`;
  }
  
}
