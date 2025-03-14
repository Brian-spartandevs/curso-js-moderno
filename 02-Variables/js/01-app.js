// inicializar una variable con un valor
var producto = "Monitor de 24 pulgadas";
console.log(producto);

// las variables se pueden reasignar
producto = "Monitor de 19 pulgadas";
console.log(producto);

// JavaScript es un lenguaje de tipado dinámico, por lo que no es necesario especificar el tipo de dato que se almacenará en una variable.
producto = 20;
console.log(producto);


// Se pueden inicializar sin valor y asignarlo después
var disponible;
disponible = true;

disponible = false;

// Inicializar múltiples variables
var categoria = 'computadoras',
    marca = 'Marca Famosa',
    calificacion = 5;

// Las variables no pueden iniciar con números
// var 99dias;
var dias99;

// var 01_;
var _01;
var _usuario;
var __usuario;

var nombreProductoCategoriaPrecio; // Camelcase
var nombre_producto_categoria_precio; // underscore
var NombreProductoCategoriaPrecio; // Pascal Case