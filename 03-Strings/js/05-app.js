const producto = "Monitor 20 Pulgadas";

// .replace para reemplazar
console.log(producto);
// console.log(producto.replace('Pulgadas','"'))
// console.log(producto.replace('Monitor','Monitor Curvo'))

// .slice para cortar
console.log(producto.slice(0, 10));
// console.log(producto.slice(8))
console.log(producto.slice(2, 1)); // No retorna nada

// Alternativa a slice
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1)); // Retorna 'o'  // de esto se diferencia de slice

const usuario = "Brian";
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));
