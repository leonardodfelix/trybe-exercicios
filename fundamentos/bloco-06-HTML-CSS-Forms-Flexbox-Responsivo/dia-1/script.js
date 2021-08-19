const statesSelect = document.getElementById('state');
const statesCodes = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MS',
  'MT',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO'
]
// https://gist.github.com/edirpedro/69c0974613de044ebba6dc7fd0c5b732
const submitButton = document.getElementById('submit-button');

for (let index = 0; index < statesCodes.length; index += 1) {
  const state = document.createElement('option');
  state.innerText = statesCodes[index];
  state.value = statesCodes[index];
  statesSelect.appendChild(state);
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
});
