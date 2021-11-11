const { combineReducers } = require('redux');
// import { combineReducers } from 'redux';
const meuReducer = require('./meuReducer');
const meuOutroReducer = require('./meuOutroReducer');
// import meuReducer from './meuReducer';
// import meuOutroReducer from './meuOutroReducer';

const reducerCombinado = combineReducers({
meuReducer,
meuOutroReducer});

module.exports = reducerCombinado;