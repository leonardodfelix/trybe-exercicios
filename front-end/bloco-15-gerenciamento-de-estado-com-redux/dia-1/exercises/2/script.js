const nome1 = document.getElementById('nome-1');
const nome2 = document.getElementById('nome-2');
const snome1 = document.getElementById('sobrenome-1');
const snome2 = document.getElementById('sobrenome-2');

const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const BACKWARDS = 'BACKWARDS';

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case BACKWARDS:
      return { ...state, nome: 'Ogirdor', sobrenome: 'Avlis ad Sotnas'}
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case BACKWARDS:
      return { ...state, nome: 'Anurb', sobrenome: 'Arievilo Anatnas'}
    default:
      return state;
  }
};

const reducers = Redux.combineReducers({
  meuPrimeiroReducer,
  meuSegundoReducer
})

const store = Redux.createStore(reducers);

window.onload = () => {
  setTimeout(() => {
    store.dispatch({ type: BACKWARDS })
  }, 3000);

  store.subscribe(() => {
    const { meuPrimeiroReducer, meuSegundoReducer } = store.getState();
    nome1.innerHTML = meuPrimeiroReducer.nome;
    nome2.innerHTML = meuSegundoReducer.nome;
    snome1.innerHTML = meuPrimeiroReducer.sobrenome;
    snome2.innerHTML = meuSegundoReducer.sobrenome;
  })
};