import { Component } from '@angular/core';
import { TechServices } from '../../services/tech-services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-techs',
  imports: [CommonModule],
  templateUrl: './table-techs.html',
  styleUrl: './table-techs.css',
})
export class TableTechs {

  tecnologias: any[];

  constructor(private techServices: TechServices) {
    this.tecnologias = this.techServices.obtenerTecnologias();
  }
}
