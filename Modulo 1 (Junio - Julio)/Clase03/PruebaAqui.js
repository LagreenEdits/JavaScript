// Función para imprimir en la consola HTML y en la del navegador
function imprimir(...mensajes) {
    const consola = document.getElementById("consola");
    const texto = mensajes.map(m => (typeof m === "object" ? JSON.stringify(m) : m)).join(" ");
    consola.textContent += texto + "\n";
    console.log(...mensajes);
}

// === PRUEBA AQUI TODO ;) ===
let fecha = new Date();
imprimir(`\n🟩start ${fecha}:\n\n\n`);





imprimir("\n\n\n🟩 Llamar variables\n");
const precio = 10; // Declaración de la constante precio
let cantidad = 5;
console.log("El contenido de precio es:",precio); // Mostrar en consola el valor de precio
imprimir("El contenido de precio es:", precio);
console.log("cantidad:",cantidad);
imprimir("cantidad:", cantidad);

// declarar otra variable
let total = 0;
// operación que calcula el total de la venta
total = precio * cantidad;
console.log("El total de la venta es:",total);
imprimir("El total de la venta es:", total);

let titulo = "DevSenior";
console.log(titulo);

let nombre = "Ana Victoria";
console.log(nombre);
imprimir(nombre)








imprimir("\n\n\n🟩 Funciones y parametros\n");
function saludar(){
    console.log("Hola como estas, Bienvenido a la comunidad DevSenior");
    imprimir("Hola como estas, Bienvenido a la comunidad DevSenior");}

function saludar2(nombre){
    console.log("Hola como estas, ",nombre, "Bienvenido a la comunidad DevSenior");
    imprimir("Hola como estas, ", nombre, "Bienvenido a la comunidad DevSenior");
}

function saludar3(nombre, apellido){
    console.log("Hola como estas, ", nombre, apellido, "Bienvenido a la comunidad DevSenior");
    imprimir("Hola como estas, ", nombre, apellido, "Bienvenido a la comunidad DevSenior");
}

saludar();
saludar2("Alexander");
saludar3("Alexander", "Gonzalez");







imprimir("\n\n\n🟩 Funciones con retorno\n");
//Declar una function con expresión de funcion
const suma = function(a, b){
    return a + b;
}
//usamos la función
let resultado = suma(5,7);

console.log("El resultado es: ", resultado); // salida es 12
imprimir("El resultado es: ", resultado); // salida es 12











imprimir("\n\n\n🟩 Funciones flecha\n");

const hola = () => {
    console.log("Bievenido Alexander a la magia de JavaScript");
    imprimir("Bievenido Alexander a la magia de JavaScript");
}

const hola2 = (nombre) =>{
    return `!Hola, ${nombre}¡ me alegra verte usando funciones flecha.` 
}

const hola3 = (nombre, apellido) => {
    return `!Hola, ${nombre} ${apellido}¡ me alegra verte usando funciones flecha.` 
}


hola();

// ejemplo de uso de la función
const mensaje = hola2("Alexander");
console.log(mensaje);
imprimir(mensaje);

// ejemplo de uso de la función con dos parámetros
const mensaje2 = hola3("Alexander", "Gonzalez");
console.log(mensaje2);
imprimir(mensaje2);










imprimir("\n\n\n🟩 Estructuras de control if - else if - else\n");
let edad = 18;

if(edad === 18){ // estructura de decisión compuesta
    console.log("Acceso permitido");
    imprimir("Acceso permitido");
}else{
    console.log("Acceso denegado");
    imprimir("Acceso denegado");
}

if(edad > 18){ // estructura de decisión compuesta usando else if
    console.log("Acceso permitido eres una persona mayor");
    imprimir("Acceso permitido: eres una persona mayor");
}else if(edad === 18){
    console.log("Acceso permitido: tienes justo la edad mínima");
    imprimir("Acceso permitido: tienes justo la edad mínima");
}else{
    console.log("Acceso denegado: eres menor de edad");
    imprimir("Acceso denegado: eres menor de edad");
}








imprimir("\n\n\n🟩 Estructuras de control con switch\n");
function aplicarTemaClaro(){
    console.log("El tema Claro fue aplicado a su sitio Web");
    imprimir("El tema Claro fue aplicado a su sitio Web");
}

function aplicarTemaOscuro(){
    console.log("El tema Oscuro fue aplicado a su sitio Web");
    imprimir("El tema Oscuro fue aplicado a su sitio Web");
}

function aplicarTemaMagenta(){
    console.log("El tema Magenta fue aplicado a su sitio Web");
    imprimir("El tema Magenta fue aplicado a su sitio Web");
}

function aplicarTemaDefault(){
    console.log("El tema Predeterminado fue aplicado a su sitio Web");
    imprimir("El tema Predeterminado fue aplicado a su sitio Web");
}

let tema = "Magenta";
switch(tema){
    case "claro": 
        aplicarTemaClaro();
        break;
    case "oscuro":
        aplicarTemaOscuro();
        break;
    case "Magenta":
        aplicarTemaMagenta();
        break;
    default:
        aplicarTemaDefault();
}







imprimir("\n\n\n🟩 Estructuras de control bucles for\n");

// Lista de productos
const productos = [
    { nombre: "Café", precio: 5000 }, // ----> indice 0
    { nombre: "Te verde", precio: 4500 }, // ----> indice 1
    { nombre: "Chocolate", precio: 6000 },  // ----> indice 2
    { nombre: "Yogurth Griego", precio: 12500} // ---- indice 3
]

//función que muestra el producto en la consola
function mostrarProducto(producto) { // metodologia camel case
    console.log(`${producto.nombre} - $${producto.precio}`);
    imprimir(`${producto.nombre} - $${producto.precio}`);
}

//recorremos el array de objetos de productos
for (let i = 0; i < productos.length; i++) { // 0, 1, 2, 3
    imprimir(i)
    mostrarProducto(productos[i]);
}










imprimir("\n\n\n🟩 Estructuras de control bucles for do-while\n");

let contador = 1;

do {
    console.log("Iteracción número: " + contador);
    imprimir("Iteracción número: " + contador);
    contador++;
} while (contador <= 20);









imprimir("\n\n\n🟩 Estructuras de control bucles while\n");
let numero = 1;

while (numero <= 5) {
    imprimir("Número:", numero);
    numero++; // Incrementa el contador
}









imprimir("\n\n\n🟩 Estructuras de control bucles forEach\n");
//lista de items
const items = [
    {ref: "Mouse", color:"negro"},
    {ref: "Keyboard", color:"White"},
    {ref: "Pad Mouse", color:"yellow"}
]
// usamos forEach para recorrer el array de objetos llamado items
items.forEach((elemento)=> {
    console.log(`Item: ${elemento.ref}, Color: ${elemento.color}`);
    imprimir(`Item: ${elemento.ref}, Color: ${elemento.color}`);
});







imprimir("\n\n\n🟩\n");