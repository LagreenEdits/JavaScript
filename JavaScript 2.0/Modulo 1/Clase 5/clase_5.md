# 📘 Clase 5 — Interactividad con el DOM: Manipulación del DOM con JavaScript
**Curso:** JavaScript MEAN Mastery — Módulo M1, Unidad 1
**Duración simulada:** 3 horas
**Nivel:** Junior / principiante absoluto
**Prerrequisito lógico:** Clase 2-3 (JS básico) y Clase 4 (HTML/CSS)
**Formador de referencia:** Steven Zuluaga Cortés — DevSeniorCode

> Este documento está diseñado para reemplazar al 100% haber asistido a la clase de 3 horas. Cubre teoría, "por qué funciona así", ejemplos abstractos, excepciones, metáforas y autoevaluación.

---

## 1. Índice de subtemas cubiertos

1. ¿Qué es el DOM (Document Object Model)? Representación como árbol de nodos
2. Diferencia entre HTML (código fuente) y DOM (representación en memoria del navegador)
3. Selección de elementos clásica: `getElementById`, `getElementsByClassName`, `getElementsByTagName`
4. Selección moderna: `querySelector`, `querySelectorAll`
5. Diferencia entre `NodeList` y `HTMLCollection` (estática vs viva, cómo iterar cada una)
6. Modificar contenido: `.textContent`, `.innerText`, `.innerHTML` (y riesgos de `.innerHTML`)
7. Modificar estilos vía JS: `.style.propiedad`
8. Manipulación de clases CSS: `.classList.add/remove/toggle/contains/replace`
9. Manipulación de atributos: `.setAttribute`, `.getAttribute`, `.removeAttribute`, `.hasAttribute`, acceso directo (`.id`, `.src`, `.href`)
10. Crear y eliminar elementos: `document.createElement`, `.appendChild`, `.insertBefore`, `.cloneNode`, `.remove()`
11. Navegación por el DOM (DOM Traversal): `parentElement`, `children`, `firstChild`/`lastChild`, `nextElementSibling`/`previousElementSibling`
12. Propiedades de dimensiones y posición: `offsetWidth/Height`, `clientWidth/Height`, `scrollTop/Left`
13. Eventos: `addEventListener`, tipos comunes (`click`, `submit`, `input`, `mouseover`, `keydown`)
14. El objeto `event` dentro del callback: `event.target`, `event.preventDefault()`, `event.key`
15. Propagación de eventos: bubbling básico (introducción)
16. `DOMContentLoaded` y por qué importa el orden de carga del script
17. Recorrer y manipular el DOM dinámicamente (listas generadas por JS)
18. Aplicación práctica: Dark Mode / Light Mode con `matchMedia` y `localStorage`
19. Aplicación práctica: contador interactivo, toggle mostrar/ocultar, texto dinámico en tiempo real
20. Aplicación práctica: manejo de teclado (`keydown`) para una calculadora

---

## 2. Explicación detallada por subtema

### 2.1 ¿Qué es el DOM?

El **DOM (Document Object Model)** es una **representación en memoria**, como un árbol de objetos, del documento HTML que el navegador está mostrando. No es el archivo `.html` en sí — es la estructura de datos que el navegador construye **después** de leer ese archivo, y con la que JavaScript puede interactuar.

```
document
  └── html
      ├── head
      │   ├── title
      │   └── meta
      └── body
          ├── h1
          ├── p
          └── button
```

Cada etiqueta HTML se convierte en un **nodo** (`node`) dentro de ese árbol. `document` es el nodo raíz de todo, y a partir de él se puede navegar a cualquier otro nodo.

**Por qué existe:** HTML es texto estático. El DOM convierte ese texto en objetos que un lenguaje de programación (JavaScript) puede leer, modificar, agregar o eliminar en tiempo real, **sin recargar la página**. Esa es la base de toda interactividad web moderna.

### 2.2 HTML (código fuente) vs DOM (representación en memoria)

El HTML que escribes es el **plano original**. El DOM es la **construcción real** que el navegador arma a partir de ese plano, y que puede cambiar dinámicamente sin que el archivo `.html` original se modifique.

```html
<!-- Este es el HTML fuente -->
<p id="saludo">Hola</p>
```
```js
// JavaScript puede cambiar el DOM sin tocar el archivo .html
document.getElementById('saludo').textContent = 'Adiós';
// El archivo .html sigue diciendo "Hola", pero lo que VE el usuario ahora dice "Adiós"
```

Por eso, si haces clic derecho → "Ver código fuente de la página" en el navegador, ves el HTML original; pero si usas las **DevTools** (Inspeccionar elemento), ves el **DOM actual**, que puede ser distinto si JavaScript ya lo modificó.

### 2.3 Selección de elementos clásica

```js
// Por ID — devuelve UN solo elemento (o null si no existe)
const elemento = document.getElementById('miId');

// Por clase — devuelve una HTMLCollection "viva" de todos los que la tengan
const elementos = document.getElementsByClassName('miClase');

// Por etiqueta — devuelve una HTMLCollection "viva" de todos los <p>, por ejemplo
const parrafos = document.getElementsByTagName('p');
```

Estos métodos son los más antiguos de la API del DOM. `getElementById` no lleva el `#` porque ya se sabe que busca por id. `getElementsByClassName` y `getElementsByTagName` **siempre devuelven varios** (una colección), incluso si solo hay un elemento que coincide.

### 2.4 Selección moderna: `querySelector` y `querySelectorAll`

```js
// Devuelve el PRIMER elemento que coincide con el selector CSS (o null)
const elemento = document.querySelector('.miClase');

// Devuelve TODOS los que coinciden, como una NodeList estática
const elementos = document.querySelectorAll('.miClase');

// Acepta cualquier selector CSS válido, incluso combinado
const especifico = document.querySelector('#contenedor .item:first-child');
```

**Por qué se prefieren hoy en día:** usan la misma sintaxis de selectores que ya conoces de CSS (clase 4), por lo que no necesitas aprender un método distinto para cada tipo de selector. `querySelector`/`querySelectorAll` son más flexibles y es la forma recomendada en código moderno.

### 2.5 `NodeList` vs `HTMLCollection`

Ambas son colecciones "parecidas a un array", pero **no son arrays reales** (no tienen todos los métodos de array como `.map()` o `.filter()` directamente, salvo excepciones).

| | `HTMLCollection` (getElementsBy...) | `NodeList` (querySelectorAll) |
|---|---|---|
| ¿Es "viva"? | ✅ Sí, se actualiza automáticamente si el DOM cambia | ❌ No (estática), es una "foto" del momento en que se ejecutó |
| ¿Tiene `.forEach()`? | ❌ No directamente | ✅ Sí |
| ¿Se puede convertir a array? | `Array.from(coleccion)` o `[...coleccion]` | `Array.from(coleccion)` o `[...coleccion]` |

```js
const lis = document.getElementsByTagName('li'); // HTMLCollection viva
const lisModernos = document.querySelectorAll('li'); // NodeList estática

// Para iterar una HTMLCollection con forEach, primero conviértela:
Array.from(lis).forEach(li => console.log(li));
// Una NodeList sí puede usar forEach directamente:
lisModernos.forEach(li => console.log(li));
```

### 2.6 Modificar contenido

```js
elemento.textContent = 'Nuevo texto'; // Solo texto plano, ignora HTML
elemento.innerText = 'Nuevo texto';   // Similar, pero respeta estilos visuales (ej. display:none)
elemento.innerHTML = '<strong>Texto en negrita</strong>'; // Interpreta HTML
```

- `.textContent`: reemplaza el contenido como **texto puro**. Si le pasas `<strong>Hola</strong>`, lo mostrará literalmente con las etiquetas visibles, no las renderiza.
- `.innerText`: parecido a `textContent`, pero es consciente del renderizado CSS (por ejemplo, ignora texto oculto con `display: none`) y es más costoso en rendimiento.
- `.innerHTML`: interpreta el string como HTML real y lo renderiza. Es potente, pero riesgoso (ver excepciones, sección 6).

### 2.7 Modificar estilos vía JavaScript

```js
elemento.style.color = 'red';
elemento.style.fontSize = '20px'; // Nota: camelCase, NO "font-size"
elemento.style.backgroundColor = 'black';
```

Las propiedades CSS con guion (`font-size`, `background-color`) se escriben en **camelCase** en JavaScript (`fontSize`, `backgroundColor`), porque el guion no es válido como parte de un nombre de propiedad de un objeto JS.

### 2.8 Manipulación de clases CSS: `classList`

```js
elemento.classList.add('activo');           // Agrega la clase
elemento.classList.remove('inactivo');       // Quita la clase
elemento.classList.toggle('visible');        // La agrega si no está, la quita si está
elemento.classList.contains('especial');     // true/false, ¿la tiene?
elemento.classList.replace('viejo', 'nuevo'); // Reemplaza una clase por otra
```

**Por qué se prefiere `classList` sobre modificar `.style` directamente:** separa la lógica (JS decide *cuándo* cambia el estado) de la presentación (CSS decide *cómo se ve* ese estado), siguiendo la misma filosofía de separación de responsabilidades vista en la Clase 4.

### 2.9 Manipulación de atributos

```js
const valor = elemento.getAttribute('data-id');    // Leer un atributo
elemento.setAttribute('data-id', '123');            // Escribir/crear un atributo
elemento.removeAttribute('disabled');               // Eliminar un atributo
elemento.hasAttribute('data-especial');             // true/false

// Acceso directo a atributos "estándar" (propiedades del elemento)
elemento.id = 'nuevo-id';
elemento.title = 'Información';
elemento.href = 'https://ejemplo.com';
```

`setAttribute`/`getAttribute` funcionan con **cualquier** atributo, incluidos los personalizados (`data-*`). El acceso directo (`elemento.id`, `elemento.src`) solo funciona para atributos que el DOM ya reconoce como propiedades estándar del elemento.

### 2.10 Crear y eliminar elementos

```js
// Crear
const nuevoDiv = document.createElement('div');
nuevoDiv.textContent = 'Contenido del nuevo elemento';
nuevoDiv.classList.add('mi-clase');

// Insertar en el DOM
contenedor.appendChild(nuevoDiv);           // Al final del contenedor
contenedor.insertBefore(nuevoDiv, elemento); // Antes de un elemento específico

// Clonar
const clon = elemento.cloneNode(true); // true = copia profunda (incluye hijos)

// Eliminar
elemento.remove();                       // Forma moderna
elemento.parentNode.removeChild(elemento); // Forma clásica (compatibilidad)
```

`createElement` **no lo agrega automáticamente a la página** — solo lo crea en memoria. Es indispensable llamar a `.appendChild()` (o método similar) para que aparezca visualmente.

### 2.11 Navegación por el DOM (Traversal)

```js
elemento.parentElement;          // Elemento padre
elemento.children;                // Hijos directos (solo elementos, no texto)
elemento.firstChild;              // Primer hijo (puede ser un nodo de texto, ej. un espacio en blanco)
elemento.lastChild;                // Último hijo
elemento.nextElementSibling;      // Siguiente elemento hermano
elemento.previousElementSibling;  // Elemento hermano anterior
```

⚠️ `firstChild`/`lastChild` incluyen **nodos de texto** (como espacios en blanco entre etiquetas), mientras que `firstElementChild`/`lastElementChild` solo consideran elementos HTML reales — una fuente común de confusión.

### 2.12 Propiedades de dimensiones y posición

```js
elemento.offsetWidth;   // Ancho total, incluye border y padding
elemento.offsetHeight;  // Alto total
elemento.clientWidth;   // Ancho sin border (incluye padding)
elemento.clientHeight;  // Alto sin border
elemento.scrollTop;     // Cuánto se ha desplazado verticalmente el contenido
elemento.scrollLeft;    // Cuánto se ha desplazado horizontalmente
```

Estas propiedades conectan directamente con el Box Model visto en la Clase 4: `offsetWidth` incluye border, `clientWidth` no.

### 2.13 Eventos: `addEventListener`

```js
button.addEventListener('click', function() {
    console.log('¡Botón clickeado!');
});

// Con arrow function (más común en código moderno)
button.addEventListener('click', () => {
    console.log('¡Botón clickeado!');
});
```

**Estructura:** `elemento.addEventListener('tipo_de_evento', funcion_callback)`. El callback se ejecuta **cada vez** que ese evento ocurre sobre ese elemento; no se ejecuta al momento de escribir el código, sino en el futuro, cuando el usuario interactúa.

**Eventos comunes:**
| Evento | Dispara cuando... |
|---|---|
| `click` | Se hace clic sobre el elemento |
| `submit` | Se envía un `<form>` |
| `input` | Cambia el valor de un campo en tiempo real (cada tecla) |
| `mouseover` | El cursor entra sobre el elemento |
| `keydown` | Se presiona una tecla del teclado |

### 2.14 El objeto `event`

```js
elemento.addEventListener('click', (event) => {
    console.log(event.target); // El elemento exacto que disparó el evento
});

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que el formulario recargue la página
});

document.addEventListener('keydown', (event) => {
    console.log(event.key); // La tecla exacta que se presionó, ej. "Enter", "a", "Backspace"
});
```

Cada callback de evento recibe automáticamente un objeto `event` (a menudo abreviado `e`) con información sobre lo que ocurrió: qué elemento lo disparó (`target`), qué tecla fue (`key`), y métodos como `preventDefault()` para evitar el comportamiento por defecto del navegador (ej. recargar la página al enviar un formulario, o abrir el buscador rápido del navegador al presionar `/`).

### 2.15 Propagación de eventos (bubbling) — introducción

```html
<div id="padre">
  <button id="hijo">Clic aquí</button>
</div>
```
```js
document.getElementById('padre').addEventListener('click', () => console.log('Padre'));
document.getElementById('hijo').addEventListener('click', () => console.log('Hijo'));

// Al hacer clic en el botón, se imprime: "Hijo" y LUEGO "Padre"
```

Cuando ocurre un evento en un elemento, este "burbujea" (bubbling) hacia arriba, disparando también los listeners de sus elementos padres, salvo que se detenga explícitamente (`event.stopPropagation()`, tema que se profundiza más adelante en el curso).

### 2.16 `DOMContentLoaded`

```js
document.addEventListener('DOMContentLoaded', () => {
    console.log('El DOM ya está listo para manipularse');
});
```

**Por qué importa:** si tu script intenta seleccionar un elemento **antes** de que el navegador haya terminado de construir el DOM, el elemento no existe todavía y el resultado será `null` (ver excepciones, sección 6). `DOMContentLoaded` garantiza que todo el HTML ya fue parseado antes de ejecutar tu código. Alternativa común: colocar la etiqueta `<script>` justo antes de cerrar `</body>`, para que el HTML ya se haya cargado al llegar a esa línea.

### 2.17 Recorrer y manipular el DOM dinámicamente

```js
const contenedor = document.getElementById('contenedor');
for (let i = -100; i <= 100; i++) {
  const cuadro = document.createElement('div');
  if (i % 2 === 0) {
    cuadro.classList.add('square-even');
    cuadro.textContent = `🤝 + ${i}`;
  } else {
    cuadro.classList.add('square-odd');
    cuadro.textContent = `🫂 + ${i}`;
  }
  contenedor.appendChild(cuadro);
}
```

Este patrón combina todo lo aprendido en la Clase 3 (bucle `for` + condicional) con lo nuevo de esta clase (`createElement`, `classList.add`, `textContent`, `appendChild`) para generar contenido dinámico basado en datos.

### 2.18 Dark Mode / Light Mode

```js
// Detectar preferencia del sistema operativo del usuario
const prefiereOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Cambiar variables CSS dinámicamente desde JS
const root = document.documentElement;
root.style.setProperty('--color-fondo', '#1a1a1a');
root.style.setProperty('--color-texto', '#ffffff');

// Guardar la preferencia del usuario para que persista entre visitas
localStorage.setItem('tema', 'oscuro');
const temaGuardado = localStorage.getItem('tema');

// Función reutilizable de cambio de tema
function cambiarTema(tema) {
    document.body.classList.remove('claro', 'oscuro');
    document.body.classList.add(tema);
    localStorage.setItem('tema-activo', tema);
}
```

`matchMedia` permite a JavaScript leer configuraciones del sistema operativo/navegador (como "modo oscuro activado"). `localStorage` es un almacenamiento simple del navegador que **persiste** aunque el usuario cierre la pestaña o el navegador — por eso sirve para "recordar" que el usuario prefiere el tema oscuro la próxima vez que visite la página.

### 2.19 Contador interactivo, toggle y texto dinámico (ejercicios guiados)

```js
// Contador
let contador = 0;
const numeroContador = document.getElementById('numero-contador');
const btnAumentar = document.getElementById('btn-aumentar');

function actualizarContador() {
    numeroContador.textContent = contador;
}

btnAumentar.addEventListener('click', () => {
    contador++;
    actualizarContador();
});
```

```js
// Toggle mostrar/ocultar
const btnToggle = document.getElementById('btn-toggle');
const cajaOculta = document.getElementById('caja-oculta');

btnToggle.addEventListener('click', () => {
    if (cajaOculta.style.display === 'none') {
        cajaOculta.style.display = 'block';
        btnToggle.textContent = 'Ocultar';
    } else {
        cajaOculta.style.display = 'none';
        btnToggle.textContent = 'Mostrar';
    }
});
```

```js
// Texto dinámico en tiempo real
const inputTexto = document.getElementById('input-texto');
const textoDinamico = document.getElementById('texto-dinamico');

inputTexto.addEventListener('input', () => {
    textoDinamico.textContent = inputTexto.value || 'Tu texto aparecerá aquí';
});
```

El patrón común a los tres ejercicios: **seleccionar** el elemento una sola vez (fuera del listener, para no repetir la búsqueda en cada clic), **escuchar** un evento, y **actualizar** el DOM dentro del callback según el nuevo estado.

### 2.20 Manejo de teclado para una calculadora

```js
document.addEventListener('keydown', (e) => {
    const display = document.getElementById('resultado');

    if (e.key >= '0' && e.key <= '9') {
        agregarNumero(e.key);
    } else if (e.key === '/') {
        e.preventDefault(); // Evita que el navegador abra su buscador rápido con "/"
        agregarOperador('/');
    } else if (e.key === 'Enter' || e.key === '=') {
        calcular();
    } else if (e.key === 'Backspace') {
        borrarUltimo();
    }
});
```

Aquí `event.key` permite distinguir exactamente qué tecla se presionó, y `event.preventDefault()` se usa para evitar comportamientos por defecto del navegador que interferirían con la funcionalidad de la calculadora (como que `/` abra la búsqueda rápida en Firefox).

---

## 3. Glosario de conceptos clave

| Término | Definición corta |
|---|---|
| **DOM** | Representación en memoria, como árbol de nodos, del documento HTML que el navegador puede manipular |
| **Nodo (node)** | Cada unidad individual del árbol del DOM (un elemento, un texto, un comentario) |
| **NodeList** | Colección de nodos devuelta por `querySelectorAll`, estática (no se actualiza sola) |
| **HTMLCollection** | Colección de elementos devuelta por métodos clásicos (`getElementsBy...`), "viva" (se actualiza sola) |
| **Evento (event)** | Una acción o suceso que ocurre en la página (clic, tecla, envío de formulario) que JS puede "escuchar" |
| **Listener (escuchador)** | Función que se ejecuta automáticamente cuando ocurre un evento específico |
| **Callback** | Función que se pasa como argumento para ser ejecutada más adelante (ej. dentro de `addEventListener`) |
| **Bubbling (burbujeo)** | Propagación de un evento desde el elemento donde ocurrió hacia sus elementos padres |
| **DOMContentLoaded** | Evento que se dispara cuando el navegador terminó de construir el DOM |
| **Traversal (recorrido)** | Navegar entre nodos relacionados del DOM (padres, hijos, hermanos) |
| **localStorage** | Almacenamiento del navegador que persiste datos incluso después de cerrar la pestaña |
| **matchMedia** | API que permite consultar configuraciones del sistema/navegador desde JS (ej. modo oscuro) |

---

## 4. ¿Para qué sirve cada concepto en la práctica real?

- **DOM** → es la base de toda página interactiva: sin él, JavaScript no podría "ver" ni cambiar lo que hay en pantalla.
- **querySelector/querySelectorAll** → forma moderna y flexible de encontrar exactamente el/los elemento(s) que necesitas modificar.
- **NodeList vs HTMLCollection** → entender la diferencia evita bugs sutiles al iterar colecciones o al esperar que una lista se actualice sola.
- **textContent/innerHTML** → decidir cuál usar protege tu aplicación de vulnerabilidades (ver excepción de seguridad) y evita bugs de renderizado.
- **classList** → permite cambiar el "estado visual" de un elemento (activo, oculto, seleccionado) sin escribir CSS línea por línea desde JS.
- **setAttribute/getAttribute** → esenciales para trabajar con atributos personalizados (`data-*`), muy usados para guardar información en el propio HTML.
- **createElement + appendChild** → permite generar interfaces dinámicas (listas de tareas, galerías, resultados de búsqueda) sin recargar la página.
- **Traversal (parentElement, children, siblings)** → útil cuando necesitas modificar un elemento "relacionado" a otro sin tener que seleccionarlo de nuevo desde cero.
- **addEventListener + event** → es el mecanismo central de toda interactividad: sin eventos, una página es solo un documento estático.
- **DOMContentLoaded** → evita el error clásico de "mi código no encuentra el elemento", garantizando que el HTML ya está listo.
- **Dark Mode + localStorage** → aplicación real y muy común: mejorar la experiencia de usuario y recordar sus preferencias entre visitas.

---

## 5. Ejemplos abstractos

### 5.1 Fijos del lenguaje/API del DOM (NO se pueden renombrar — son parte del estándar del navegador)

```js
document.getElementById([id_1]);
document.querySelector([selector_1]);
document.querySelectorAll([selector_1]);
document.createElement([tipo_etiqueta_1]);

[elemento_1].addEventListener([tipo_evento_1], [funcion_callback_1]);
[elemento_1].classList.add([nombre_clase_1]);
[elemento_1].setAttribute([nombre_atributo_1], [valor_1]);
[elemento_1].textContent = [valor_1];
[elemento_1].appendChild([elemento_2]);
```

- `getElementById`, `querySelector`, `querySelectorAll`, `createElement`, `addEventListener`, `classList`, `setAttribute`, `textContent`, `appendChild` → **nombres de métodos/propiedades fijos** de la API del DOM, no se inventan ni se traducen.
- `[id_1]`, `[selector_1]`, `[tipo_etiqueta_1]`, `[nombre_clase_1]`, `[nombre_atributo_1]`, `[valor_1]` → valores que el estudiante elige (strings que dependen del HTML que haya escrito).
- `[tipo_evento_1]` → debe ser uno de los eventos reales que reconoce el navegador (`click`, `submit`, `input`...), **no** un nombre inventado libremente.

### 5.2 Reutilizables / renombrables por el estudiante

```js
const [nombre_variable_1] = document.getElementById([id_1]);

[nombre_variable_1].addEventListener('click', () => {
  [nombre_variable_1].textContent = [nuevo_valor_1];
});
```

- `[nombre_variable_1]` → el estudiante elige el nombre (ej. `boton`, `contador`, `caja`); **puede repetirse** el patrón de declarar variables tantas veces como elementos necesite seleccionar, pero cada nombre de variable debe ser único dentro de su mismo alcance (scope).
- `[id_1]` → debe coincidir exactamente con el `id` real definido en el HTML (Clase 4); si no coincide, el resultado es `null` (ver excepciones).
- `[nuevo_valor_1]` → contenido libre definido por el estudiante.

### 5.3 Tabla resumen de "qué se puede renombrar"

| Elemento | ¿Se puede renombrar? | ¿Se puede repetir? |
|---|---|---|
| Nombre de método del DOM (`getElementById`, `addEventListener`...) | ❌ No, es fijo de la API | ✅ Sí, se usa tantas veces como se necesite |
| Tipo de evento (`'click'`, `'submit'`...) | ❌ No, debe ser uno reconocido por el navegador | ✅ Sí, en distintos elementos |
| Nombre de variable que guarda un elemento seleccionado | ✅ Sí, lo elige el estudiante | ⚠️ Debe ser único en su scope |
| Valor de `id`/selector pasado como argumento | ✅ Sí, pero debe coincidir con el HTML real | ✅ Sí, en distintas llamadas |
| Nombre de la función callback | ✅ Sí (si se declara aparte, no es anónima) | ✅ Sí, se puede reutilizar en varios listeners |

---

## 6. Excepciones y casos especiales

1. **Elemento `null` si el script corre antes de tiempo**: si el `<script>` se ejecuta antes de que el navegador haya parseado el HTML correspondiente, `document.getElementById('algo')` devuelve `null`, y cualquier intento de usar `.textContent` u otro método sobre ese `null` lanza un error (`Cannot read properties of null`). Solución: usar `DOMContentLoaded` o colocar el script al final del `<body>`.
2. **Riesgo de seguridad de `.innerHTML`**: si insertas contenido que viene de un usuario (por ejemplo, un comentario) directamente con `.innerHTML`, y ese contenido incluye código `<script>` malicioso, el navegador **lo ejecutará** — esto se conoce como una vulnerabilidad de tipo XSS (Cross-Site Scripting). Por eso, cuando el contenido no es HTML controlado por ti, se prefiere `.textContent`.
3. **NodeList vs Array real**: una `NodeList` (de `querySelectorAll`) tiene `.forEach()`, pero **no** tiene automáticamente todos los métodos de array como `.map()` o `.filter()`; para usarlos hay que convertirla explícitamente con `Array.from()` o el operador spread `[...nodeList]`.
4. **HTMLCollection "viva"**: si iteras una `HTMLCollection` con un bucle `for` clásico mientras agregas o quitas elementos del DOM al mismo tiempo, la colección cambia de tamaño **durante** la iteración, lo que puede saltarse elementos o causar bucles inesperados.
5. **`firstChild` vs `firstElementChild`**: `firstChild` puede devolver un nodo de texto invisible (como un salto de línea entre etiquetas en el HTML), no necesariamente el primer elemento HTML visual — una fuente de confusión común.
6. **`event.preventDefault()` no detiene la propagación**: evita el comportamiento *por defecto* del navegador (como recargar la página), pero **no** detiene que el evento siga burbujeando hacia los elementos padres; para eso se necesita `event.stopPropagation()` (tema que se profundiza más adelante).
7. **`localStorage` solo almacena strings**: si guardas un objeto o array, debes convertirlo con `JSON.stringify()` antes de guardarlo y `JSON.parse()` al leerlo; guardarlo directamente lo convierte silenciosamente en el string `"[object Object]"`.
8. **`matchMedia` refleja la preferencia del sistema, no la del usuario en tu web**: si el usuario cambia manualmente el tema en tu página, esa preferencia debe guardarse aparte (ej. en `localStorage`), porque `matchMedia` seguirá reportando la configuración del sistema operativo, no la elegida dentro de tu app.

---

## 7. Metáforas y ejemplos visuales

- **DOM** → es como el **plano arquitectónico convertido en una maqueta física y editable**: el HTML es el plano en papel (fijo), el DOM es la maqueta que puedes tocar, mover y modificar en tiempo real sin reimprimir el plano.
- **NodeList vs HTMLCollection** → una `NodeList` (de `querySelectorAll`) es como una **foto** tomada en un instante: aunque después cambien las personas en la sala, la foto no cambia. Una `HTMLCollection` es como mirar por una **ventana en vivo**: si algo cambia en la sala, lo ves reflejado al instante.
- **textContent vs innerHTML** → `textContent` es como **leerle un mensaje de texto a alguien en voz alta, tal cual está escrito** (aunque tenga símbolos raros, los lee literalmente); `innerHTML` es como **entregarle una hoja con instrucciones de formato** que la persona sigue al pie de la letra (incluyendo instrucciones peligrosas si vienen de un desconocido).
- **addEventListener** → es como **contratar a un vigilante que espera pacientemente** junto a una puerta (el elemento) y solo actúa cuando ocurre exactamente lo que le dijiste que vigile (el tipo de evento).
- **Bubbling (burbujeo)** → una piedra cayendo en un estanque: el golpe inicial (el evento) ocurre en un punto exacto, pero las ondas (la propagación) se expanden hacia afuera, pasando también por los círculos concéntricos más grandes (los elementos padres).
- **DOMContentLoaded** → es como **esperar a que terminen de armar todos los muebles de una casa antes de empezar a decorarla**: si intentas colgar un cuadro en una pared que aún no han construido, simplemente no hay dónde colgarlo.
- **createElement + appendChild** → `createElement` es **fabricar una pieza de LEGO nueva en tu mano**; mientras no la conectes a la estructura principal (`appendChild`), esa pieza no forma parte visible de la construcción.
- **localStorage** → es como **dejar una nota pegada en el refrigerador** que sigue ahí incluso si sales de la casa y vuelves días después, a diferencia de una nota que sostienes en la mano y se pierde apenas sueltas.

---

## 8. Errores típicos de un junior

1. **Seleccionar un elemento antes de que exista**: escribir `document.getElementById(...)` en la parte superior del `<head>` sin esperar `DOMContentLoaded`, obteniendo `null`.
2. **Confundir `innerText` con `innerHTML`**: usar `innerHTML` para insertar texto simple, exponiéndose sin necesidad a riesgos de seguridad o comportamientos inesperados si el texto contiene símbolos como `<` o `>`.
3. **Olvidar `event.preventDefault()` en formularios**: al no prevenir el comportamiento por defecto de `submit`, la página se recarga inesperadamente y se pierde cualquier estado de JavaScript.
4. **Iterar una `HTMLCollection` con `.forEach()` directamente**, sin convertirla antes con `Array.from()`, provocando un error porque ese método no existe ahí.
5. **Modificar `.style.propiedad` con guiones en vez de camelCase** (`elemento.style.background-color` en vez de `elemento.style.backgroundColor`), lo cual produce un error de sintaxis en JS.
6. **Pensar que `createElement` ya inserta el elemento en la página**, olvidando el `appendChild` (o similar) necesario para que sea visible.
7. **Confundir `firstChild` con `firstElementChild`** y sorprenderse al obtener un nodo de texto vacío en vez del primer elemento esperado.
8. **Guardar un objeto directamente en `localStorage`** sin `JSON.stringify()`, y luego no entender por qué al leerlo aparece como `"[object Object]"`.
9. **No verificar que el elemento seleccionado no sea `null`** antes de usarlo, provocando errores en tiempo de ejecución difíciles de rastrear.
10. **Agregar múltiples `addEventListener` idénticos por accidente** (por ejemplo, dentro de un bucle mal controlado), causando que una misma acción del usuario dispare el callback varias veces.

---

## 9. Preguntas de autoevaluación

1. ¿Puedo explicar qué es el DOM y por qué es distinto del archivo HTML original?
2. ¿Puedo nombrar al menos 3 formas de seleccionar elementos y decir cuál es la más moderna y flexible?
3. ¿Puedo explicar la diferencia entre `NodeList` y `HTMLCollection`, incluyendo cuál es "viva" y cuál no?
4. ¿Puedo explicar la diferencia entre `textContent`, `innerText` e `innerHTML`, y cuándo cada una es riesgosa?
5. ¿Sé usar `classList.add/remove/toggle/contains` sin mirar la documentación?
6. ¿Puedo explicar por qué `createElement` no muestra nada hasta que uso `appendChild`?
7. ¿Puedo explicar qué hace `event.preventDefault()` y dar un ejemplo real donde sea necesario?
8. ¿Entiendo qué es el bubbling de eventos y puedo dar un ejemplo simple con un padre y un hijo?
9. ¿Puedo explicar por qué `DOMContentLoaded` evita el problema de seleccionar un elemento que "no existe todavía"?
10. ¿Puedo escribir de memoria un event listener de `click` que modifique el texto de otro elemento?
11. ¿Sé explicar para qué sirve `localStorage` y qué limitación tiene con los tipos de datos que guarda?
12. ¿Puedo combinar un bucle `for` con `createElement` y un `if/else` para generar elementos dinámicos con distinta clase CSS según una condición?

---

## 10. Checklist final de dominio

- [ ] Entiendo qué es el DOM y cómo se relaciona (y se diferencia) del HTML original
- [ ] Puedo seleccionar elementos usando `getElementById`, `querySelector` y `querySelectorAll`
- [ ] Entiendo la diferencia entre `NodeList` y `HTMLCollection`
- [ ] Sé modificar contenido con `textContent` e `innerHTML`, sabiendo cuándo cada uno es apropiado
- [ ] Domino la manipulación de clases con `classList` (`add`, `remove`, `toggle`, `contains`)
- [ ] Sé leer, escribir y eliminar atributos con `getAttribute`/`setAttribute`/`removeAttribute`
- [ ] Puedo crear elementos con `createElement` y agregarlos al DOM con `appendChild`
- [ ] Sé navegar por el DOM usando `parentElement`, `children` y los hermanos (`nextElementSibling`)
- [ ] Puedo agregar y manejar eventos con `addEventListener`, usando el objeto `event`
- [ ] Entiendo qué es `event.preventDefault()` y cuándo se necesita
- [ ] Entiendo el concepto básico de bubbling (propagación de eventos)
- [ ] Sé por qué y cómo usar `DOMContentLoaded`
- [ ] Puedo implementar una funcionalidad básica de Dark Mode/Light Mode con `localStorage`
- [ ] Puedo combinar selección + eventos + modificación del DOM para crear una pequeña interacción completa (contador, toggle, texto dinámico)

---

## Nota final
Todos los ejemplos de código en este documento son sintácticamente correctos y ejecutables en cualquier navegador moderno. Algunos aspectos (por ejemplo, si el instructor exige un patrón específico de organización de archivos JS, o el uso de frameworks adicionales) **pueden variar según tu plataforma o academia**; ante la duda, consulta el material oficial de tu curso o a tu formador.

**Siguiente clase (Clase 6):** Maquetación avanzada con CSS — Flexbox y Grid para layouts complejos y responsivos.
