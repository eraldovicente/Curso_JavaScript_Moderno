import './styles.css';

import { Todo, TodoList } from './classes';

const todoList = new TodoList();

const tarea = new Todo('Aprender JavaScript');
const tarea2 = new Todo('Ir jantar');

todoList.nuevoTodo( tarea );
todoList.nuevoTodo( tarea2 );

console.log( todoList ); 