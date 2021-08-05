
function saludar( nombre ) {
     console.log( arguments );
     console.log('Hola ' + nombre );
}

const saludar2 = function( nombre ) {
     console.log('Hola ' + nombre );
}

const saludarFlecha = () => {
     console.log('Hola Mundo');
}

const saludarFlecha2 = ( nombre ) => {
     console.log('Hola ' + nombre );
}

saludarFlecha( 'Fernando' );
// saludar( 'Fernando', 40, true, 'Costa Rica' );
// saludar2( 'Fernando' );

