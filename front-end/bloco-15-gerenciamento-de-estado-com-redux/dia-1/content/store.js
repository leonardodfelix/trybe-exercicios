const { createStore } = require('redux');
// import { createStore } from 'redux';
// Importando o reducer combinado que fizemos logo acima
const reducerCombinado = require('./reducers/index')
// import reducerCombinado from './reducers/index';

const store = createStore(reducerCombinado);

console.log(store.getState())