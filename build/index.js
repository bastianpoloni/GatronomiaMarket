"use strict";

var _Proveedor = require("./Proveedor.js");
var _articulo = require("./articulo.js");
var proveedor1 = new _Proveedor.Proveedor('Juan', 1000);
var articulo1 = new _articulo.Articulo('Laptop', 'juan@gmail', '123456789');
var articulo2 = new _articulo.Articulo('Teclado', 'juan@gmail', '123456789');
var articulo3 = new _articulo.Articulo('Mouse', 'juan@gmail', '123456789');
proveedor1.addArticulo(articulo1);
proveedor1.addArticulo(articulo2);
proveedor1.addArticulo(articulo3);
console.log(proveedor1.getInfoProveedor());