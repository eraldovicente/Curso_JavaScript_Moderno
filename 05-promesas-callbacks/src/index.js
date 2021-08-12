import { obtenerHeroesArr, obtenerHeroeAwait } from './js/await';

// const heroes = obtenerHeroesArr();
console.time('await');

obtenerHeroeAwait('capi2')
     .then( heroe => {
          console.log( heroe ); 
          console.timeEnd('await');
     }).catch( console.warn );

// console.table( heroes );
// console.log( heroes );
