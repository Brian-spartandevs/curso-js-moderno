// Creando un objeto con Object Literal
const producto = {
nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}


// Creando un objeto con Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor 24 pulgadas', 500);
console.log(producto2);