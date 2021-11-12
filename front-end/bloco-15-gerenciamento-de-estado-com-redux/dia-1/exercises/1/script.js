const prevBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const randomBtn = document.getElementById('random');
const colorValue = document.getElementById('value')

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const CREATE_RANDOM_COLOR = 'CREATE_RANDOM_COLOR';

const reducer = (state = ESTADO_INICIAL, action) => {
  const { index, colors } = state;
  switch (action.type) {
    case NEXT_COLOR:
      return { ...state, index: (index + 1) % colors.length }
  
    case PREVIOUS_COLOR:
      return { ...state, index: index === 0 ? colors.length - 1 : index - 1 }
  
    case CREATE_RANDOM_COLOR:
      return { ...state, colors: [...colors, criarCor()] }
    
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

prevBtn.addEventListener('click', () => { store.dispatch({ type: PREVIOUS_COLOR}) });
nextBtn.addEventListener('click', () => { store.dispatch({ type: NEXT_COLOR}) });
randomBtn.addEventListener('click', () => { store.dispatch({ type: CREATE_RANDOM_COLOR}) });

store.subscribe(() => {
  const { index, colors } = store.getState()
  colorValue.style.backgroundColor = colors[index];
  colorValue.innerHTML = colors[index];
})