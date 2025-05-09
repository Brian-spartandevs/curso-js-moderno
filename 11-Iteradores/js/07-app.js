// En este video veremos for of...

// For of no es como un for tradicional que ejecuta una pieza de código mientras una condición sea verdadera, este ejecuta mientras haya elementos por iterrar como puede ser un arreglo y otros llamados Maps y Sets que veremos más adelante...

let pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JavaScript"];

const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "television", precio: 100 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 500 },
];

for (let pendiente of pendientes) {
  console.log(pendiente);
}

console.log("------------------");

// Sin duda una forma más sencilla que un foreach y un for no?

for (let producto of carrito) {
  console.log(producto.nombre);
}
