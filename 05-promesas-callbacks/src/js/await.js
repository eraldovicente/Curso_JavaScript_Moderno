import { buscarHeroe } from "./promesas";


const heroesIds = ['capi','iron','spider'];

// Maneira elegante
export const obtenerHeroesArr = async() => {
     return await Promise.all( heroesIds.map( buscarHeroe ) );
};