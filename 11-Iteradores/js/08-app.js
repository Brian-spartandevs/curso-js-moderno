// En el video anterior videos el for of ,en este video veremos el for in...

// el for in va a iterar sobretodas las propiedades de un objeto, pero primero veamos como recorrer un arreglo con objetos...

const carrito = [
    {id: 1, producto: 'Libro' },
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Disco'}
];

for (let producto of carrito) {
    console.log(producto.producto);
}



let automovil = {
    modelo: 'Camaro',
    motor: '6.0',
    anio: '1969',
    marca: 'Chevrolet'
}

for(let auto in automovil) {
    console.log(`${auto} : ${automovil[auto]}`);
}

console.log('-----------------');
// O también podemos usar el Object.entries para obtener un arreglo con las propiedades y valores de un objeto, y luego iterar sobre ese arreglo con un for of...

for (let [llave,valor] of Object.entries(automovil)) {
    console.log(`${llave} : ${valor}`);
}


// Y con eso terminamos lo que son los iteradores, veamos una serie de Array Methods, que son similares a estos iteradores y sus usos. ya vamos terminando toda la parte de básicos de JavaScript para movernos al DOM pero vamos viendo un tema más!