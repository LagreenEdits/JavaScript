
// En JavaScript, existen varios tipos de variables básicas que se pueden declarar utilizando let, var o const.

// Estos tipos incluyen:

// TIPOS DE VARIABLES BASICAS CON LET (MODERNAMENTE RECOMENDADO)
let nombre = "Juan"; // String
let edad = 30; // Number or decimal
let esEstudiante = true; // Boolean
let calificaciones = [10, 9, 8]; // Array
let persona = { nombre: "Juan", edad: 30 }; // Object
let fecha = new Date(); // Date
let nulo = null; // Null
let indefinido; // Undefined
let simbolo = Symbol("descripcion"); // Symbol
let bigInt = BigInt(123456789012345678901234567890); // BigInt

//TIPOS DE VARIABLES BASICAS CON VAR (ANTIGUAMENTE RECOMENDADO)
var nombreVar = "Maria"; // String
var edadVar = 25; // Number or decimal
var esEstudianteVar = false; // Boolean
var calificacionesVar = [7, 8, 9]; // Array
var personaVar = { nombre: "Maria", edad: 25 }; // Object
var fechaVar = new Date(); // Date
var nuloVar = null; // Null
var indefinidoVar; // Undefined
var simboloVar = Symbol("otra descripcion"); // Symbol
var bigIntVar = BigInt(987654321098765432109876543210);

// TIPOS DE VARIABLES BASICAS CON CONST (ANTIGUAMENTE RECOMENDADO, PERO AHORA SE RECOMIENDA USAR LET PARA VARIABLES QUE PUEDEN CAMBIAR)
const nombreConst = "Carlos"; // String
const edadConst = 28; // Number or decimal
const esEstudianteConst = true; // Boolean
const calificacionesConst = [10, 9, 8]; // Array
const personaConst = { nombre: "Carlos", edad: 28 }; // Object
const fechaConst = new Date(); // Date
const nuloConst = null; // Null
const indefinidoConst = undefined; // Undefined
const simboloConst = Symbol("descripcion constante"); // Symbol
const bigIntConst = BigInt(123456789012345678901234567890);

// Imprimir los valores de las variables

console.log("Variables con let:");
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Es estudiante:", esEstudiante);
console.log("Calificaciones:", calificaciones);
console.log("Persona:", persona);
console.log("Fecha:", fecha);
console.log("Nulo:", nulo);
console.log("Indefinido:", indefinido);
console.log("Símbolo:", simbolo);
console.log("BigInt:", bigInt);

console.log("\nVariables con var:");
console.log("Nombre:", nombreVar);
console.log("Edad:", edadVar);
console.log("Es estudiante:", esEstudianteVar);
console.log("Calificaciones:", calificacionesVar);
console.log("Persona:", personaVar);
console.log("Fecha:", fechaVar);
console.log("Nulo:", nuloVar);
console.log("Indefinido:", indefinidoVar);
console.log("Símbolo:", simboloVar);
console.log("BigInt:", bigIntVar);

console.log("\nVariables con const:");
console.log("Nombre:", nombreConst);
console.log("Edad:", edadConst);
console.log("Es estudiante:", esEstudianteConst);
console.log("Calificaciones:", calificacionesConst);
console.log("Persona:", personaConst);
console.log("Fecha:", fechaConst);
console.log("Nulo:", nuloConst);
console.log("Indefinido:", indefinidoConst);
console.log("Símbolo:", simboloConst);
console.log("BigInt:", bigIntConst);

// Fin del código
// Este código muestra ejemplos de diferentes tipos de variables en JavaScript utilizando let, var y const.
// Se imprimen los valores de las variables en la consola para verificar su contenido.

// Función para imprimir tanto en consola como en la página HTML
function imprimir(...mensajes) {
    const consola = document.getElementById("consola");
    const texto = mensajes.map(m => (typeof m === "object" ? JSON.stringify(m) : m)).join(" ");
    consola.textContent += texto + "\n\n";
    console.log(...mensajes);
}

// Imprimir resultados en la página y en la consola
imprimir("---Variables con let;");
imprimir('let nombre = "Juan";\n', nombre);
imprimir('let edad = 30;\n', edad);
imprimir("let esEstudiante = true;\n", esEstudiante);
imprimir("let calificaciones = [10, 9, 8];\n", calificaciones);
imprimir('let persona = { nombre: "Juan", edad: 30 };\n', persona);
imprimir("let fecha = new Date();\n", fecha);
imprimir("let nulo = null;\n", nulo);
imprimir("let indefinido;\n", indefinido);
imprimir('let simbolo = Symbol("descripcion");\n', simbolo.toString());
imprimir("var bigIntVar = BigInt(123456789012345678901234567890);\n", bigInt.toString());

imprimir("\n\n\nLo mismo con var:");

imprimir("---Variables con var;");
imprimir('var nombreVar = "Maria";\n', nombreVar);
imprimir('var edadVar = 25;\n', edadVar);
imprimir("var esEstudianteVar = false;\n", esEstudianteVar);
imprimir("var calificacionesVar = [7, 8, 9];\n", calificacionesVar);
imprimir('var personaVar = { nombre: "Maria", edad: 25 };\n', personaVar);
imprimir("var fechaVar = new Date();\n", fechaVar);
imprimir("var nuloVar = null;\n", nuloVar);
imprimir("var indefinidoVar;\n", indefinidoVar);
imprimir('var simboloVar = Symbol("otra descripcion");\n', simboloVar.toString());
imprimir("var bigIntVar = BigInt(987654321098765432109876543210);\n", bigIntVar.toString());

imprimir("\n\n\nLo mismo con const:");

imprimir("---Variables con const;");
imprimir('const nombreConst = "Carlos";\n', nombreConst);
imprimir('const edadConst = 28;\n', edadConst);
imprimir("const esEstudianteConst = true;\n", esEstudianteConst);
imprimir("const calificacionesConst = [10, 9, 8];\n", calificacionesConst);
imprimir('const personaConst = { nombre: "Carlos", edad: 28 };\n', personaConst);
imprimir("const fechaConst = new Date();\n", fechaConst);
imprimir("const nuloConst = null;\n", nuloConst);
imprimir("const indefinidoConst = undefined;\n", indefinidoConst);
imprimir('const simboloConst = Symbol("descripcion constante");\n', simboloConst.toString());
imprimir("const bigIntConst = BigInt(123456789012345678901234567890);\n", bigIntConst.toString());

imprimir("\n\n\nFIN");
// Fin del código