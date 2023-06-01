class Proveedor{
    nombre;
    articulo;
    precio;
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.articulo = [];
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


}

class Articulo{
    nombre;
    email;
    telefono;
    constructor(nombre, email, telefono){
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
    get nombre(){
        return this.nombre;
    }

    set nombre(nombre){
        this.nombre = nombre;
    }

    get email(){
        return this.email;
    }

    set email(email){
        this.email = email;
    }

    get telefono(){
        return this.telefono;
    }

    set telefono(telefono){
        this.telefono = telefono;
    }
}