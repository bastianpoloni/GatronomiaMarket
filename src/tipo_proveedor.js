import {Proveedor} from './proveedor.js';
export class Tipo_proveedor extends Proveedor {
    inter;
    pais;
    constructor(nombre, precio, inter, pais) {
        super(nombre, precio); 
        this.articulos = [];       
        this.inter = inter;
        this.pais = pais;
        
    }
    get pais(){
        return this.pais;
    }

    set pais(pais){
        this.pais = pais;
    }
    get inter(){
        return this.inter;
    }
    set inter(inter){
        this.inter = inter;
    }

    getInfoProveedor(){
        return `Proveedor: ${this.nombre}, Precio: $${this.precio}, Articulos: ${this.articulos}, Internacional: ${this.inter}, Pais: ${this.pais}`;
    }
    
}
