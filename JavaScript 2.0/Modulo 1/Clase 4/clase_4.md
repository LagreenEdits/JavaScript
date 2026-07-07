# 📘 Clase 4 — Introducción a HTML y CSS: Creación de Interfaces Básicas
**Curso:** JavaScript MEAN Mastery — Módulo M1, Unidad 1
**Duración simulada:** 3 horas
**Nivel:** Junior / principiante absoluto
**Formador de referencia:** Steven Zuluaga Cortés — DevSeniorCode

> Este documento está diseñado para reemplazar al 100% haber asistido a la clase de 3 horas. Cubre teoría, "por qué funciona así", ejemplos abstractos, excepciones, metáforas y autoevaluación.

---

## 1. Índice de subtemas cubiertos

1. ¿Qué es HTML y qué es CSS? Roles separados
2. Anatomía de un tag HTML (elemento, apertura, atributo, contenido, cierre)
3. Estructura base de un documento: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
4. Meta etiquetas esenciales: `charset`, `viewport`, `title`
5. Etiquetas de texto: `<h1>`–`<h6>`, `<p>`, `<span>`, `<strong>`, `<em>`
6. Etiquetas semánticas de estructura: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
7. Listas: `<ul>`, `<ol>`, `<li>`
8. Enlaces: `<a href>`
9. Imágenes: `<img src alt>`
10. Formularios básicos: `<form>`, `<input>`, `<label>`, `<button>`, tipos de `input`
11. Atributos globales: `class`, `id`, `style`, `title`
12. Formas de vincular CSS: inline, interno (`<style>`), externo (`<link>`)
13. Sintaxis básica de CSS: regla, selector, propiedad, valor, comentarios
14. Selectores CSS: etiqueta, clase, id, universal, descendiente
15. Especificidad CSS (qué gana en un conflicto)
16. Herencia de estilos (`inherit`, propiedades que heredan vs no)
17. Propiedades de texto: `color`, `font-size`, `font-family`, `font-weight`, `text-align`
18. Modelo de caja (Box Model): `margin`, `border`, `padding`, `width`, `height`, `content`
19. `box-sizing`: `content-box` vs `border-box`
20. Unidades de medida: `px`, `%`, `em`, `rem`
21. Colores: nombres, hexadecimal, `rgb()`, `rgba()`
22. Buenas prácticas y organización del código
23. Errores típicos de un junior
24. Ejercicios prácticos guiados

---

## 2. Explicación detallada por subtema

### 2.1 ¿Qué es HTML y qué es CSS?

**HTML (HyperText Markup Language)** no es un lenguaje de programación: es un lenguaje de **marcado**. Su trabajo es describir la **estructura y el significado** del contenido de una página: "esto es un título", "esto es una lista", "esto es un párrafo". No decide colores ni tamaños.

**CSS (Cascading Style Sheets)** es el lenguaje que decide **cómo se ve** ese contenido: colores, tipografía, espaciado, posición. La palabra "Cascading" (en cascada) es clave: los estilos se aplican en cascada según reglas de prioridad que veremos en especificidad (sección 2.14).

**Por qué se separan:** si mezclas estructura y presentación, cualquier cambio visual obliga a tocar el HTML. Separarlos permite cambiar el "traje" (CSS) sin tocar el "esqueleto" (HTML), y es la base de la accesibilidad y el SEO.

### 2.2 Anatomía de un tag HTML

```html
<a href="https://escuelanew.com">Visita mi Web</a>
```

- **Elemento**: la etiqueta completa, apertura + contenido + cierre.
- **Etiqueta de apertura**: `<a href="https://escuelanew.com">`
- **Nombre del atributo**: `href`
- **Valor del atributo**: `"https://escuelanew.com"` (siempre entre comillas)
- **Contenido**: `Visita mi Web` (lo que ve el usuario)
- **Etiqueta de cierre**: `</a>` (con la barra `/`)

**Tipos de etiquetas:**
- **Con contenido** (necesitan apertura y cierre): `<p>Texto</p>`, `<h1>Título</h1>`, `<div></div>`
- **Auto-cerradas / de un solo tag** (no tienen contenido interno ni cierre): `<img src="foto.jpg" alt="Foto" />`, `<br />`, `<hr />`, `<input />`, `<meta />`

### 2.3 Estructura base de un documento HTML

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi primera página</title>
  </head>
  <body>
    <h1>Hola mundo</h1>
  </body>
</html>
```

- `<!DOCTYPE html>`: le dice al navegador "interpreta esto como HTML5". No es un tag, es una declaración. Sin ella, el navegador puede activar "modo quirks" (compatibilidad con navegadores viejos) y romper tu CSS.
- `<html lang="es">`: elemento raíz. El atributo `lang` ayuda a lectores de pantalla y buscadores a saber el idioma.
- `<head>`: metadatos, no se muestra visualmente. Aquí va el `<title>`, los `<meta>`, y los links a CSS.
- `<body>`: todo el contenido visible de la página va aquí.

### 2.4 Meta etiquetas esenciales

- `<meta charset="UTF-8" />`: define la codificación de caracteres. Sin esto, tildes y "ñ" pueden verse rotas (ej. "Ã±" en vez de "ñ").
- `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`: indispensable para que la página se vea bien en móviles. Sin ella, el navegador móvil renderiza como si fuera desktop y luego reduce el zoom.
- `<title>Texto</title>`: aparece en la pestaña del navegador y en resultados de buscadores.

### 2.5 Etiquetas de texto

| Etiqueta | Uso | Nota |
|---|---|---|
| `<h1>` a `<h6>` | Encabezados, de mayor a menor jerarquía | Solo debería haber **un** `<h1>` por página (semántica/SEO) |
| `<p>` | Párrafo | Bloque, ocupa toda la línea disponible |
| `<span>` | Contenedor de texto en línea sin significado semántico | Se usa para aplicar estilo a una parte de un texto |
| `<strong>` | Texto de importancia fuerte | Semánticamente "importante", visualmente negrita por defecto |
| `<em>` | Énfasis | Semánticamente "énfasis", visualmente cursiva por defecto |

⚠️ Diferencia clave: `<strong>`/`<em>` tienen significado semántico (accesibilidad, lectores de pantalla los "acentúan" al leer). `<b>`/`<i>` (que existen pero no se recomiendan como primera opción) solo cambian la apariencia sin significado.

### 2.6 Etiquetas semánticas de estructura

```html
<header>Cabecera del sitio o de una sección</header>
<nav>Menú de navegación</nav>
<main>Contenido principal (uno solo por página)</main>
<section>Agrupa contenido temáticamente relacionado</section>
<article>Contenido autónomo, reutilizable (ej. un post de blog)</article>
<aside>Contenido relacionado pero secundario (ej. sidebar)</aside>
<footer>Pie de página o de sección</footer>
```

Antes de HTML5 todo era `<div>`. El problema: un `<div>` no dice nada sobre el contenido. Un lector de pantalla, un buscador, o incluso otro programador no sabe si ese `<div>` es un menú o un pie de página. Las etiquetas semánticas resuelven esto: **el nombre de la etiqueta ya comunica su función**.

### 2.7 Listas

```html
<ul>
  <li>Elemento sin orden</li>
  <li>Otro elemento</li>
</ul>

<ol>
  <li>Primer paso</li>
  <li>Segundo paso</li>
</ol>
```

- `<ul>` (unordered list): lista con viñetas, el orden no importa.
- `<ol>` (ordered list): lista numerada, el orden sí importa.
- `<li>` (list item): cada elemento, **siempre** debe ir dentro de un `<ul>` o `<ol>` (o `<menu>`).

### 2.8 Enlaces

```html
<a href="https://ejemplo.com" target="_blank" rel="noopener">Ir al sitio</a>
<a href="#seccion2">Ir a la sección 2</a>
<a href="mailto:correo@ejemplo.com">Escríbenos</a>
```

- `href`: destino del enlace. Puede ser una URL externa, una ruta interna, un ancla (`#id`) o un protocolo especial (`mailto:`, `tel:`).
- `target="_blank"`: abre en nueva pestaña. Buena práctica: acompañarlo de `rel="noopener"` por seguridad (evita que la nueva pestaña acceda al `window` original).

### 2.9 Imágenes

```html
<img src="logo.png" alt="Logo de la empresa" width="200" height="100" />
```

- `src`: ruta del archivo (relativa o absoluta).
- `alt`: texto alternativo. **Obligatorio** por accesibilidad (lectores de pantalla) y porque se muestra si la imagen no carga.
- Es una etiqueta auto-cerrada (no tiene contenido ni `</img>`).

### 2.10 Formularios básicos

```html
<form action="/enviar" method="POST">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" placeholder="Escribe tu nombre" />

  <label for="correo">Correo:</label>
  <input type="email" id="correo" name="correo" required />

  <label for="clave">Contraseña:</label>
  <input type="password" id="clave" name="clave" />

  <input type="checkbox" id="acepto" name="acepto" />
  <label for="acepto">Acepto términos</label>

  <button type="submit">Enviar</button>
</form>
```

**Tipos de `input` más comunes:** `text`, `email`, `password`, `number`, `checkbox`, `radio`, `date`, `file`, `submit`.

**Clave de `<label for="...">`:** el valor de `for` debe coincidir con el `id` del `input` correspondiente. Esto permite que, al hacer clic en el texto del label, el foco vaya al input (mejora usabilidad y accesibilidad, especialmente en checkboxes/radios).

### 2.11 Atributos globales

- `id`: identificador **único** en todo el documento. Solo un elemento puede tener ese `id`.
- `class`: puede **repetirse** en muchos elementos, y un elemento puede tener **varias clases** separadas por espacio: `class="tarjeta destacada"`.
- `style`: CSS directamente en el atributo, ej. `style="color: red;"`. Tiene la prioridad más alta en la cascada (ver especificidad).
- `title`: texto que aparece como tooltip al pasar el mouse.

### 2.12 Formas de vincular CSS

**1. Inline** (en el propio elemento):
```html
<p style="color: blue;">Texto azul</p>
```

**2. Interno** (dentro de `<head>`):
```html
<head>
  <style>
    p { color: blue; }
  </style>
</head>
```

**3. Externo** (archivo aparte, **la mejor práctica**):
```html
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
```
```css
/* styles.css */
p { color: blue; }
```

**Por qué externo es la mejor práctica:** el navegador puede cachear el archivo `.css` (se reutiliza en varias páginas sin volver a descargar), el código queda organizado, y varios archivos HTML pueden compartir el mismo diseño.

### 2.13 Sintaxis básica de CSS

```css
selector {
  propiedad: valor;
  /* esto es un comentario */
}
```

```css
p {
  color: navy;
  font-size: 16px;
}
```

Cada línea `propiedad: valor;` es una **declaración**. El conjunto de declaraciones entre `{ }` es un **bloque de declaración**. Selector + bloque = **regla CSS**.

### 2.14 Selectores CSS

```css
/* Por etiqueta: afecta a TODOS los <p> */
p { color: black; }

/* Por clase: afecta a todo lo que tenga class="destacado" */
.destacado { color: orange; }

/* Por id: afecta solo al elemento con ese id (único) */
#encabezado { background-color: gray; }

/* Universal: afecta a TODOS los elementos */
* { margin: 0; padding: 0; }

/* Descendiente: afecta a <li> que estén DENTRO de <ul> */
ul li { list-style: none; }
```

### 2.15 Especificidad CSS

Cuando dos reglas aplican al mismo elemento y se contradicen, gana la de **mayor especificidad**, no la que está escrita después (aunque a igual especificidad, sí gana la última escrita).

**Orden de mayor a menor peso:**
1. `style` inline → gana casi siempre
2. `#id` → muy específico
3. `.clase`, `[atributo]`, `:pseudo-clase` → específico medio
4. `etiqueta` (elemento) → poco específico
5. `*` (universal) → el menos específico

```css
p { color: black; }        /* especificidad baja */
.destacado { color: orange; } /* gana sobre "p" */
#titulo { color: red; }     /* gana sobre ".destacado" */
```

```html
<p id="titulo" class="destacado">Este texto será rojo</p>
```

`!important` puede forzar que una regla gane sin importar especificidad, pero se considera mala práctica salvo casos excepcionales, porque rompe la cascada natural y dificulta el mantenimiento.

### 2.16 Herencia de estilos

Algunas propiedades CSS se **heredan** automáticamente a los elementos hijos (ej. `color`, `font-family`, `font-size`, `text-align`). Otras **no heredan** por defecto (ej. `margin`, `padding`, `border`, `width`, `height`) porque no tendría sentido que un hijo copie el "tamaño de caja" de su padre automáticamente.

```css
body { font-family: Arial, sans-serif; color: #333; }
/* Todos los textos dentro del body heredan esta fuente y color,
   a menos que una regla más específica los sobreescriba */
```

### 2.17 Propiedades de texto

```css
p {
  color: #333333;
  font-size: 18px;
  font-family: "Segoe UI", Arial, sans-serif;
  font-weight: bold;
  text-align: center;
}
```

- `color`: color del texto.
- `font-size`: tamaño de la letra.
- `font-family`: lista de fuentes en orden de preferencia (si el navegador no tiene la primera, prueba la siguiente; `sans-serif` es un "genérico" de respaldo final).
- `text-align`: alineación horizontal del texto (`left`, `center`, `right`, `justify`).

### 2.18 Modelo de caja (Box Model)

Todo elemento HTML es, para CSS, una **caja rectangular** compuesta por capas concéntricas:

```
┌─────────────────────────────┐
│           margin             │  ← espacio FUERA del elemento
│  ┌───────────────────────┐   │
│  │        border          │   │  ← borde del elemento
│  │  ┌─────────────────┐  │   │
│  │  │     padding       │  │   │  ← espacio INTERNO, entre borde y contenido
│  │  │  ┌───────────┐   │  │   │
│  │  │  │  content   │   │  │   │  ← el contenido real (texto, imagen)
│  │  │  └───────────┘   │  │   │
│  │  └─────────────────┘  │   │
│  └───────────────────────┘   │
└─────────────────────────────┘
```

```css
.caja {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
}
```

- `content`: el contenido definido por `width`/`height`.
- `padding`: "colchón" interno, entre el contenido y el borde.
- `border`: línea que rodea el padding + content.
- `margin`: espacio externo, entre este elemento y los demás.

### 2.19 `box-sizing`: `content-box` vs `border-box`

Por defecto (`content-box`), `width`/`height` solo miden el **contenido**, y el padding/border se **suman por fuera**, agrandando la caja real:

```css
.caja-default {
  box-sizing: content-box; /* valor por defecto */
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  /* ancho REAL renderizado = 200 + 20+20 (padding) + 5+5 (border) = 250px */
}
```

Con `border-box`, `width`/`height` incluyen padding y border, así que la caja se mantiene con el tamaño que declaraste:

```css
.caja-border-box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  /* ancho REAL renderizado = 200px (padding y border se descuentan del content) */
}
```

📌 Práctica muy común en la industria: aplicar `box-sizing: border-box` a todo con el selector universal, para que los cálculos de tamaño sean predecibles:
```css
* { box-sizing: border-box; }
```

### 2.20 Unidades de medida

| Unidad | Tipo | Se calcula respecto a... |
|---|---|---|
| `px` | Absoluta | Píxeles fijos, no cambia |
| `%` | Relativa | El tamaño del elemento **padre** |
| `em` | Relativa | El `font-size` del elemento **padre** (o el propio, si se usa para tamaño de fuente) |
| `rem` | Relativa | El `font-size` del elemento **raíz** (`<html>`), siempre estable, sin acumulación |

```css
html { font-size: 16px; }
.padre { font-size: 20px; }
.hijo-em { font-size: 1.5em; }   /* 1.5 × 20px (del padre) = 30px */
.hijo-rem { font-size: 1.5rem; } /* 1.5 × 16px (del root) = 24px, sin importar el padre */
```

`rem` suele preferirse para evitar el "efecto cascada" en el que los `em` se multiplican entre padres e hijos anidados.

### 2.21 Colores

```css
.a { color: red; }                    /* nombre predefinido */
.b { color: #ff0000; }                /* hexadecimal (rojo puro) */
.c { color: rgb(255, 0, 0); }         /* rgb: rojo, verde, azul (0-255 cada uno) */
.d { color: rgba(255, 0, 0, 0.5); }   /* rgba: como rgb + alpha (transparencia 0 a 1) */
```

- Hexadecimal: 6 dígitos, dos por canal (RR GG BB), en base 16 (00 a FF).
- `rgba`: el cuarto valor (`alpha`) controla la opacidad: `0` = invisible, `1` = totalmente opaco.

### 2.22 Buenas prácticas y organización

- Separar siempre HTML (estructura) de CSS (presentación) en archivos externos.
- Usar etiquetas semánticas en vez de `<div>` genéricos cuando exista una etiqueta más apropiada.
- Nombrar clases con nombres descriptivos del **propósito**, no de la apariencia (ej. `.card-destacada` mejor que `.texto-rojo`, porque si luego cambia el color, el nombre de la clase queda obsoleto).
- Indentar el código de forma consistente para que la jerarquía sea visible.
- Comentar bloques de CSS complejos.

---

## 3. Glosario de conceptos clave

| Término | Definición corta |
|---|---|
| **Etiqueta (tag)** | Marca de HTML que delimita un elemento, ej. `<p>` |
| **Elemento** | Etiqueta de apertura + contenido + etiqueta de cierre |
| **Atributo** | Información adicional dentro de la etiqueta de apertura (`nombre="valor"`) |
| **DOCTYPE** | Declaración que indica al navegador la versión de HTML a interpretar |
| **Etiqueta semántica** | Etiqueta cuyo nombre describe el significado del contenido que envuelve |
| **Selector CSS** | Patrón que indica a qué elemento(s) se aplica una regla |
| **Especificidad** | Sistema de "peso" que decide qué regla CSS gana en un conflicto |
| **Herencia** | Transmisión automática de ciertos valores CSS de un padre a sus hijos |
| **Box Model** | Modelo que describe cómo se compone visualmente cada elemento: content, padding, border, margin |
| **box-sizing** | Propiedad que define si `width`/`height` incluyen o no padding y border |
| **Unidad relativa** | Unidad de medida cuyo valor depende de otro elemento de referencia (`%`, `em`, `rem`) |
| **Cascada** | El orden y las reglas de prioridad con las que se combinan los estilos CSS |
| **id** | Atributo identificador único de un elemento |
| **class** | Atributo que agrupa elementos que comparten estilo, reutilizable |

---

## 4. ¿Para qué sirve cada concepto en la práctica real?

- **DOCTYPE + estructura base**: garantiza que el navegador renderice tu página de forma consistente y moderna, evitando modo "quirks".
- **Meta viewport**: hace que tu web sea usable en celulares, requisito básico de cualquier sitio actual.
- **Etiquetas semánticas**: mejoran el SEO (los buscadores entienden mejor tu contenido) y la accesibilidad (lectores de pantalla para personas con discapacidad visual).
- **`class` vs `id`**: `class` te permite reutilizar el mismo estilo en múltiples elementos (ej. todas las tarjetas de un catálogo); `id` te permite apuntar a un elemento único (ej. para JavaScript, o un ancla de navegación).
- **CSS externo**: permite mantener un solo archivo de estilos para todo un sitio, facilitando cambios globales de diseño.
- **Especificidad**: entenderla evita el problema clásico de "puse el estilo pero no se aplica", muy común en principiantes.
- **Box model / box-sizing**: fundamental para maquetar sin sorpresas: saber por qué un elemento "se sale" de su contenedor casi siempre es un tema de box model.
- **Unidades relativas (`rem`, `%`)**: permiten diseños responsivos que se adaptan a distintos tamaños de pantalla sin recalcular todo a mano.
- **Formularios**: son la puerta de entrada para que el usuario envíe datos (login, contacto, registro), base de cualquier app interactiva.

---

## 5. Ejemplos abstractos

### 5.1 Fijos del lenguaje (NO se pueden renombrar — son parte del estándar HTML5/CSS3)

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <h1></h1>
    <p></p>
    <ul><li></li></ul>
    <a href=""></a>
    <img src="" alt="" />
    <form><input type="" /><label for=""></label></form>
  </body>
</html>
```
- `html`, `head`, `body`, `h1`...`h6`, `p`, `ul`, `li`, `a`, `img`, `form`, `input`, `label` → **nombres de etiquetas fijos**, no se inventan.
- `href`, `src`, `alt`, `type`, `for` → **nombres de atributos fijos**, no se inventan.
- `color`, `margin`, `padding`, `width`, `height`, `font-size`, `box-sizing` → **propiedades CSS fijas**, no se inventan.

### 5.2 Reutilizables / renombrables por el estudiante

```html
<div class="[nombre_clase_1]" id="[id_unico_1]">
  <p class="[nombre_clase_1]">Repite la misma clase, es válido</p>
</div>
```

```css
.[nombre_clase_1] { color: [valor_color_1]; }
#[id_unico_1] { padding: [valor_medida_1]; }
```

- `[nombre_clase_1]` → **se puede repetir** en múltiples elementos y el estudiante elige el nombre (ej. `tarjeta`, `boton-principal`).
- `[id_unico_1]` → el estudiante elige el nombre, pero **NO se puede repetir**: cada `id` debe ser único en todo el documento.
- `[valor_color_1]`, `[valor_medida_1]` → valores libres definidos por el estudiante (ej. `red`, `20px`, `1.5rem`), no son parte fija del lenguaje aunque deben respetar el formato válido de la propiedad (una unidad de medida real, un color válido, etc.).

### 5.3 Tabla resumen de "qué se puede renombrar"

| Elemento | ¿Se puede renombrar? | ¿Se puede repetir? |
|---|---|---|
| Nombre de etiqueta (`div`, `p`, `h1`...) | ❌ No, es fijo del lenguaje | ✅ Sí, todas las que quieras |
| Nombre de atributo (`href`, `src`, `class`...) | ❌ No, es fijo del lenguaje | ✅ Sí, en distintos elementos |
| Valor de `class` | ✅ Sí, lo elige el estudiante | ✅ Sí, en múltiples elementos |
| Valor de `id` | ✅ Sí, lo elige el estudiante | ❌ No, debe ser único |
| Nombre de propiedad CSS (`color`, `margin`...) | ❌ No, es fijo del lenguaje | ✅ Sí, en múltiples reglas |
| Valor de una propiedad CSS (`red`, `20px`...) | ✅ Sí, dentro de valores válidos | ✅ Sí, en múltiples reglas |

---

## 6. Excepciones y casos especiales

1. **`id` único vs `class` repetible**: si por error se repite un `id`, el HTML sigue "funcionando" visualmente (los navegadores no rompen la página), pero es **inválido** y puede causar bugs graves en JavaScript (`document.getElementById` solo devuelve el primero que encuentra), además de fallar en validadores HTML.
2. **Especificidad no es "quién está más abajo"**: si dos selectores tienen la **misma** especificidad (ej. dos clases), gana el que esté escrito **después** en el CSS. Pero si uno tiene mayor especificidad (ej. un id vs una clase), gana el de mayor especificidad sin importar el orden.
3. **Herencia no aplica a todo**: propiedades de "caja" (`margin`, `padding`, `border`, `width`) **no heredan**; propiedades de texto (`color`, `font-family`) **sí heredan**. Es una excepción frecuente que confunde a principiantes.
4. **`box-sizing` cambia el comportamiento del layout**: el mismo CSS con `content-box` vs `border-box` produce cajas de tamaño final distinto; por eso muchos frameworks CSS (Bootstrap, Tailwind) fuerzan `border-box` globalmente desde el inicio.
5. **`em` es relativo al padre, `rem` es relativo a la raíz**: si anidas varios elementos con `em`, el tamaño se **multiplica en cascada** (efecto acumulativo no siempre deseado); `rem` evita ese efecto.
6. **Etiquetas auto-cerradas no llevan `</etiqueta>`**: `<img>`, `<br>`, `<input>`, `<meta>` no tienen contenido ni cierre; intentar cerrarlas con `</img>` es un error.
7. **`<label for="...">` depende de que el `id` referenciado exista**: si el `for` no coincide con ningún `id`, el label pierde su función de accesibilidad, pero visualmente no se nota el error (fallo silencioso).
8. **El `<h1>` no está técnicamente limitado a uno por página en la especificación HTML5 actual**, pero sigue siendo la convención recomendada por buenas prácticas de SEO/accesibilidad; "esto puede variar según tu plataforma o validador".

---

## 7. Metáforas y ejemplos visuales

- **HTML vs CSS** → HTML es el **esqueleto y órganos** de un cuerpo (qué es cada parte); CSS es la **ropa y el maquillaje** (cómo se ve por fuera).
- **`class` vs `id`** → `class` es como el **uniforme escolar**: muchos estudiantes lo comparten. `id` es como el **número de cédula**: cada persona tiene el suyo, y no puede repetirse.
- **Especificidad** → es como un **torneo de pesos**: un `style` inline es un peso pesado, un `id` es peso mediano-alto, una `class` es peso medio, una etiqueta simple es peso ligero. En el "ring", gana el de mayor peso, sin importar quién entró primero.
- **Herencia CSS** → es como los **rasgos genéticos de una familia**: el color de ojos (análogo a `color`, `font-family`) se hereda de padres a hijos, pero el tamaño de la casa donde vives (análogo a `margin`, `width`) no se hereda automáticamente, cada quien tiene la suya.
- **Box Model** → imagina una **caja de regalo dentro de una caja de envío**: el regalo es el `content`, el papel burbuja que lo rodea es el `padding`, la caja de cartón es el `border`, y el espacio libre alrededor de la caja dentro del camión de envío es el `margin`.
- **`box-sizing: border-box`** → es como decir "el tamaño de la maleta ya incluye las ruedas y las asas", en vez de "el tamaño es solo el compartimento interno y las ruedas se suman aparte" (`content-box`).
- **`em` vs `rem`** → `em` es como calcular tu altura relativa **a la persona que tienes al lado** (cambia según quién esté cerca); `rem` es como medirte siempre contra una **regla fija pegada en la pared** (el `<html>` raíz), sin importar quién esté a tu lado.
- **CSS externo vs inline** → CSS externo es como tener un **manual de estilo corporativo único** que aplica a toda la empresa; CSS inline es como **cada empleado decidiendo su propio uniforme** cada mañana: funciona, pero no escala ni es mantenible.

---

## 8. Errores típicos de un junior

1. **Olvidar cerrar etiquetas** (`<p>Texto` sin `</p>`), lo que puede romper el anidamiento del resto del documento.
2. **Confundir `class` con `id`**: usar `id` para algo que se repite (ej. `id="tarjeta"` en 10 tarjetas distintas), generando HTML inválido.
3. **No vincular bien el CSS externo**: rutas relativas mal escritas en `<link href="...">`, o poner el `<link>` fuera de `<head>`.
4. **No entender el box model**: sorprenderse de que un elemento con `width: 100px` termine ocupando más espacio del esperado por no considerar `padding`/`border`.
5. **Usar `<div>` para todo** en vez de etiquetas semánticas (`<header>`, `<nav>`, etc.), perdiendo accesibilidad y SEO.
6. **Olvidar el atributo `alt`** en imágenes.
7. **Escribir valores de propiedades CSS sin unidad** cuando la unidad es obligatoria (ej. `margin: 10;` en vez de `margin: 10px;`), lo cual el navegador ignora silenciosamente.
8. **Anidar `<li>` fuera de `<ul>`/`<ol>`**, o poner texto suelto directamente dentro de `<ul>` sin envolver en `<li>`.
9. **Abusar de `!important`** para "forzar" un estilo en vez de entender por qué la especificidad no estaba funcionando.
10. **No usar `<label for="...">` correctamente** en formularios, perjudicando la accesibilidad.

---

## 9. Preguntas de autoevaluación

1. ¿Puedo explicar la diferencia entre un elemento, una etiqueta y un atributo en HTML?
2. ¿Puedo explicar por qué el `<!DOCTYPE html>` es necesario y qué pasa si no lo incluyo?
3. ¿Puedo nombrar al menos 4 etiquetas semánticas y decir para qué sirve cada una?
4. ¿Puedo explicar la diferencia entre `class` e `id`, incluyendo cuál se puede repetir y cuál no?
5. ¿Puedo ordenar de mayor a menor la especificidad entre: estilo inline, id, clase, y etiqueta?
6. ¿Puedo dibujar de memoria las 4 capas del Box Model en orden correcto (de adentro hacia afuera)?
7. ¿Puedo explicar la diferencia entre `box-sizing: content-box` y `box-sizing: border-box` con un ejemplo numérico?
8. ¿Puedo explicar la diferencia entre `em` y `rem` y decir cuál evita el efecto de "acumulación en cascada"?
9. ¿Puedo nombrar las 3 formas de vincular CSS a un documento HTML y decir cuál es la mejor práctica y por qué?
10. ¿Puedo explicar qué propiedades CSS heredan por defecto y cuáles no?
11. ¿Puedo escribir de memoria un formulario básico con `label`, `input` de tipo texto y un `button`?
12. ¿Puedo explicar por qué el atributo `alt` en imágenes es importante más allá de lo visual?

---

## 10. Checklist final de dominio

- [ ] Entiendo la estructura mínima de un documento HTML (`DOCTYPE`, `html`, `head`, `body`)
- [ ] Sé usar correctamente las etiquetas de texto y las diferencio de las semánticas
- [ ] Sé cuándo usar `class` y cuándo usar `id`, y por qué uno se puede repetir y el otro no
- [ ] Sé crear listas, enlaces, imágenes y un formulario básico sin errores de sintaxis
- [ ] Sé vincular CSS de las 3 formas (inline, interno, externo) y explicar cuál es mejor práctica
- [ ] Entiendo los 4 tipos de selectores CSS (etiqueta, clase, id, universal) y el selector descendiente
- [ ] Puedo predecir qué regla CSS "gana" en un conflicto usando especificidad
- [ ] Entiendo qué propiedades heredan y cuáles no
- [ ] Puedo dibujar y explicar el Box Model completo
- [ ] Entiendo la diferencia práctica entre `content-box` y `border-box`
- [ ] Sé diferenciar `px`, `%`, `em` y `rem` y cuándo usar cada una
- [ ] Sé escribir colores en al menos 3 formatos distintos (nombre, hex, rgb/rgba)
- [ ] Puedo identificar y corregir los errores típicos de un junior en HTML/CSS

---

## Nota final
Todos los ejemplos de código en este documento son sintácticamente válidos según HTML5 y CSS3 estándar. Algunos aspectos (por ejemplo, si el instructor exige `<h1>` único por página, convenciones de nombres de clases, o herramientas específicas de validación) **pueden variar según tu plataforma o academia**; ante la duda, consulta el material oficial de tu curso o a tu formador.

**Siguiente clase (Clase 5):** Manipulación del DOM con JavaScript, eventos y conexión entre JavaScript y HTML/CSS.
