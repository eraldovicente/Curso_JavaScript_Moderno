import { obtenerHeroesArr } from './js/await';

// const heroes = obtenerHeroesArr();
console.time('await');

obtenerHeroesArr().then( heroes => {
     console.table(heroes);

     console.timeEnd('await');
});

// console.table( heroes );
// console.log( heroes );
