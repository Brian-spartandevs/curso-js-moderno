
// Veamos como añadir métodos a nuestras classes...
class Cliente { 

    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // cualquier método agregado a la clase será parte del proto
    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo es: ${this.saldo}`;
    }

    retiraSaldo(retiro) {
        this.saldo -= retiro;
    }


    // También existe algo llamado las propiedades staticas, estas no requieren ser instanciadas...

    static bienvenida(){
        return `Bienvenido al cajero`;
    }

}

// javascript es constructaor
const brian = new Cliente('Brian', 400);

console.log(brian);

console.log(brian.imprimirSaldo() );
brian.retiraSaldo(200);
console.log(brian.imprimirSaldo() );


// Ver propiedad estatica...

// juan.bienvenida(); // No va a funcionar

console.log( Cliente.bienvenida() ); // Esto si va a funcionar