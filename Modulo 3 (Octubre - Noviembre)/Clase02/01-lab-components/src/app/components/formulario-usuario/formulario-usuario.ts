import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-usuario',
  imports: [FormsModule],
  templateUrl: './formulario-usuario.html',
  styleUrl: './formulario-usuario.css',
})
export class FormularioUsuario {
  usuario = { nombre: '', correo: ''}

  enviar(){
    console.log('Datos enviados:', this.usuario)
  }
}
