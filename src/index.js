import {Proveedor} from './proveedor.js';
import {Articulo} from './articulo.js'; 
import {Tipo_proveedor} from './tipo_proveedor.js';

function calcularImpuesto(proveedor){
    let impuesto = proveedor.precio * 0.19;
    return `El impuesto total es ${impuesto}`;
}

const proveedor1 = new Proveedor('Juan Perez', 1000);
const proveedor2 = new Tipo_proveedor('Carlos Perez', 2000, true, 'Argentina');
const articulo1 = new Articulo('Laptop', 'juan@gmail.com', '12345678-9');
const articulo2 = new Articulo('Teclado', 'juan@gmail.com', '12345678-9');
const articulo3 = new Articulo('Mouse', 'juan@gmail.com', '12345678-9');
proveedor1.addArticulo(articulo1);
proveedor1.addArticulo(articulo2);
proveedor1.addArticulo(articulo3);
console.log(proveedor1.getInfoProveedor());
console.log(calcularImpuesto(proveedor1));
console.log(proveedor2.getInfoProveedor());


