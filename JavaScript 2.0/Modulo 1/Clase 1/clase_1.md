# Clase 1: El Despegue — Entorno de Desarrollo y el Stack MEAN

**Curso:** JavaScript MEAN Mastery — Módulo 1 Unidad 1
**Formador:** Steven Zuluaga Cortés
**Duración:** 3 horas

---

## 1. Índice de subtemas

1. Qué es el desarrollo web y el concepto de aplicación Full Stack
2. El Stack MEAN: qué es y rol de cada componente
3. Instalación y verificación de Node.js
4. Instalación y configuración de VS Code
5. Instalación y configuración de Git
6. Instalación de Angular CLI y creación de un proyecto base
7. Configuración de MongoDB Atlas (base de datos en la nube)
8. Estructura de un proyecto generado por Angular CLI

---

## 2. Explicación detallada por subtema

### 2.1 Desarrollo web y Full Stack
Una aplicación web moderna se divide en dos grandes partes que se comunican entre sí:
- **Frontend:** lo que el usuario ve y con lo que interactúa en el navegador (interfaz, botones, formularios).
- **Backend:** la lógica que corre en un servidor, procesa datos, aplica reglas de negocio y habla con la base de datos.

**Full Stack** significa que una misma persona (o en este caso, un mismo conjunto de tecnologías) puede trabajar en ambas partes. El Stack MEAN es "full stack" porque usa JavaScript tanto en frontend como en backend — no necesitas aprender dos lenguajes distintos.

### 2.2 El Stack MEAN

| Componente | Tecnología | Rol en la aplicación |
|---|---|---|
| **M** | MongoDB | Base de datos NoSQL — guarda los datos en documentos tipo JSON, no en tablas rígidas |
| **E** | Express | Framework de backend sobre Node.js — define las rutas y reglas del servidor |
| **A** | Angular | Framework de frontend — construye la interfaz que ve el usuario |
| **N** | Node.js | Entorno de ejecución — permite correr JavaScript fuera del navegador, en el servidor |

**Por qué importa el orden de la sigla:** Node.js es la base (el motor) sobre la que corre Express; Angular es independiente y corre en el navegador del usuario; MongoDB es el almacenamiento persistente al que Express se conecta.

### 2.3 Node.js — instalación y verificación
Node.js es lo que permite ejecutar JavaScript **fuera del navegador**, directamente en tu computador o en un servidor. Sin Node, JavaScript solo podría vivir dentro de una página web.

Se instala descargando la versión **LTS** (Long Term Support) desde nodejs.org — se recomienda LTS sobre la versión "Current" porque es la más estable para producción y para aprender, con menos riesgo de cambios inesperados.

Verificación en terminal:
```bash
node -v
npm -v
```
`npm` (Node Package Manager) viene incluido con Node y es el gestor de paquetes/librerías del ecosistema JavaScript — se usa constantemente en los próximos módulos.

### 2.4 VS Code
Es el editor de código donde escribirás todo el curso. No es obligatorio, pero es el estándar de la industria por su ligereza y su ecosistema de extensiones.

Extensiones instaladas en esta clase:
- **Live Server:** levanta un servidor local que recarga automáticamente la página cada vez que guardas un cambio en HTML/CSS/JS — ahorra tener que refrescar el navegador manualmente.
- **Prettier:** formatea el código automáticamente (indentación, comillas, espacios) según reglas estándar, para que el código se vea consistente sin esfuerzo manual.

### 2.5 Git
Git es el sistema de control de versiones: guarda un historial de cambios de tu código para poder retroceder, comparar y trabajar en equipo sin sobrescribir el trabajo de otros.

Configuración inicial obligatoria (una sola vez por computador):
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu.email@ejemplo.com"
```
Esto no crea ningún proyecto todavía — solo le dice a Git **quién eres**, para que cada cambio (commit) quede firmado con tu nombre. Es indispensable antes de trabajar en equipo (como en CIPA 2), porque así se sabe quién hizo cada cambio.

### 2.6 Angular CLI
Angular CLI es una herramienta de línea de comandos que genera automáticamente toda la estructura base de un proyecto Angular (carpetas, configuración, archivos iniciales), para no tener que armar todo eso a mano.

Instalación **global** (disponible en cualquier carpeta del sistema, no solo en un proyecto):
```bash
npm install -g @angular/cli
```
Creación de un proyecto de prueba:
```bash
mkdir prueba-cli
cd prueba-cli
ng new mi-app --minimal
```
El flag `--minimal` genera una versión reducida del proyecto (sin configuración de testing, por ejemplo), ideal para una primera exploración sin abrumarse con archivos.

### 2.7 MongoDB Atlas
En vez de instalar MongoDB localmente (lo cual puede traer problemas de compatibilidad según el sistema operativo), esta clase usa **MongoDB Atlas**: una versión de MongoDB alojada en la nube, con una capa gratuita (free tier) suficiente para aprender.

Pasos cubiertos:
1. Crear cuenta gratuita en MongoDB Atlas
2. Crear un **clúster** (la unidad donde vive tu base de datos en la nube)
3. Obtener la **cadena de conexión** (connection string) — una URL especial con credenciales que tu backend (Express) usará más adelante para conectarse a esta base de datos

Esta cadena de conexión es un dato **sensible** (contiene usuario/contraseña) que se usará en el proyecto integrador, y normalmente no se sube directamente al código en repositorios públicos.

---

## 3. Conceptos clave (glosario)

| Término | Definición |
|---|---|
| **Stack** | Conjunto de tecnologías que se usan juntas para construir una aplicación completa |
| **Frontend** | Parte de la aplicación que corre en el navegador del usuario |
| **Backend** | Parte de la aplicación que corre en un servidor, maneja lógica y datos |
| **Full Stack** | Que abarca tanto frontend como backend |
| **Runtime / entorno de ejecución** | Programa que permite ejecutar código (en este caso, JS fuera del navegador) |
| **NoSQL** | Tipo de base de datos que no usa tablas rígidas, sino documentos flexibles (JSON) |
| **CLI (Command Line Interface)** | Herramienta que se usa escribiendo comandos en la terminal, en vez de clics en una interfaz gráfica |
| **Control de versiones** | Sistema que registra el historial de cambios de un proyecto |
| **Clúster (MongoDB)** | Conjunto de servidores donde se aloja tu base de datos en la nube |
| **Connection string** | URL con credenciales que permite a una aplicación conectarse a una base de datos remota |

---

## 4. ¿Para qué sirve cada concepto?

- **Node.js** → te permite correr JavaScript como backend, sin necesidad de otro lenguaje como Python o PHP.
- **VS Code + extensiones** → acelera tu flujo de trabajo diario (ver cambios en vivo, código bien formateado).
- **Git** → indispensable para trabajar en equipo (como con tu CIPA) sin perder ni sobrescribir el trabajo de otros.
- **Angular CLI** → evita configurar manualmente un proyecto Angular desde cero, algo que sería lento y propenso a errores.
- **MongoDB Atlas** → te da una base de datos real, accesible desde cualquier lugar, sin preocuparte por instalarla ni mantenerla en tu propio computador.

---

## 5. Ejemplos abstractos

```bash
git config --global user.name "[tu_nombre]"
git config --global user.email "[tu_correo]"
```
- `git config --global user.name`, `user.email` → comandos y nombres de configuración **fijos**, no se pueden cambiar ni traducir
- `[tu_nombre]`, `[tu_correo]` → valores que tú defines, únicos por persona

```bash
mkdir [nombre_carpeta]
cd [nombre_carpeta]
ng new [nombre_app] --minimal
```
- `mkdir`, `cd`, `ng new`, `--minimal` → comandos y flags fijos de terminal/Angular CLI
- `[nombre_carpeta]`, `[nombre_app]` → nombres elegidos por el estudiante, se repiten/reutilizan según el proyecto

```bash
node -v
npm -v
```
- Estos comandos son **fijos** — no llevan ningún valor reemplazable, siempre se escriben exactamente así para consultar la versión instalada

---

## 6. Excepciones y casos especiales

- **Node LTS vs Current:** si accidentalmente instalas la versión "Current" en vez de "LTS", el curso puede funcionar igual, pero hay mayor riesgo de encontrarte con cambios recientes que rompan compatibilidad con paquetes más antiguos usados en clase.
- **`npm install -g`:** el flag `-g` instala el paquete de forma **global** (disponible en cualquier carpeta). Si se te olvida el `-g`, Angular CLI solo quedaría instalado dentro de la carpeta actual y el comando `ng` no funcionaría desde otro lugar.
- **Git config sin `--global`:** si configuras `user.name`/`user.email` sin `--global`, la configuración solo aplica al proyecto actual, no a todos tus proyectos futuros — es una trampa común que hace que "en otro proyecto no aparezca mi nombre".
- **MongoDB Atlas free tier:** el clúster gratuito tiene límites de almacenamiento y rendimiento — suficiente para aprender, pero no pensado para producción real.
- **Connection string expuesta:** compartir la cadena de conexión con contraseña en un repositorio público (como GitHub) es un riesgo de seguridad real, no solo una formalidad del curso.

---

## 7. Metáfora o ejemplo visual

- **Stack MEAN** = una fábrica de comida rápida: **Angular** es el mostrador donde el cliente hace su pedido (interfaz); **Express** es la cocina que recibe el pedido y decide qué hacer con él (lógica de servidor); **Node.js** es la electricidad que hace que toda la cocina funcione (motor de ejecución); **MongoDB** es la despensa donde están guardados los ingredientes (datos).

- **Git** = el "historial de cambios" de un documento de Word con control de versiones, pero mucho más potente: puedes volver a cualquier punto anterior, o ver exactamente qué línea cambió y quién la cambió.

- **Angular CLI** = un asistente de mudanza que arma todos los muebles de una casa nueva por ti (estructura de carpetas y archivos), en vez de que tú tengas que armar cada mueble desde cero.

- **MongoDB Atlas** = alquilar una bodega en un depósito profesional (la nube) en vez de guardar tus cosas en el clóset de tu propia casa (instalación local) — no tienes que preocuparte por la seguridad ni el mantenimiento del espacio.

---

## 8. Errores típicos de un junior en esta clase

- Instalar Node.js pero olvidar reiniciar la terminal antes de verificar con `node -v` (el sistema aún no reconoce el comando)
- Instalar Angular CLI sin el flag `-g` y no entender por qué `ng` "no existe" en otra carpeta
- Olvidar ejecutar la configuración de Git (`user.name`/`user.email`) antes de hacer el primer commit en clases futuras
- Perder o no guardar bien la cadena de conexión de MongoDB Atlas, y tener que regenerarla después
- Confundir la carpeta de prueba (`prueba-cli`) con la carpeta del proyecto real del curso, mezclando archivos

---

## 9. Preguntas de autoevaluación

1. ¿Puedo explicar qué significa cada letra del Stack MEAN y qué rol cumple?
2. ¿Puedo explicar la diferencia entre frontend y backend con mis propias palabras?
3. ¿Sé para qué sirve Node.js y por qué es necesario antes de instalar Angular CLI?
4. ¿Puedo ejecutar y explicar qué hacen los comandos `node -v` y `npm -v`?
5. ¿Entiendo por qué se configura `git config --global` antes de usar Git en un proyecto?
6. ¿Sé qué hace el comando `ng new [nombre] --minimal` y qué genera?
7. ¿Puedo explicar por qué en este curso se usa MongoDB Atlas en vez de instalar MongoDB localmente?
8. ¿Entiendo qué es una cadena de conexión (connection string) y por qué debo protegerla?
9. ¿Sé qué extensiones de VS Code se instalaron en esta clase y para qué sirve cada una?
10. ¿Puedo explicar con una metáfora propia cómo se conectan Angular, Express, Node y MongoDB?

---

## 10. Checklist final de dominio

- [ ] Entiendo qué es el Stack MEAN y el rol de cada componente
- [ ] Instalé y verifiqué Node.js correctamente (`node -v`, `npm -v`)
- [ ] Instalé VS Code con las extensiones Live Server y Prettier
- [ ] Instalé Git y configuré mi nombre y correo con `--global`
- [ ] Instalé Angular CLI de forma global y creé un proyecto de prueba con `ng new`
- [ ] Creé una cuenta en MongoDB Atlas, un clúster, y obtuve mi cadena de conexión
- [ ] Puedo explicar la diferencia entre frontend y backend sin dudar
- [ ] Entiendo por qué se usa la nube (Atlas) en vez de una instalación local de MongoDB
- [ ] Sé identificar los archivos generados por Angular CLI en la carpeta del proyecto
- [ ] Me siento en confianza de decir que "vi" esta clase completa

---

**Formador:** Steven Zuluaga Cortés
**Contacto:** Academy@devseniorcode.com | www.devseniorcode.com | @devseniorcode
