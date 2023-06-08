import { Articulo } from "./articulo";
export class Proveedor{
    nombre;
    articulo;
    precio;
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.articulos = [];
    }

get nombre(){
    return this.nombre;
}
set nombre(nombre){
    this.nombre = nombre;
}

get precio(){
    return this.precio;
}
set precio(precio){
    this.precio = precio;
}


getInfoProveedor(){
    return `Proveedor: ${this.nombre}, Precio: $${this.precio}, Articulos: ${this.articulos}`;
}

addArticulo(articulo){
    this.articulos.push(articulo);
}

}