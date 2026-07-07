# Clase 2: Algoritmos, Tipado y Fundamentos de JavaScript

**Curso:** JavaScript MEAN Mastery — Módulo 1 Unidad 1
**Formador:** Steven Zuluaga Cortés
**Duración:** 3 horas

---

## 1. Índice de subtemas

1. MongoDB Atlas: creación de cluster, usuario de base de datos y acceso de red
2. MongoDB Compass: instalación y conexión al cluster
3. Qué es un algoritmo y el patrón Entrada → Proceso → Salida
4. Características de un buen algoritmo
5. Algoritmos en la vida cotidiana (casos reales)
6. Tipado débil (JavaScript) vs tipado fuerte (Java) vs TypeScript
7. Historia de JavaScript
8. Variables: `var`, `let`, `const` y scope de bloque
9. Tipos de datos primitivos y de referencia
10. Operadores: aritméticos, asignación, comparación, lógicos, incremento/decremento
11. Funciones: declaración, expresión, arrow function, parámetros por defecto y rest
12. Funciones con y sin retorno explícito

---

## 2. Explicación detallada por subtema

### 2.1 MongoDB Atlas — cluster, usuario y acceso de red
MongoDB Atlas es la plataforma en la nube oficial de MongoDB. El flujo completo para dejar un cluster listo para usarse desde código es:

1. **Crear cuenta:** registro con correo, contraseña, verificación por email.
2. **Crear un Deployment:** se elige la opción **M0 Free** (capa gratuita para desarrollo), un proveedor de nube (AWS, Azure o GCP) y una región cercana. El cluster tarda 2-3 minutos en aprovisionarse.
3. **Database Access:** se crea un **usuario de base de datos** (usuario + contraseña) — esto es distinto de tu cuenta de Atlas, es la credencial que usará tu aplicación para conectarse.
4. **Network Access:** se añade la IP desde la que te vas a conectar, o se permite `0.0.0.0/0` (cualquier IP) para facilitar el desarrollo — en producción esto se restringe.
5. **Connect → Drivers → Node.js:** Atlas genera una URI de conexión lista para copiar, donde solo hay que reemplazar `<username>` y `<password>`:

```
mongodb+srv://usuario:contraseña@cluster.mongodb.net/miBaseDatos?retryWrites=true&w=majority
```

### 2.2 MongoDB Compass
Compass es el cliente **gráfico** oficial de MongoDB: permite ver bases de datos, colecciones y documentos sin escribir comandos.

Flujo: descargar e instalar según el sistema operativo → abrir Compass → "New Connection" → pegar la URI completa (la misma que usarías en el código) → Connect.

Con Compass puedes navegar visualmente: base de datos → colección → documentos, y aplicar filtros o ver estadísticas, algo útil para verificar que tus datos se estén guardando bien sin necesidad de imprimir todo por consola.

### 2.3 Qué es un algoritmo
Un algoritmo es un **conjunto ordenado y finito de pasos** que resuelve un problema o alcanza un objetivo. Todo algoritmo sigue el patrón:

```
ENTRADA → PROCESO → SALIDA
```

Ejemplo mínimo: calcular el promedio de 7, 8 y 9 → sumar (24) → dividir entre 3 → salida: 8.

Este patrón (a veces llamado **EPS**: Entrada, Proceso, Salida) es la forma más básica de pensar cualquier función que programes: qué recibe, qué hace con eso, y qué entrega al final.

### 2.4 Características de un buen algoritmo

| Característica | Qué significa |
|---|---|
| Precisión | Cada paso es claro, sin ambigüedad |
| Finitud | Termina en un número finito de pasos (no se cuelga para siempre) |
| Efectividad | Cada operación es realmente ejecutable |
| Generalidad | Resuelve el problema para cualquier entrada válida, no solo un caso puntual |
| Eficiencia | Usa pocos recursos de tiempo y memoria |

### 2.5 Algoritmos en la vida cotidiana
El patrón Entrada → Proceso → Salida aparece en sistemas que usas todos los días:
- **GPS:** ubicación + destino → calcula rutas → entrega ruta optimizada
- **Login:** usuario + contraseña → verifica y compara → acceso permitido/denegado
- **Recomendaciones (Netflix, Amazon):** historial → analiza patrones → lista de sugerencias
- **Ordenamiento:** lista desordenada → compara e intercambia → lista ordenada
- **Diagnóstico médico asistido:** síntomas → compara con base de datos → posible diagnóstico

Ver estos ejemplos ayuda a notar que "algoritmo" no es algo abstracto de matemáticas — es literalmente cualquier función que escribas en este curso.

### 2.6 Tipado: JavaScript vs Java vs TypeScript

**JavaScript — débilmente tipado (dinámico):** una misma variable puede cambiar de tipo en tiempo de ejecución, y el tipo no se declara de antemano.

```js
let variable = 10;            // number
console.log(typeof variable); // "number"

variable = "Hola";            // ahora string
console.log(typeof variable); // "string"

let resultado = 5 + "5";      // coerción automática
console.log(resultado);       // "55"
```

**Java — fuertemente tipado (estático):** el tipo se declara y se fija; se verifica en tiempo de **compilación**, antes de ejecutar el programa.

```java
int numero = 10;
numero = "Hola"; // ERROR de compilación: incompatible types
```

**TypeScript — tipado estático sobre JavaScript:** añade la seguridad de Java sin perder la sintaxis de JS.

```ts
let numero: number = 10;
numero = "Hola"; // ERROR en tiempo de compilación

interface Usuario {
  nombre: string;
  edad: number;
}
```

| Aspecto | JavaScript | Java |
|---|---|---|
| Tipado | Débil (dinámico) | Fuerte (estático) |
| Compilación | Interpretado (runtime) | Compilado (compile-time) |
| Declaración de tipos | Opcional | Obligatoria |
| Cambio de tipo | Permitido | No permitido |
| Detección de errores | En ejecución | En compilación |
| Uso principal | Web (frontend/backend) | Aplicaciones empresariales |

### 2.7 Historia de JavaScript
Brendan Eich creó JavaScript en 1995, en solo 10 días, trabajando en Netscape. Se llamó primero **Mocha**, luego **LiveScript**, y se renombró a **JavaScript** como estrategia de marketing (Java estaba en auge, pero no tienen relación técnica directa). En 1997 se estandarizó como **ECMAScript**, y en 2015 llegó **ES6/ES2015**, la versión que introdujo la sintaxis moderna (`let`, `const`, arrow functions, template literals, etc.) que se usa en este curso.

### 2.8 Variables: `var`, `let`, `const`

```js
var nombre = "Juan";   // scope de función, evitar en código moderno
let edad = 25;         // scope de bloque, reasignable
const ciudad = "Medellín"; // scope de bloque, NO reasignable
```

La diferencia clave es el **scope de bloque**: `let` y `const` solo existen dentro de las llaves `{ }` donde se declaran; `var` "se escapa" del bloque.

```js
if (true) {
  var a = 1;   // accesible fuera del bloque
  let b = 2;   // NO accesible fuera del bloque
}
console.log(a); // 1
console.log(b); // ReferenceError
```

Recomendación práctica: `const` por defecto, `let` cuando necesites reasignar, evitar `var`.

### 2.9 Tipos de datos

**Primitivos:**
```js
let texto = "Hola, mundo";          // string
let template = `Hola, ${texto}`;    // template literal
let entero = 42;                    // number
let decimal = 3.14;                 // number
let noEsNumero = NaN;               // number (caso especial)
let esActivo = true;                // boolean
let variable;                       // undefined (declarada, sin valor)
let valor = null;                   // null (ausencia intencional de valor)
```

**Por referencia:**
```js
let usuario = { nombre: "Juan", edad: 25 };  // object
let numeros = [1, 2, 3, 4, 5];               // array (internamente, un objeto)
```

Verificación de tipo con `typeof` — importante notar que `typeof` sobre un array devuelve `"object"`, no `"array"` (no existe un tipo `"array"` como tal en `typeof`).

### 2.10 Operadores

**Aritméticos:** `+ - * / % **` (el `%` es el residuo/módulo, `**` es potencia).

**Asignación:** `= += -= *= /= %=` — cada uno es un atajo de "operar y volver a asignar a la misma variable".

**Comparación:**
```js
let a = 5;
let b = "5";
console.log(a == b);  // true  → compara con coerción de tipos
console.log(a === b); // false → compara valor Y tipo, sin coerción
```
Por eso se recomienda **siempre usar `===`**: evita que JavaScript "adivine" una equivalencia que en realidad no existe.

**Lógicos:** `&&` (AND), `||` (OR), `!` (NOT) — se usan constantemente en condicionales.

**Incremento/decremento:**
```js
let a = 5;
console.log(++a); // 6 → incrementa ANTES de mostrar (pre-incremento)
console.log(a++); // 6 → muestra ANTES de incrementar (post-incremento)
console.log(a);   // 7
```

### 2.11 Funciones: formas de declararlas

```js
// Declaración tradicional
function saludar(nombre) {
  return `Hola, ${nombre}`;
}

// Expresión de función
const sumar = function(a, b) {
  return a + b;
};

// Arrow function
const multiplicar = (a, b) => {
  return a * b;
};

// Arrow function corta (retorno implícito)
const cuadrado = x => x * x;
```

**Parámetros por defecto:**
```js
function crearSaludo(nombre = "Amigo", saludo = "Hola") {
  return `${saludo}, ${nombre}`;
}
```

**Parámetros rest** (recibir cualquier cantidad de argumentos como array):
```js
function sumarTodos(...numeros) {
  let total = 0;
  for (let num of numeros) {
    total += num;
  }
  return total;
}
sumarTodos(1, 2, 3, 4, 5); // 15
```

### 2.12 Retorno de valores

```js
function calcularEdad(anioNacimiento) {
  const anioActual = 2025;
  return anioActual - anioNacimiento;
}

// Una función SIN return explícito devuelve undefined
function mostrarMensaje(texto) {
  console.log(texto);
}
let resultado = mostrarMensaje("Hola"); // imprime "Hola"
console.log(resultado); // undefined
```

---

## 3. Conceptos clave (glosario)

| Término | Definición |
|---|---|
| **Cluster (MongoDB Atlas)** | Instancia de base de datos alojada en la nube |
| **Compass** | Cliente gráfico de MongoDB para explorar datos sin comandos |
| **Algoritmo** | Conjunto ordenado y finito de pasos que resuelve un problema |
| **EPS** | Regla mnemotécnica: Entrada, Proceso, Salida |
| **Tipado débil/dinámico** | El tipo de una variable puede cambiar en tiempo de ejecución (JavaScript) |
| **Tipado fuerte/estático** | El tipo se declara y no cambia; se verifica en compilación (Java) |
| **Coerción de tipos** | Conversión automática e implícita de un tipo a otro que hace JavaScript |
| **Scope** | El "alcance" o zona del código donde una variable es visible/accesible |
| **Hoisting** | Comportamiento de JS de "elevar" declaraciones al inicio de su scope antes de ejecutar |
| **Parámetro rest** | Sintaxis `...nombre` que agrupa argumentos extra en un array |
| **Template literal** | Cadena de texto con backticks que permite interpolar variables con `${}` |

---

## 4. ¿Para qué sirve cada concepto?

- **MongoDB Atlas/Compass** → tener una base de datos real en la nube y poder inspeccionarla visualmente mientras programas, sin depender solo de la consola.
- **Pensar en algoritmos (EPS)** → estructurar cualquier función que escribas: primero identificar qué entra, qué se procesa, qué sale.
- **Entender el tipado débil de JS** → anticipar errores de coerción antes de que ocurran, y entender por qué TypeScript (Clase 7) va a "arreglar" este problema.
- **Variables con scope correcto** → evitar bugs donde una variable "se filtra" fuera de donde debería existir.
- **Operadores de comparación estricta (`===`)** → escribir condicionales confiables, sin sorpresas de coerción.
- **Funciones con parámetros por defecto/rest** → escribir funciones más flexibles y reutilizables.

---

## 5. Ejemplos abstractos

```js
let [variable_1] = [valor_1];
const [variable_2] = [valor_2];
```
- `let`, `const` → palabras reservadas, **fijas**
- `[variable_1]`, `[valor_1]` → nombres/valores elegidos por el estudiante, reutilizables

```js
function [nombre_funcion]([parametro_1] = [valor_defecto]) {
  return [parametro_1];
}
```
- `function`, `return` → sintaxis fija del lenguaje
- `[nombre_funcion]`, `[parametro_1]`, `[valor_defecto]` → definidos por el estudiante; el nombre de la función se puede reutilizar/llamar tantas veces como se necesite, siempre igual

```js
console.log(typeof [variable_1]);
```
- `console.log`, `typeof` → métodos/operadores fijos del lenguaje/entorno
- `[variable_1]` → cualquier variable que quieras inspeccionar

```js
function [nombre](...[lista_de_argumentos]) {
  // [lista_de_argumentos] se comporta como un array
}
```
- La sintaxis `...` (rest) es fija; el nombre que le des al parámetro rest sí lo eliges tú

---

## 6. Excepciones y casos especiales

- **`typeof` con arrays:** `typeof [1,2,3]` devuelve `"object"`, no `"array"` — para verificar si algo es array se usa `Array.isArray()`, no `typeof`.
- **`var` y scope de función, no de bloque:** una variable `var` declarada dentro de un `if` sigue existiendo fuera del bloque — esto rompe la intuición de bloque y es la razón principal por la que se evita en código moderno.
- **`==` vs `===`:** `5 == "5"` es `true` por coerción, pero `5 === "5"` es `false` — la coerción de `==` puede generar bugs silenciosos difíciles de detectar.
- **`const` con objetos/arrays:** `const` impide **reasignar** la variable completa, pero SÍ permite modificar el contenido interno de un objeto o array (ej. `const arr = [1,2]; arr.push(3)` es válido).
- **Función sin `return`:** siempre devuelve `undefined`, aunque internamente haga `console.log` o cualquier otra acción — es un error común pensar que "hacer algo" en la función equivale a "devolver algo".
- **Pre vs post incremento:** `++a` y `a++` dan el mismo resultado final, pero el **valor que se muestra en ese instante** es distinto — una fuente común de confusión en principiantes.

---

## 7. Metáfora o ejemplo visual

- **Algoritmo (EPS)** = una receta de cocina: los **ingredientes** son la entrada, los **pasos de preparación** son el proceso, y el **plato terminado** es la salida.

- **Tipado débil vs fuerte** = JavaScript es como una caja que puede contener cualquier cosa y cambiar de contenido libremente (una caja de mudanza reutilizable); Java es como un casillero etiquetado que solo acepta un tipo específico de objeto, y si intentas meter otra cosa, no cierra.

- **MongoDB Compass** = un explorador de archivos (como el Finder o el Explorador de Windows), pero para bases de datos: te deja navegar carpetas (bases de datos), subcarpetas (colecciones) y archivos (documentos) sin escribir comandos.

- **Scope de bloque (`let`/`const`)** = un cuarto con puerta que se cierra: lo que pasa dentro del cuarto (el bloque `{ }`) se queda ahí. `var` sería un cuarto sin puerta: lo que pasa dentro se puede ver también desde afuera.

---

## 8. Errores típicos de un junior

- Confundir `==` con `===` y no entender por qué una comparación "rara" da `true`
- Usar `var` por costumbre y sorprenderse de que una variable "se filtre" fuera de un `if`
- Olvidar el `return` en una función y luego no entender por qué el resultado es `undefined`
- Intentar reasignar una variable `const` y no entender el error (`Assignment to constant variable`)
- Pensar que `typeof miArray` devuelve `"array"` en vez de `"object"`
- No distinguir cuándo usar `let` vs `const` (usar `let` para todo "por si acaso")

---

## 9. Preguntas de autoevaluación

1. ¿Puedo explicar los pasos para crear un cluster gratuito en MongoDB Atlas?
2. ¿Sé para qué sirve MongoDB Compass y en qué se diferencia de Atlas?
3. ¿Puedo explicar el patrón Entrada → Proceso → Salida con un ejemplo propio?
4. ¿Puedo nombrar las 5 características de un buen algoritmo?
5. ¿Entiendo la diferencia entre tipado débil (JS) y tipado fuerte (Java)?
6. ¿Sé explicar qué es la coerción de tipos con un ejemplo?
7. ¿Puedo explicar la diferencia entre `var`, `let` y `const` en cuanto a scope?
8. ¿Sé por qué se prefiere `===` sobre `==`?
9. ¿Puedo escribir una función con parámetros por defecto y otra con parámetros rest?
10. ¿Entiendo por qué una función sin `return` devuelve `undefined`?

---

## 10. Checklist final de dominio

- [ ] Creé un cluster gratuito en MongoDB Atlas y obtuve mi connection string
- [ ] Instalé MongoDB Compass y me conecté exitosamente al cluster
- [ ] Puedo explicar el patrón Entrada → Proceso → Salida con mis propias palabras
- [ ] Entiendo la diferencia entre tipado débil (JS) y tipado fuerte (Java)
- [ ] Puedo declarar variables correctamente con `var`, `let` y `const` sabiendo la diferencia
- [ ] Identifico todos los tipos de datos primitivos y de referencia de JS
- [ ] Uso correctamente operadores aritméticos, de comparación y lógicos
- [ ] Sé escribir funciones en sus tres formas (declaración, expresión, arrow)
- [ ] Entiendo parámetros por defecto y parámetros rest
- [ ] Me siento en confianza de decir que "vi" esta clase completa

---

**Formador:** Steven Zuluaga Cortés
**Contacto:** Academy@devseniorcode.com | www.devseniorcode.com | @devseniorcode
