import { buscarHeroeAsync, buscarHeroe } from './promesas';


const heroesIds = ['capi','iron','spider'];

// Maneira elegante
export const obtenerHeroesArr = async() => {
     return await Promise.all( heroesIds.map( buscarHeroe ) );
};

export const obtenerHeroeAwait = async( id ) => {

     try {

          const heroe = await buscarHeroeAsync( id );
          return heroe;
          
     } catch ( err ) {
          console.log( 'CATCH!!!' );
          // throw err;
          return {
               nombre: 'Sin nombre',
               poder: 'Sin poder'
          };
     }


}