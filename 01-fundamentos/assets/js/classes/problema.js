
const eraldo = {
     nombre: 'Eraldo',
     edad: 30,
     imprimir() {
          console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
     }
}

const fabiana = {
     nombre: 'Fabiana',
     edad: 40,
     imprimir() {
          console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
     }
}

// eraldo.imprimir();

function Persona(nombre, edad) {
     console.log('Se ejecutó esta línea');

     this.nombre = nombre;
     this.edad   = edad;
     this.imprimir = function() {
          console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
     }
}


const gabriel = new Persona('Gabriel', 6);
console.log( gabriel );
gabriel.imprimir();