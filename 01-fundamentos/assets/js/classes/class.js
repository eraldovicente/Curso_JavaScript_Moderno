

class Persona {
     nombre = '';
     codigo = '';
     frase  = '';

     constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase' ) {
          // if ( !nombre ) throw Error('Necesitamos el nombre')

          this.nombre = nombre;
          this.codigo = codigo;
          this.frase  = frase;
     }

     quienSoy() {
          console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
     }

     miFrase() {
          this.quienSoy();
          console.log(`${ this.codigo } dice: ${ this.frase }`);
     }
}


const spiderman = new Persona( 'Peter Parker', 'Spider', 'Soy tu amigable vecino spiderman' );
const ironman = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman' );
console.log( spiderman );
console.log( ironman );

// spiderman.quienSoy(); 
// ironman.quienSoy(); 

spiderman.miFrase(); 
ironman.miFrase(); 