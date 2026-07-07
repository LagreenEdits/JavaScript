# Clase 3: Estructuras de Control y Bucles en JavaScript

**Curso:** JavaScript MEAN Mastery — Módulo 1 Unidad 1
**Formador:** Steven Zuluaga Cortés
**Duración:** 3 horas
**Nivel:** Junior / principiante absoluto
**Prerrequisito lógico:** Clase 2 (variables, tipos de datos, operadores)

---

## 0. Cómo usar el material de apoyo de esta clase

Antes de entrar en la teoría, así es como está pensado el material práctico de esta clase (carpeta `clases/clase-3/ejercicios/`):

1. Abre `index.html` en el navegador (doble clic o con la extensión **Live Server** de VS Code).
2. **If / Else — Par o impar:** ingresa un número y haz clic en "Comprobar" para ver `if/else` en acción.
3. **Switch — Mensaje por día:** selecciona un día y presiona "Mostrar" para ver un `switch` funcionando.
4. **Bucle For / for...of — Lista dinámica:** añade elementos, filtra o resetea para comparar `for` y `for...of`.
5. **for...in — Propiedades de un objeto:** pulsa "Mostrar propiedades" para ver cómo `for...in` recorre las claves de un objeto.
6. **while / do...while — Contadores:** prueba ambos botones para notar la diferencia entre `while` y `do...while`.
7. Abre `script.js` para leer el código detrás de cada ejemplo y experimenta modificándolo.
8. **Sugerencia:** abre la consola del navegador (F12) para ver errores y probar valores directamente ahí.

> Nota: la estructura exacta de carpetas (`clases/clase-3/ejercicios/`) puede variar según tu plataforma o repositorio de curso — lo importante es el patrón: un `index.html` con controles + un `script.js` con la lógica.

---

## 1. Índice de subtemas

1. Qué son las estructuras de control y por qué existen
2. Condicional `if` / `else if` / `else`
3. Operador ternario (`condicion ? valorSiTrue : valorSiFalse`)
4. Operadores lógicos en condiciones compuestas (`&&`, `||`, `!`) y *short-circuit evaluation*
5. `switch` / `case` / `default` / `break` y el problema del fall-through
6. Bucle `for` clásico (inicialización, condición, incremento)
7. Bucle `while`
8. Bucle `do...while` y su diferencia clave con `while`
9. `for...of` — iterar valores de un iterable
10. `for...in` — iterar propiedades de un objeto (y por qué evitarlo en arrays)
11. `break` y `continue` dentro de bucles
12. Bucles anidados (bucle dentro de bucle)
13. Bucles infinitos: causas comunes y cómo evitarlos
14. Buenas prácticas: qué bucle usar según el caso
15. Aplicación práctica: manipulación del DOM combinando condicionales + bucles

---

## 2. Explicación detallada por subtema

### 2.1 Qué son las estructuras de control y por qué existen

Sin estructuras de control, un programa se ejecutaría siempre de la misma forma, línea por línea, de arriba hacia abajo, sin posibilidad de "decidir" ni de "repetir". Las estructuras de control le dan a tu código dos superpoderes:

- **Decisión:** ejecutar un bloque de código u otro según si una condición es verdadera o falsa (`if`, `switch`, ternario).
- **Repetición:** ejecutar un mismo bloque de código varias veces sin copiarlo y pegarlo manualmente (`for`, `while`, `do...while`, `for...of`, `for...in`).

Todo programa complejo, sin importar el lenguaje, se construye combinando estos dos superpoderes con las variables y funciones que ya viste en la Clase 2.

### 2.2 Condicional `if` / `else if` / `else`

**Uso:** tomar decisiones basadas en condiciones booleanas (`true`/`false`).

```js
const n = 7;
if (n > 0) {
  console.log('positivo');
} else if (n < 0) {
  console.log('negativo');
} else {
  console.log('cero');
}
```

**Cómo funciona internamente:** JavaScript evalúa la condición del `if` de arriba hacia abajo. En cuanto encuentra una condición que se evalúa como "truthy", ejecuta ese bloque y **se salta todo lo demás** (los `else if` y el `else` restantes ni siquiera se evalúan). Si ninguna condición es verdadera, se ejecuta el `else` (si existe).

**Buenas prácticas:**
- Evitar condiciones complejas en una sola línea; si una condición es difícil de leer, extráela a una función con nombre descriptivo (ej. `esMayorDeEdad(persona)` en vez de repetir `persona.edad >= 18` en varios lugares).
- Preferir comparaciones estrictas (`===`) salvo que se requiera coerción explícita (ver Clase 2, sección de operadores).
- Un `if` sin `else` es válido y común: simplemente no hace nada si la condición es falsa.

### 2.3 Operador ternario

**Uso:** una forma corta de escribir un `if/else` simple **que devuelve un valor**, ideal para asignaciones rápidas de una sola línea.

```js
const edad = 20;
const mensaje = (edad >= 18) ? 'Eres mayor de edad' : 'Eres menor de edad';
console.log(mensaje); // "Eres mayor de edad"
```

**Sintaxis:** `condicion ? valorSiTrue : valorSiFalse`

**Cómo funciona:** se evalúa `condicion`; si es verdadera, toda la expresión "vale" `valorSiTrue`; si es falsa, "vale" `valorSiFalse`. A diferencia de `if/else`, el ternario **es una expresión** (produce un valor utilizable), no una instrucción de control pura.

**Cuándo usarlo vs. `if/else`:**
- Ternario → cuando el resultado es un **valor** que quieres asignar o insertar directamente (una clase CSS, un texto, un número).
- `if/else` → cuando necesitas ejecutar **varias líneas** de lógica o efectos secundarios (llamar funciones, modificar múltiples variables).

Ejemplo tomado de un ejercicio real de esta clase, usando el ternario para decidir una clase CSS dentro de un bucle:

```js
const container = document.getElementById('container');
for (let i = 1; i <= 10; i++) {
  const type = (i % 2 === 0) ? 'par' : 'impar';
  const div = document.createElement('div');
  div.classList.add(`square-${type === 'par' ? 'red' : 'blue'}`);
  div.textContent = i;
  container.appendChild(div);
}
```

Aquí hay **dos ternarios anidados dentro de un `for`**: el primero decide si el número es `'par'` o `'impar'`; el segundo, dentro de un template literal, decide si la clase CSS es `square-red` o `square-blue`. Esto demuestra que el ternario puede anidarse, aunque anidar demasiados ternarios reduce la legibilidad (buena práctica: máximo uno anidado, si no, usar `if/else`).

### 2.4 Operadores lógicos en condiciones compuestas y short-circuit evaluation

Ya viste `&&`, `||` y `!` en la Clase 2. Aquí se profundiza su uso **dentro de condicionales compuestas**:

```js
const edad = 25;
const tieneCedula = true;

if (edad >= 18 && tieneCedula) {
  console.log('Puede votar');
}

const esFeriado = false;
const esFinDeSemana = true;

if (esFeriado || esFinDeSemana) {
  console.log('No hay clases hoy');
}

const estaLloviendo = false;
if (!estaLloviendo) {
  console.log('Puedes salir sin paraguas');
}
```

**Short-circuit evaluation (evaluación de cortocircuito):** JavaScript **no evalúa más de lo necesario**:

- Con `&&`: si el primer operando es falso, JS ya sabe que el resultado es falso y **ni siquiera evalúa el segundo operando**.
- Con `||`: si el primer operando es verdadero, JS ya sabe que el resultado es verdadero y **ni siquiera evalúa el segundo operando**.

```js
function log(msg) {
  console.log(msg);
  return true;
}

false && log('esto NO se imprime'); // el && corta antes de llegar a log()
true || log('esto tampoco se imprime'); // el || corta antes de llegar a log()
```

Esto no es solo curiosidad teórica: es la base de patrones muy usados como `usuario && usuario.nombre` (evitar errores si `usuario` es `null`) o `valor || 'valor por defecto'` (asignar un valor por defecto si `valor` es falsy).

### 2.5 `switch` / `case` / `default` / `break`

**Uso:** seleccionar entre múltiples caminos discretos basados en **un mismo valor**, cuando tendrías muchos `else if` seguidos comparando la misma variable.

```js
const dia = 'viernes';
switch (dia) {
  case 'lunes':
    console.log('inicia la semana');
    break;
  case 'viernes':
    console.log('fin de semana cerca');
    break;
  default:
    console.log('día normal');
}
```

**Cómo funciona internamente:** JavaScript compara `dia` con cada `case` usando **igualdad estricta (`===`)**. En cuanto encuentra una coincidencia, ejecuta ese bloque — y **sigue ejecutando los bloques siguientes** a menos que encuentre un `break`, que "corta" la ejecución y saca el flujo del `switch`. El `default` se ejecuta si ninguna coincidencia fue encontrada (equivalente al `else` final de una cadena de `if/else if`).

**El problema del fall-through:** si olvidas el `break`, la ejecución "cae" al siguiente `case` sin verificar su condición:

```js
const dia = 'lunes';
switch (dia) {
  case 'lunes':
    console.log('inicia la semana'); // se imprime
  case 'martes': // no hay break arriba, así que esto TAMBIÉN se ejecuta
    console.log('martes productivo'); // se imprime también, aunque dia sea "lunes"
    break;
  default:
    console.log('día normal');
}
```

A veces el fall-through es **intencional** (varios `case` que comparten el mismo bloque de código):

```js
switch (dia) {
  case 'sabado':
  case 'domingo':
    console.log('es fin de semana'); // se ejecuta para AMBOS casos
    break;
  default:
    console.log('es día de semana');
}
```

Esto es válido y común, pero debe hacerse a propósito, no por olvido.

### 2.6 Bucle `for` clásico

**Uso:** iteraciones donde conoces (o controlas explícitamente) el índice/contador.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

**Anatomía del `for` (tres partes separadas por `;`):**

1. **Inicialización** (`let i = 0`): se ejecuta **una sola vez**, antes de empezar el bucle.
2. **Condición** (`i < 5`): se evalúa **antes de cada iteración**. Si es verdadera, el bucle continúa; si es falsa, el bucle termina.
3. **Incremento/expresión final** (`i++`): se ejecuta **después de cada iteración** del cuerpo del bucle.

**Caso de uso típico:** recorrer arrays usando el índice, construir elementos del DOM con un contador, ejecutar algo "N veces exactas".

### 2.7 Bucle `while`

**Uso:** repetir un bloque mientras una condición sea verdadera; la condición se evalúa **antes** de cada iteración (incluida la primera).

```js
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
```

**Diferencia clave con `for`:** el `while` no tiene una sintaxis fija de tres partes — tú controlas manualmente dónde inicializas la variable y dónde la incrementas. Esto lo hace ideal para casos donde **no sabes de antemano cuántas veces se repetirá** (ej. "repetir hasta que el usuario ingrese un valor válido").

**Peligro:** si la condición nunca se vuelve falsa (por ejemplo, olvidas el `i++`), el bucle se ejecuta para siempre → **bucle infinito** (ver sección 2.13).

### 2.8 Bucle `do...while`

**Uso:** idéntico a `while`, pero garantiza que el cuerpo se ejecute **al menos una vez**, sin importar la condición.

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);
```

**Diferencia clave con `while`:** en `while`, la condición se evalúa **antes** del primer bloque; en `do...while`, la condición se evalúa **después**, es decir, el cuerpo ya se ejecutó una vez cuando se hace la primera verificación.

Ejemplo donde la diferencia se nota claramente:

```js
let i = 10;

while (i < 5) {
  console.log('while:', i); // nunca se imprime, la condición ya es falsa desde el inicio
  i++;
}

do {
  console.log('do...while:', i); // se imprime UNA vez, aunque la condición ya sea falsa
  i++;
} while (i < 5);
```

**Caso de uso típico:** menús interactivos o validaciones donde necesitas mostrar/pedir algo **al menos una vez** antes de decidir si repites.

### 2.9 `for...of`

**Uso:** iterar directamente sobre **los valores** de un iterable (arrays, strings, Map, Set, NodeList del DOM, etc.), sin necesidad de manejar un índice manualmente.

```js
const frutas = ['manzana', 'pera', 'uva'];
for (const f of frutas) {
  console.log(f);
}
```

**Ventaja:** sintaxis limpia cuando no necesitas el índice, solo el valor. También funciona sobre strings, recorriendo carácter por carácter:

```js
for (const letra of 'Hola') {
  console.log(letra); // H, o, l, a
}
```

### 2.10 `for...in`

**Uso:** iterar sobre **las claves** (propiedades enumerables) de un objeto.

```js
const obj = { a: 1, b: 2 };
for (const key in obj) {
  console.log(key, obj[key]);
}
```

**Advertencia importante:** `for...in` itera propiedades enumerables, **incluyendo las heredadas** de la cadena de prototipos (no solo las propias del objeto). Para arrays, **no se recomienda usar `for...in`**: úsalo con objetos "planos" (pares clave-valor) y reserva `for`/`for...of` para arrays.

### 2.11 `break` y `continue` dentro de bucles

Ambas palabras clave alteran el flujo normal de un bucle, pero de forma distinta:

- **`break`**: termina el bucle **por completo**, de inmediato, sin importar cuántas iteraciones faltaban.
- **`continue`**: salta **solo la iteración actual** y pasa directamente a la siguiente evaluación de la condición, sin terminar el bucle completo.

```js
// break: detener la búsqueda apenas se encuentra el número
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // imprime 0, 1, 2, 3, 4 y se detiene
}

// continue: saltar solo los números pares
for (let i = 0; i < 6; i++) {
  if (i % 2 === 0) continue;
  console.log(i); // imprime 1, 3, 5
}
```

Ambos funcionan igual dentro de `for`, `while`, `do...while` y `for...of`/`for...in`.

### 2.12 Bucles anidados

**Uso:** un bucle dentro de otro bucle — el bucle interno se ejecuta **completo** por cada iteración del bucle externo.

```js
for (let fila = 1; fila <= 3; fila++) {
  for (let columna = 1; columna <= 3; columna++) {
    console.log(`Fila ${fila}, Columna ${columna}`);
  }
}
// Se ejecuta 3 x 3 = 9 veces en total
```

**Caso de uso típico:** recorrer estructuras bidimensionales (matrices, tableros, cuadrículas de elementos en el DOM), o combinaciones de dos listas (comparar cada elemento de una lista con cada elemento de otra).

**Nota de rendimiento:** los bucles anidados multiplican el número de iteraciones (si el externo corre `N` veces y el interno `M` veces, el total es `N × M`). Con listas muy grandes, esto puede volverse lento — algo que se profundiza más adelante en el curso al hablar de complejidad algorítmica.

### 2.13 Bucles infinitos: causas comunes y cómo evitarlos

Un bucle infinito ocurre cuando la condición de parada **nunca se vuelve falsa**. Causas típicas:

```js
// 1. Olvidar el incremento/decremento
let i = 0;
while (i < 5) {
  console.log(i);
  // falta i++  →  bucle infinito, i siempre es 0
}

// 2. Condición mal planteada (nunca se cumple)
for (let i = 10; i < 5; i++) {
  console.log(i); // nunca entra, esto NO es infinito, simplemente no se ejecuta nunca
}

// 3. Modificar la variable equivocada dentro del bucle
let contador = 0;
while (contador < 5) {
  let otraVariable = contador + 1; // esto NO modifica "contador"
  console.log(otraVariable);
  // contador nunca cambia → bucle infinito
}
```

**Cómo evitarlos:**
- Verifica siempre que la variable de la condición se modifique dentro del cuerpo del bucle.
- Al usar `while`/`do...while`, revisa mentalmente "¿en qué punto esta condición se vuelve falsa?" antes de ejecutar.
- Si tu navegador o entorno "se congela", es señal de un bucle infinito — en el navegador normalmente puedes cerrar la pestaña o forzar la detención del script.

### 2.14 Buenas prácticas: qué bucle usar según el caso

| Situación | Bucle recomendado |
|---|---|
| Sé exactamente cuántas veces repetir (contador) | `for` |
| Necesito solo los valores de un array/iterable | `for...of` |
| Necesito las claves de un objeto | `for...in` |
| No sé cuántas veces se repetirá, depende de una condición | `while` |
| Necesito ejecutar el bloque al menos una vez sí o sí | `do...while` |
| Necesito recorrer un array transformando/filtrando/sumando | Métodos funcionales (`map`, `filter`, `forEach`, `reduce` — se profundizan más adelante en el curso) |

**Regla general:** evita `for...in` en arrays (puede iterar propiedades heredadas inesperadas y no garantiza el orden); prefiere `for`, `for...of` o métodos funcionales.

### 2.15 Aplicación práctica: condicionales + bucles combinados en el DOM

La combinación más común en el desarrollo web real es **un bucle que genera elementos, decidiendo con un condicional cómo se ve cada uno**. Este es exactamente el patrón usado en los ejercicios de esta clase:

```js
const container = document.getElementById("container");
for (let i = -100; i <= 100; i++) {
  const square = document.createElement("div");
  if (i % 2 === 0) {
    square.classList.add("square-even");
    square.textContent = `🤝 + ${i}`;
  } else {
    square.textContent = `🫂 + ${i}`;
    square.classList.add("square-odd");
  }
  container.appendChild(square);
}
```

Este ejemplo combina prácticamente todo lo visto en la clase:
- Un `for` clásico que controla exactamente cuántas veces se repite (de `-100` a `100`, incluyendo negativos).
- Un `if/else` **dentro** del bucle, que decide, en cada iteración, qué clase CSS y qué contenido de texto recibe el elemento creado.
- Manipulación del DOM (`createElement`, `classList.add`, `textContent`, `appendChild`) que se profundizará en la Clase 5, pero que ya empieza a usarse aquí como aplicación práctica de los bucles.

Compáralo con el primer ejemplo de la sección 2.3 (el de `type = (i % 2 === 0) ? 'par' : 'impar'`): **ambos resuelven el mismo problema** (clasificar números pares/impares dentro de un bucle y aplicar una clase CSS distinta), pero uno usa `if/else` con múltiples líneas y el otro usa el operador ternario en una sola línea. Ver los dos enfoques lado a lado ayuda a entender cuándo conviene cada estilo.

---

## 3. Conceptos clave (glosario)

| Término | Definición |
|---|---|
| **Estructura de control** | Instrucción que altera el flujo lineal de ejecución de un programa (decisión o repetición) |
| **Condicional** | Estructura que ejecuta un bloque de código solo si una condición es verdadera |
| **Operador ternario** | Versión corta de `if/else` que **devuelve un valor**: `condicion ? siTrue : siFalse` |
| **Short-circuit evaluation** | Comportamiento de `&&`/`\|\|` de no evaluar el segundo operando si el resultado ya está determinado por el primero |
| **`switch`** | Estructura que compara un valor contra múltiples `case` posibles |
| **Fall-through** | Cuando la ejecución de un `switch` "cae" al siguiente `case` por falta de `break` |
| **Bucle (loop)** | Estructura que repite un bloque de código mientras se cumpla una condición |
| **Iterable** | Objeto que puede recorrerse elemento por elemento (arrays, strings, Map, Set, NodeList, etc.) |
| **`break`** | Palabra clave que termina un bucle (o un `switch`) de inmediato |
| **`continue`** | Palabra clave que salta la iteración actual de un bucle y continúa con la siguiente |
| **Bucle anidado** | Un bucle completo dentro del cuerpo de otro bucle |
| **Bucle infinito** | Bucle cuya condición de parada nunca se cumple, ejecutándose indefinidamente |
| **Propiedad enumerable** | Propiedad de un objeto que aparece al iterar con `for...in` |

---

## 4. ¿Para qué sirve cada concepto?

- **`if / else if / else`** → tomar decisiones simples o encadenadas basadas en condiciones (la base de toda lógica de negocio).
- **Operador ternario** → escribir asignaciones condicionales cortas y legibles en una sola línea, muy usado al generar clases CSS o textos dinámicos.
- **Operadores lógicos + short-circuit** → construir condiciones compuestas y escribir patrones seguros como valores por defecto (`valor || 'default'`) o acceso protegido (`obj && obj.propiedad`).
- **`switch`** → reemplazar cadenas largas de `else if` cuando comparas la **misma variable** contra múltiples valores discretos (días, roles, estados).
- **`for`** → repetir algo un número exacto de veces, con control total sobre el contador.
- **`while` / `do...while`** → repetir algo mientras se cumpla una condición desconocida de antemano (validaciones, menús, esperar una respuesta).
- **`for...of`** → recorrer valores de arrays/iterables de forma limpia, sin manejar índices manualmente.
- **`for...in`** → inspeccionar las propiedades (claves) de un objeto dinámicamente.
- **`break` / `continue`** → afinar el control dentro de un bucle sin tener que reescribir toda su lógica.
- **Bucles anidados** → resolver problemas que requieren comparar o combinar dos dimensiones de datos (matrices, tableros, pares de listas).
- **Combinar condicionales + bucles en el DOM** → generar interfaces dinámicas (listas, tableros, elementos repetidos) cuyo estilo o contenido cambia según cada elemento — la base de casi cualquier interfaz interactiva real.

---

## 5. Ejemplos abstractos

```js
if ([condicion_1]) {
  [instruccion_1];
} else if ([condicion_2]) {
  [instruccion_2];
} else {
  [instruccion_3];
}
```
- `if`, `else if`, `else` → palabras reservadas, **fijas**
- `{ }` → símbolos de cierre de bloque, **fijos**, obligatorios en su posición
- `[condicion_1]`, `[condicion_2]` → expresiones booleanas que el estudiante define, se pueden repetir tantas veces como `else if` se necesiten
- `[instruccion_1]`, `[instruccion_2]`, `[instruccion_3]` → código definido por el estudiante

```js
const [variable_resultado] = ([condicion]) ? [valor_si_true] : [valor_si_false];
```
- El símbolo `?` y `:` son sintaxis **fija** del operador ternario
- `[variable_resultado]`, `[condicion]`, `[valor_si_true]`, `[valor_si_false]` → definidos por el estudiante

```js
switch ([variable_a_comparar]) {
  case [valor_1]:
    [instruccion_1];
    break;
  case [valor_2]:
    [instruccion_2];
    break;
  default:
    [instruccion_por_defecto];
}
```
- `switch`, `case`, `default`, `break` → palabras reservadas, **fijas**
- `:` después de cada `case`/`default` → sintaxis fija, obligatoria
- `[variable_a_comparar]`, `[valor_1]`, `[valor_2]` → definidos por el estudiante; se pueden agregar tantos `case` como se necesiten
- El `break` se repite **igual** en cada `case` donde no se quiera fall-through — no cambia de forma

```js
for ([inicializacion]; [condicion]; [incremento]) {
  [instruccion_del_bucle];
}
```
- `for` y los dos `;` internos → sintaxis fija, siempre en ese orden y con esa puntuación
- `[inicializacion]`, `[condicion]`, `[incremento]` → definidos por el estudiante (típicamente `let i = 0`, `i < N`, `i++`, pero el nombre de la variable puede cambiar)

```js
while ([condicion]) {
  [instruccion_del_bucle];
}

do {
  [instruccion_del_bucle];
} while ([condicion]);
```
- `while`, `do` → palabras reservadas, **fijas**
- Nótese que en `do...while` el `;` final después de `while([condicion])` es **obligatorio y fijo** — a diferencia del `while` normal
- `[condicion]`, `[instruccion_del_bucle]` → definidos por el estudiante

```js
for (const [nombre_elemento] of [iterable]) {
  [instruccion_del_bucle];
}

for (const [nombre_clave] in [objeto]) {
  [instruccion_del_bucle];
}
```
- `for`, `of`, `in`, `const` → palabras reservadas, **fijas**
- `[nombre_elemento]`, `[nombre_clave]` → el estudiante elige el nombre (convención: singular del nombre del iterable, ej. `fruta` de `frutas`)
- `[iterable]`, `[objeto]` → la variable que se va a recorrer, definida previamente por el estudiante

---

## 6. Excepciones y casos especiales

- **Fall-through intencional en `switch`:** varios `case` seguidos sin `break` entre ellos, compartiendo un mismo bloque de código, es una técnica válida (ej. agrupar `'sabado'` y `'domingo'` como "fin de semana"). El error solo ocurre cuando el fall-through **no es intencional**.
- **`do...while` con condición falsa desde el inicio:** el cuerpo se ejecuta **igual una vez**, aunque la condición ya sea falsa antes de empezar — a diferencia de `while`, que en ese mismo caso no ejecutaría nunca el cuerpo.
- **Bucles infinitos "silenciosos":** una condición que parece correcta pero que modifica la variable equivocada (ver sección 2.13, ejemplo 3) produce un bucle infinito sin ningún error de sintaxis — el código "se ve bien" pero nunca termina.
- **`for...in` con arrays:** técnicamente funciona (los índices de un array son también "claves enumerables"), pero **no se recomienda**: puede iterar propiedades heredadas agregadas al prototipo del array, no garantiza el orden numérico, y devuelve los índices como strings (`"0"`, `"1"`) en vez de números.
- **`break` dentro de bucles anidados:** un `break` dentro del bucle interno **solo rompe el bucle interno**, no el externo — para salir de ambos se necesitan técnicas adicionales (una variable "bandera" o, en casos avanzados, etiquetas `label:` — poco usadas en código moderno, y esto puede variar si tu curso las cubre más adelante).
- **`continue` en `for`:** al usar `continue` dentro de un `for`, el incremento (`i++`) **sí se sigue ejecutando** antes de volver a evaluar la condición — no te saltas el incremento, solo el resto del cuerpo de esa iteración.
- **Ternario anidado:** es válido anidar ternarios (`a ? b : c ? d : e`), pero más de un nivel de anidación reduce mucho la legibilidad; en ese caso, se prefiere `if/else if/else`.

---

## 7. Metáfora o ejemplo visual

- **`if / else if / else`** = un semáforo de decisiones: si está en rojo (condición 1), te detienes; si no, revisas si está en amarillo (condición 2); si tampoco, asumes que está en verde (else) — solo se sigue **un** camino, nunca varios a la vez.

- **Operador ternario** = una bifurcación de un solo carril con letrero: "¿lloviendo? → toma paraguas : toma gafas de sol" — una decisión rápida, de una sola línea, que siempre entrega algo.

- **`switch`** = un casillero de correo con compartimentos etiquetados: la carta (el valor) se coloca directamente en el compartimento (`case`) que coincide con su etiqueta, sin tener que revisar uno por uno con preguntas de sí/no como en el `if`.

- **Fall-through** = un casillero de correo sin separadores entre compartimentos: si no cierras bien la carta en su compartimento (olvidas el `break`), se desliza también hacia los compartimentos siguientes.

- **`for`** = un contador de gimnasio que marca repeticiones: tú defines desde qué número empieza, hasta qué número llega, y de cuánto en cuánto sube — cuando llega al límite, se detiene automáticamente.

- **`while`** = seguir sirviendo agua en un vaso *mientras* no esté lleno: revisas la condición **antes** de cada vez que sirves; si el vaso ya está lleno desde el inicio, nunca sirves nada.

- **`do...while`** = probar un plato de comida *antes* de decidir si pides más: pruebas primero (el cuerpo se ejecuta sí o sí una vez) y **después** decides si continúas repitiendo.

- **`for...of`** = repartir un mazo de cartas boca abajo: solo te importa la carta (el valor), no en qué posición del mazo estaba.

- **`for...in`** = revisar la lista de contenidos de una caja etiquetada (un objeto): te interesan las etiquetas (las claves) para saber qué hay adentro de cada una.

- **Bucle infinito** = una cinta de correr que nunca se apaga porque el botón de "stop" está desconectado: sigue moviéndose para siempre porque nada detiene la condición.

- **Bucles anidados** = un reloj: la manecilla de los segundos (bucle interno) da una vuelta completa por cada paso de la manecilla de los minutos (bucle externo) — el interno se completa entero antes de que el externo avance una sola posición.

---

## 8. Errores típicos de un junior

- Olvidar el `break` en un `switch` y no entender por qué se ejecutan varios `case` seguidos (fall-through no intencional).
- Plantear mal la condición de un bucle (`while (i = 5)` en vez de `while (i === 5)`, usando asignación en vez de comparación) y obtener resultados inesperados o un bucle infinito.
- Confundir `for...in` con `for...of` — usar `for...in` en un array esperando obtener los valores y obtener los índices como strings en su lugar.
- Olvidar el `i++` (o modificar la variable equivocada) dentro de un `while`, provocando un bucle infinito que congela el navegador o la consola.
- Pensar que `continue` "detiene todo el bucle" cuando en realidad solo salta a la siguiente iteración.
- Anidar demasiados ternarios y terminar con una línea imposible de leer, en vez de usar `if/else if/else`.
- Usar `==` en vez de `===` dentro de condiciones (`if (i == '5')`), provocando comparaciones con coerción de tipos no deseada (ver Clase 2).
- En bucles anidados, confundir cuál variable de índice pertenece a cuál bucle (ej. usar `i` en ambos bucles sin darse cuenta del conflicto de nombres, o del bucle interno sobrescribiendo el externo).

---

## 9. Preguntas de autoevaluación

1. ¿Puedo explicar la diferencia entre `if/else` y el operador ternario, y cuándo usar cada uno?
2. ¿Entiendo qué es el short-circuit evaluation y puedo dar un ejemplo con `&&` y otro con `||`?
3. ¿Puedo explicar qué es el fall-through en un `switch` y en qué caso es intencional vs. un error?
4. ¿Sé explicar las tres partes de un `for` clásico (inicialización, condición, incremento) sin mirar el código?
5. ¿Puedo explicar la diferencia exacta entre `while` y `do...while` con un ejemplo donde el resultado sea distinto?
6. ¿Entiendo la diferencia entre `for...of` (valores) y `for...in` (claves), y por qué se evita `for...in` en arrays?
7. ¿Puedo explicar la diferencia entre `break` y `continue` dentro de un bucle?
8. ¿Puedo escribir un bucle anidado y explicar cuántas veces se ejecuta el bucle interno en total?
9. ¿Sé identificar al menos dos causas comunes de un bucle infinito y cómo corregirlas?
10. ¿Puedo explicar con mis propias palabras un ejemplo donde se combine un `for` con un `if/else` dentro para generar elementos del DOM?

---

## 10. Checklist final de dominio

- [ ] Puedo escribir y explicar un `if / else if / else` con al menos tres condiciones
- [ ] Puedo escribir un operador ternario y explicar qué devuelve
- [ ] Entiendo y puedo aplicar short-circuit evaluation con `&&` y `||`
- [ ] Puedo escribir un `switch` completo con `break` en cada `case` y un `default`
- [ ] Identifico y puedo explicar el problema del fall-through
- [ ] Puedo escribir un bucle `for` clásico y explicar sus tres partes
- [ ] Puedo escribir un `while` y un `do...while` y explicar su diferencia con un ejemplo
- [ ] Puedo escribir un `for...of` sobre un array y un `for...in` sobre un objeto
- [ ] Uso correctamente `break` y `continue` dentro de un bucle
- [ ] Puedo escribir un bucle anidado simple (ej. una cuadrícula de filas y columnas)
- [ ] Identifico causas comunes de bucles infinitos y sé cómo evitarlas
- [ ] Puedo combinar un bucle con un condicional dentro para generar elementos dinámicos en el DOM
- [ ] Me siento en confianza de decir que "vi" esta clase completa

---

## 11. Recursos y lectura adicional

- MDN — Control flow: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
- MDN — Loops and iteration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
- Herramientas útiles: VS Code, Node.js
- Plataformas de práctica: CodePen, JSFiddle, HackerRank

> Nota: los enlaces y plataformas sugeridas pueden variar según lo que recomiende tu instructor o plataforma de curso específica.

---

## 12. Próximas clases

| Clase | Tema |
|---|---|
| Clase 4 | Introducción a HTML y CSS |
| Clase 5 | Interactividad con el DOM |

---

**Formador:** Steven Zuluaga Cortés
**Contacto:** Academy@devseniorcode.com | www.devseniorcode.com | @devseniorcode

> Recuerda: la programación es como un idioma — requiere práctica constante. ¡Sigue adelante! 🚀
