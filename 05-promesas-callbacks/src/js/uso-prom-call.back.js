import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';

import './styles.css';

const heroeId1 = 'capi1';
const heroeId2 = 'iron';
// const heroeId3 = 'spider';


Promise.all([ buscarHeroe(heroeId1), buscarHeroe(heroeId2) ])
     .then( ([heroe1, heroe2]) => {

     console.log(`Enviando a ${ heroe1.nombre } y ${ heroe2.nombre } a la misión`);     
}).catch( err => {
     alert(err);
}).finally( () => {
     console.log('Se termino el promise.all');
});


// buscarHeroe( heroeId1 ).then( heroe1 => {
//      // console.log(`Enviando a ${ heroe.nombre } a la misión`);
//      buscarHeroe( heroeId2 ).then( heroe2 => {
//           console.log(`Enviando a ${ heroe1.nombre } y ${ heroe2.nombre } a la misión`);          
//      });
// });


// buscarHeroe( heroeId1, ( err, heroe1 ) => {

//      if ( err ) { return console.error( err ); }

//      buscarHeroe( heroeId2, ( err, heroe2 ) => {

//           if ( err ) { return console.error( err ); }

//           buscarHeroe( heroeId3, ( err, heroe3 ) => {

//                if ( err ) { return console.error( err ); }
     
//                console.log(`Enviando a ${ heroe1.nombre }, ${ heroe2.nombre } y ${ heroe3.nombre } a la misión`);
     
//           })

//      });

// });




console.log('Fin de programa');
