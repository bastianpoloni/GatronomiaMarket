"use strict";

var _proveedor = require("./proveedor.js");
var _articulo = require("./articulo.js");
var _tipo_proveedor = require("./tipo_proveedor.js");
function calcularImpuesto(proveedor) {
  var impuesto = proveedor.precio * 0.19;
  return "El impuesto total es ".concat(impuesto);
}
var proveedor1 = new _proveedor.Proveedor('Juan Perez', 1000);
var proveedor2 = new _tipo_proveedor.Tipo_proveedor('Carlos Perez', 2000, true, 'Argentina');
var articulo1 = new _articulo.Articulo('Laptop', 'juan@gmail.com', '12345678-9');
var articulo2 = new _articulo.Articulo('Teclado', 'juan@gmail.com', '12345678-9');
var articulo3 = new _articulo.Articulo('Mouse', 'juan@gmail.com', '12345678-9');
proveedor1.addArticulo(articulo1);
proveedor1.addArticulo(articulo2);
proveedor1.addArticulo(articulo3);
console.log(proveedor1.getInfoProveedor());
console.log(calcularImpuesto(proveedor1));
console.log(proveedor2.getInfoProveedor());