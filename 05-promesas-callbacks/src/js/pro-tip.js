import { buscarHeroeAsync, buscarHeroe } from "./promesas";


const heroesIds = ['capi','iron','spider'];

export const obtenerHeroesArr = async() => {

     const heroesArr = [];

     for( const id of heroesIds ) {
          // buscarHeroeAsync( id ).then( heroe => heroesArr.push( heroe ) );
          heroesArr.push( buscarHeroe( id ) );
     }

     // setTimeout(() => {
     //      console.log('ObtenerHeroes');
     //      console.table( heroesArr );
     // }, 1000);

     return await Promise.all( heroesArr );
};