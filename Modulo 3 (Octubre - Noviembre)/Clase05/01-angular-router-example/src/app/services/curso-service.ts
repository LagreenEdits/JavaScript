import { Injectable } from '@angular/core';

export interface Curso {
  id: number;
  titulo: string;
  descripcion: string;
  instructor: string;
  duracion: string;
  nivel: string;
  precio: number;
  requisitos: string[];
  contenido: string[];
  estudiantes: number;
}

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private cursos: Curso[] = [
    {
      id: 1,
      titulo: 'Angular desde Cero',
      descripcion: 'Aprende a crear aplicaciones web modernas con Angular 20. Desde los fundamentos hasta conceptos avanzados, incluyendo componentes, servicios, routing y gestión de estado.',
      instructor: 'María González',
      duracion: '40 horas',
      nivel: 'Principiante',
      precio: 49.99,
      estudiantes: 1250,
      requisitos: [
        'Conocimientos básicos de HTML y CSS',
        'JavaScript ES6+',
        'Manejo de Git (recomendado)'
      ],
      contenido: [
        'Introducción a Angular y configuración del entorno',
        'Componentes y templates',
        'Data binding y directivas',
        'Servicios e inyección de dependencias',
        'Routing y navegación',
        'Formularios reactivos y validación',
        'HTTP Client y consumo de APIs',
        'Proyecto final: Aplicación completa'
      ]
    },
    {
      id: 2,
      titulo: 'TypeScript Avanzado',
      descripcion: 'Domina TypeScript con tipos avanzados, genéricos, decoradores y patrones de diseño modernos. Aprende a escribir código más seguro y mantenible.',
      instructor: 'Carlos Ruiz',
      duracion: '30 horas',
      nivel: 'Intermedio',
      precio: 59.99,
      estudiantes: 890,
      requisitos: [
        'JavaScript básico e intermedio',
        'Conocimientos de programación orientada a objetos',
        'TypeScript básico'
      ],
      contenido: [
        'Tipos avanzados y utilitarios',
        'Genéricos y constraints',
        'Decoradores y metadatos',
        'Patrones de diseño en TypeScript',
        'Módulos y namespaces',
        'Testing con TypeScript',
        'Best practices y optimización'
      ]
    },
    {
      id: 3,
      titulo: 'Node.js y Express',
      descripcion: 'Crea APIs REST profesionales con Node.js, Express y MongoDB. Incluye autenticación, seguridad y mejores prácticas de desarrollo backend.',
      instructor: 'Ana Martínez',
      duracion: '35 horas',
      nivel: 'Intermedio',
      precio: 54.99,
      estudiantes: 1450,
      requisitos: [
        'JavaScript ES6+',
        'Conceptos básicos de HTTP',
        'Conocimientos de bases de datos'
      ],
      contenido: [
        'Fundamentos de Node.js',
        'Express framework y middleware',
        'Diseño de APIs RESTful',
        'Autenticación JWT',
        'Integración con MongoDB',
        'Validación y manejo de errores',
        'Deploy y producción'
      ]
    },
    {
      id: 4,
      titulo: 'Bases de Datos MongoDB',
      descripcion: 'Aprende a diseñar y gestionar bases de datos NoSQL con MongoDB. Incluye agregaciones, indexación y optimización de consultas.',
      instructor: 'Luis Fernández',
      duracion: '25 horas',
      nivel: 'Principiante',
      precio: 44.99,
      estudiantes: 780,
      requisitos: [
        'Conceptos básicos de bases de datos',
        'Conocimientos básicos de JSON'
      ],
      contenido: [
        'Introducción a MongoDB y NoSQL',
        'CRUD operations',
        'Modelado de datos',
        'Agregaciones y pipelines',
        'Indexación y performance',
        'Replicación y sharding',
        'Mongoose ODM'
      ]
    },
    {
      id: 5,
      titulo: 'React desde Cero',
      descripcion: 'Construye aplicaciones web interactivas con React, Hooks y Context API. Aprende componentes funcionales, gestión de estado y proyecto final incluido.',
      instructor: 'Patricia López',
      duracion: '45 horas',
      nivel: 'Principiante',
      precio: 49.99,
      estudiantes: 2100,
      requisitos: [
        'HTML y CSS',
        'JavaScript ES6+',
        'Conceptos básicos de programación'
      ],
      contenido: [
        'Introducción a React y JSX',
        'Componentes y props',
        'Estado y ciclo de vida',
        'Hooks (useState, useEffect, etc.)',
        'Context API',
        'React Router',
        'Proyecto final completo'
      ]
    },
    {
      id: 6,
      titulo: 'Python para Data Science',
      descripcion: 'Análisis de datos con Python, Pandas, NumPy y visualización con Matplotlib. Incluye casos prácticos reales y proyectos de análisis de datos.',
      instructor: 'Roberto Sánchez',
      duracion: '50 horas',
      nivel: 'Intermedio',
      precio: 64.99,
      estudiantes: 1680,
      requisitos: [
        'Python básico',
        'Conocimientos de matemáticas básicas',
        'Estadística descriptiva (recomendado)'
      ],
      contenido: [
        'Introducción a Data Science',
        'NumPy y arrays',
        'Pandas y DataFrames',
        'Limpieza y transformación de datos',
        'Visualización con Matplotlib y Seaborn',
        'Estadística aplicada',
        'Proyectos de análisis reales'
      ]
    }
  ];

  getCursos(): Curso[] {
    return this.cursos;
  }

  getCursoById(id: number): Curso | undefined {
    return this.cursos.find(c => c.id === id);
  }
}
