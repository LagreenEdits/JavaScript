function cambiarColor() {
    console.log("Cambiando color de fondo");
    const body = document.body;

    // Alternar clase 'oscuro' en el <body>
    body.classList.toggle('oscuro');

    // Mensaje en consola
    if (body.classList.contains('oscuro')) {
        console.log('Modo oscuro activado');
    } else {
        console.log('Modo claro activado');
    }
}

function cambiarEstilo() {
    console.log("Cambiando estilo de fondo");
    const cuerpo = document.querySelector('.cuerpo');
    if (cuerpo.style.display === 'grid') {
        // Cambiar a flex
        cuerpo.style.display = 'flex';
        cuerpo.style.gridTemplateColumns = '';
        cuerpo.style.gap = '20px';
        console.log('Cambiado a flex');
    } else {
        // Cambiar a grid
        cuerpo.style.display = 'grid';
        cuerpo.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
        cuerpo.style.gap = '20px';
        console.log('Cambiado a grid');
    }
}

// Espera a que el DOM cargue
document.addEventListener('DOMContentLoaded', () => {

    // Sumar
    document.querySelectorAll('.btn-sumar').forEach(boton => {
        boton.addEventListener('click', () => {
            const tarjeta = boton.closest('.tarjeta'); // encuentra la tarjeta
            const cantidadElem = tarjeta.querySelector('.cantidad');
            let cantidad = parseInt(cantidadElem.textContent);
            cantidad++; // suma 1
            cantidadElem.textContent = cantidad;
        });
    });

    // Restar
    document.querySelectorAll('.btn-restar').forEach(boton => {
        boton.addEventListener('click', () => {
            const tarjeta = boton.closest('.tarjeta');
            const cantidadElem = tarjeta.querySelector('.cantidad');
            let cantidad = parseInt(cantidadElem.textContent);
            if (cantidad > 0) {
                cantidad--; // resta 1, mínimo 1
                cantidadElem.textContent = cantidad;
            }
        });
    });

});

calcularPrecio = () => {
    console.log("Calculando precio total");

    const resultado = document.querySelector('.resultado');
    const lista = document.querySelector('.lista-productos-comprados');
    const tarjetas = document.querySelectorAll('.tarjeta');
    
    let total = 0;
    lista.innerHTML = ''; // Limpiar la lista antes de empezar

    tarjetas.forEach(tarjeta => {
        const nombre = tarjeta.querySelector('h2').textContent;
        const precioTexto = tarjeta.querySelector('.precio').textContent;
        const cantidadTexto = tarjeta.querySelector('.cantidad').textContent;

        const precio = Number(precioTexto.replace(/\D/g, '')); // Elimina todo excepto números
        const cantidad = Number(cantidadTexto);

        if (cantidad > 0) {
            const subtotal = precio * cantidad;
            total += subtotal;

            const item = document.createElement('li');
            item.textContent = `${nombre}: ${cantidad} unidad(es) = $${subtotal} pesos`;
            lista.appendChild(item);
        }
    });

    resultado.textContent = total > 0
        ? `Total de la compra: $${total} pesos`
        : 'No se han seleccionado productos.';
}

document.getElementById("agregar").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value.trim();
    if (nombre !== "") {
        const li = document.createElement("li");
        li.textContent = nombre;
        document.getElementById("lista-nombres").appendChild(li);
        document.getElementById("nombre").value = "";
    }
});

const contador = document.getElementById("contador");
let cuenta = parseInt(contador.textContent); // Convertimos a número

document.getElementById("mas").addEventListener("click", () => {
    cuenta++;
    contador.textContent = cuenta;
});

document.getElementById("menos").addEventListener("click", () => {
    cuenta--;
    contador.textContent = cuenta;
});