# ServiciosTecnologicos

Aplicación web desarrollada con **Angular 21** y **Bootstrap** para gestionar y visualizar servicios tecnológicos. Permite listar, crear y eliminar servicios consumiendo una API REST simulada con `json-server`.

---

## 🚀 Tecnologías utilizadas

- [Angular CLI](https://github.com/angular/angular-cli) v21.0.0
- Bootstrap 5
- JSON Server (API REST simulada)
- TypeScript

---

## Estructura del proyecto

```
SERVICIOS TECNOLOGICOS/
├── public/
│   └── favicon.ico
├── src/
│   └── app/
│       ├── components/
│       │   ├── dashboard/       # Formulario para crear y eliminar servicios
│       │   ├── home/            # Página principal
│       │   ├── login/           # Inicio de sesión
│       │   └── servicios/       # Listado de servicios disponibles
│       ├── services/
│       │   ├── servicios-tech-service.ts   # CRUD de servicios
│       │   └── login-service.ts            # Autenticación
│       ├── app.config.ts
│       ├── app.css
│       ├── app.html
│       ├── app.routes.ts
│       ├── app.spec.ts
│       └── app.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── db.json                  # Base de datos JSON Server
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
└── README.md
```

---

## Rutas de la aplicación

| Ruta         | Componente | Descripción                |
| ------------ | ---------- | -------------------------- |
| `/`          | Home       | Redirecciona a `/home`     |
| `/home`      | Home       | Página de inicio           |
| `/servicios` | Servicios  | Listado de servicios       |
| `/dashboard` | Dashboard  | Crear y eliminar servicios |
| `/login`     | Login      | Inicio de sesión           |

---

## Instalación y configuración

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd ServiciosTecnologicos
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar la API REST (json-server)

```bash
npx json-server --watch db.json --port 3000
```

La API quedará disponible en `http://localhost:3000`

### 4. Iniciar el servidor de desarrollo

```bash
ng serve
```

Abre tu navegador en `http://localhost:4200/`. La aplicación se recargará automáticamente al modificar los archivos fuente.

> ⚠️ **Importante:** Asegúrate de tener corriendo `json-server` antes de levantar la app para que los servicios carguen correctamente.

---

## Generación de componentes y servicios

Los componentes y servicios fueron generados con Angular CLI:

```bash
# Componentes
ng g c components/dashboard
ng g c components/home
ng g c components/login
ng g c components/servicios

# Servicios
ng g s services/ServiciosTechService
ng g s services/LoginService
```

---

## Build para producción

```bash
ng build
```

Los artefactos compilados se guardan en el directorio `dist/`. El build de producción optimiza la aplicación para rendimiento y velocidad.

## Recursos adicionales

- [Documentación Angular CLI](https://angular.dev/tools/cli)
- [Bootstrap 5](https://getbootstrap.com/)
- [JSON Server](https://github.com/typicode/json-server)
