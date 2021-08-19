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
//#region Inputs consts
const nameInput = document.querySelector('[name=name]');
const emailInput = document.querySelector('[name=email]');
const cpfInput = document.querySelector('[name=cpf]');
const qthInput = document.querySelector('[name=qth]');
const cityInput = document.querySelector('[name=city]');
const stateInput = document.querySelector('[name=state]');
const homeInput = document.querySelector('[name=home]');
const resumeInput = document.querySelector('[name=resume]');
const jobInput = document.querySelector('[name=job]');
const jobDescriptonInput = document.querySelector('[name=job-description]');
const initialDateInput = document.querySelector('[name=initial-date]');
//#endregion
const submitButton = document.getElementById('submit-button');
const clearAllButton = document.getElementById('clear-all');

// Append states
for (let index = 0; index < statesCodes.length; index += 1) {
  const state = document.createElement('option');
  state.innerText = statesCodes[index];
  state.value = statesCodes[index];
  stateInput.appendChild(state);
}


function validateInputs() {
  
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
});

clearAllButton.addEventListener('click', (event) => {
  event.preventDefault();
})