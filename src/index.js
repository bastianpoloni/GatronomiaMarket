

import {Proveedor} from './Proveedor.js';
import {Articulo} from './articulo.js'; 

const proveedor1 = new Proveedor('Juan', 1000);
const articulo1 = new Articulo('Laptop', 'juan@gmail', '123456789');
const articulo2 = new Articulo('Teclado', 'juan@gmail', '123456789');
const articulo3 = new Articulo('Mouse', 'juan@gmail', '123456789');
proveedor1.addArticulo(articulo1);
proveedor1.addArticulo(articulo2);
proveedor1.addArticulo(articulo3);
console.log(proveedor1.getInfoProveedor());