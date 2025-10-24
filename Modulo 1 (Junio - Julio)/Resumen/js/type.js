"use strict";
class producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    informacionBasica() {
        return 'Nombre: ' + this.nombre + ', Precio: ' + this.precio + ', Cantidad: ' + this.cantidad;
    }
}
class productoElectronico extends producto {
    constructor(nombre, precio, cantidad, marca, voltaje) {
        super(nombre, precio, cantidad);
        this.marca = marca;
        this.voltaje = voltaje;
    }
    informacionCompleta() {
        return super.informacionBasica() + ', Marca: ' + this.marca + ', Voltaje: ' + this.voltaje;
    }
}
const martillo = new producto('martillo', 12000, 2);
console.log(martillo.informacionBasica());
const taladro = new productoElectronico('taladro', 25000, 1, 'Bosch', 220);
console.log(taladro.informacionCompleta());
