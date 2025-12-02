import { Component } from '@angular/core';
import { SaludoService } from '../../services/saludo-service';

@Component({
  selector: 'app-saludo',
  imports: [],
  templateUrl: './saludo.html',
  styleUrl: './saludo.css',
})
export class Saludo {

  mensaje: string;
  
  constructor(private saludoService: SaludoService) {
    this.mensaje = this.saludoService.getSaludo('Dev Senior');
  }

}
