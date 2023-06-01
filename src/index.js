import { Proveedor } from "./Proveedor";
import { Articulo } from "./articulo";

const proveedor = new Proveedor("Proveedor1", 100);
const articulo1 = new Articulo("Articulo1", "email1", "telefono1");
const articulo2 = new Articulo("Articulo2", "email2", "telefono2");
proveedor.addArticulo(articulo1);
proveedor.addArticulo(articulo2);
console.log(proveedor.getInfoProveedor());