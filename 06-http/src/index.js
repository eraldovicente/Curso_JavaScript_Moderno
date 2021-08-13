// import { obtenerUsuarios } from './js/http-provider';
// import { init } from './js/usuarios-page';
// obtenerUsuarios().then( console.log );
// init();

import * as CRUD from './js/crud-provider';

CRUD.getUsuario( 1 ).then( console.log );

CRUD.crearUsuario({
     name: 'Fabiana',
     job: 'linda'
}).then( console.log );


