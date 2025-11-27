import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-ini',
  imports: [CommonModule],
  templateUrl: './component-ini.html',
  styleUrl: './component-ini.css',
})
export class ComponentIni {
  public title="01-Starter";

  public mensaje="Bienvenido a mi primera app de Angular";

  public tecnologias: string[] = ["HTML","CSS","JavaScript","TypeScript","Angular","NodeJS","ExpressJS","MongoDB"];

  public tecnologias2 = [
    { nombre: 'Angular', version: '15' }, 
    { nombre: 'NodeJS', version: '18' }, 
    { nombre: 'MongoDB', version: '6' } 
    ];






}
