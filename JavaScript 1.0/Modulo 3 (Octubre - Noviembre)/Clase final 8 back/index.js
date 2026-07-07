const express = require( 'express' ) ;
const cors = require( 'cors' ) ;
const app = express( );
const PORT = 3000;

app.use( cors() ) ;
app.use( express.json());

let empleados = [ ];
let contadorId = 1;


app.get( '/empleados', ( req, res ) => {
res.json( empleados ) ;
} ) ;

app.post( '/empleados', ( req, res ) => { 
    const { nombre, correo_electronico } = req.body ;

    if ( !nombre || !correo_electronico ) {
        return res.status( 400 ).json( { error: 'Faltan campos requeridos' } ) ;
    }

    const nuevoEmpleado = {
        id: contadorId++,
        nombre,
        correo_electronico
    } ;

    empleados.push( nuevoEmpleado ) ;
    res.status( 201 ).json( nuevoEmpleado ) ;

} ) ;

app.delete( '/empleados/:id', ( req, res ) => {
    const id = parseInt( req.params.id ) ;
    const index = empleados.findIndex( emp => emp.id === id ) ;

    if ( index === -1 ) {
        return res.status( 404 ).json( { error: 'Empleado no encontrado' } ) ;
    }

    const empleadoEliminado = empleados.splice( index, 1 ) ;
    empleado.splice( index, 1 ) ;

    res.json( { 
        mensaje: 'Empleado eliminado', 
        empleado: empleadoEliminado
    } ) ;
} ) ;

app.listen( PORT, ()=> {
console.log( 'Servidor ejecutandose en http://localhost:' + PORT );
} ) ;