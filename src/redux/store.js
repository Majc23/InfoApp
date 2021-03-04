import { createStore, combineReducers } from 'redux';
import results from './reducers/results';
import suggestions from './reducers/suggestions';
import currentItem from './reducers/currentItem';

/*Paso 17 se crea el store que basicamente lo que hara es crear un store en redux, se 
importara de redux createStore y combineReducers 

// Paso 18 se crea al reducer principal el contendra a los de mas reducer, se combinan con 
combineReducers que vienen de la libreria redux
*/
const reducer = combineReducers({
    results,
    suggestions,
    currentItem, 
});

//Paso 19 se crea un store al cual se le pasa el reducer principal y despues de crear el 
//store se exporta ... 
const store = createStore(reducer);
//si se quisiera inicializar un middlewere o un estado inicializado se puede inicialisar en  
//vez de mandar reducer

export default store;

/*Paso 20 se procede a crear 3 archivos en la ruta reducer y se trabajara en 1 de estos 
archivos
//Paso 21 se crea la base de redux la cual incluye una constante para definir el estado por 
//fault esto se define como el primer parametro de reducer y la accion usando una 
desestructuracion
// se pone type y payload y tambien se define el switch que por default regresa el estado de 
la aplicacion y tambien se definieran mas adelante las acciones, esta es la misma base para
// los 3 archivos reducer solo en result se define un arreglo vacio para que se almacenen los
//resultados

Paso 22 se regresa al index.js el cual es el punto de entrada*/