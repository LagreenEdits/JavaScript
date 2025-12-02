import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios-service';

@Component({
  selector: 'app-table-user',
  imports: [],
  templateUrl: './table-user.html',
  styleUrl: './table-user.css',
})
export class TableUser {

  usuarios : any[];

  //Inyeccion
  constructor(private usuariosService: UsuariosService) {
    this.usuarios = this.usuariosService.getUsuarios();
  }

}
