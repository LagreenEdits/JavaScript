import { Component } from '@angular/core';

@Component({
  selector: 'app-table-areas',
  imports: [],
  templateUrl: './table-areas.html',
  styleUrl: './table-areas.css',
})
export class TableAreas {

  areas = [
    {id: 1,
      nombre: 'Desarrollo de Software',
      descripcion: 'Área encargada de la creación y mantenimiento de aplicaciones y sistemas informáticos.'
    },
    {id: 2,
      nombre: 'Recursos Humanos',
      descripcion: 'Área encargada de la gestión del personal, incluyendo contratación, capacitación y bienestar.' 
    },
    {id: 3,
      nombre: 'Marketing',
      descripcion: 'Área responsable de la promoción y publicidad de los productos o servicios de la empresa.'
    },
    {id: 4,
      nombre: 'Ventas',
      descripcion: 'Área encargada de la comercialización y venta de los productos o servicios a los clientes.'
    }
  ];

}
