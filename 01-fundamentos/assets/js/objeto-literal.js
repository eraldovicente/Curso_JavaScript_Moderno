
let personaje = {
     nombre: 'Tony Stark',
     codeName: 'Ironman',
     vivo: false,
     edad: 40,
     coords: {
          lat: 34.034,
          lng: -118.70
     },
     trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
     direccion: {
          zip: '100880, 90265',
          ubcacion: 'Malibu, California'
     },
     'ultima-pelicula': 'Infinity War'
};

console.log( personaje );
console.log('Nombre', personaje.nombre );
console.log('Nombre', personaje['nombre'] );
console.log('Edad', personaje.edad );
console.log('Coors', personaje.coords );
console.log('Lat', personaje.coords.lat );
console.log('No. Trajes', personaje.trajes.length );
console.log('último traje', personaje.trajes[ personaje.trajes.length - 1 ] );

const x = 'vivo';
console.log('Vivo', personaje[x] );
console.log('última película', personaje['ultima-pelicula'] );

