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







imprimir("\n\n\n🟩end:\n");