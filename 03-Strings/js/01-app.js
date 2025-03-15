const product = "Monitor 20 pulgadas\"";
const product2 = String('Monitor 24 pulgadas"');

const product3 = new String("Monitor 27 pulgadas");

console.log(product); // Monitor 20 pulgadas"
console.log(product2); // Monitor 24 pulgadas"
console.log(product3);  // String {"Monitor 27 pulgadas"}
