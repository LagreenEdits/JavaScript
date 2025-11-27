import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Table } from './components/table/table';
import { TableAreas } from './components/table-areas/table-areas';
import { FormularioUsuario } from './components/formulario-usuario/formulario-usuario';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Table, TableAreas, FormularioUsuario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('01-lab-components');
}
