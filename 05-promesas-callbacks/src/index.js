import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';

import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'iron';
const heroeId3 = 'spider';


buscarHeroe( heroeId1 ).then( heroe => {

     console.log(`Enviando a ${ heroe.nombre } a la misión`);

});


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
