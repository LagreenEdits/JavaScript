import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {

  usuarios = [
    {id: 1, nombre: 'Juan Perez', correo: 'juan.perez@example.com'},          
    {id: 2, nombre: 'Maria Gomez', correo: 'maria.gomez@example.com'},
    {id: 3, nombre: 'Carlos Sanchez', correo: 'carlos.sanchez@example.com'},
    {id: 4, nombre: 'Ana Martinez', correo: 'ana.martinez@example.com'}
  ];
}
