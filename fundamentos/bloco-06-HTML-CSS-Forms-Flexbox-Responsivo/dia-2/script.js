import './node_modules/just-validate/dist/js/just-validate.js' //https://github.com/horprogs/Just-validate

const curriculumForm = document.getElementById('curriculum-form');
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
const resumeInput = document.querySelector('[name=resume]');
const jobInput = document.querySelector('[name=job]');
const jobDescriptionInput = document.querySelector('[name=job-description]');
const initialDateInput = document.querySelector('[name=initial-date]').DatePickerX.init(); // https://github.com/AlexKrupko/DatePickerX
const homeInputs = document.querySelectorAll('[name=home]');
const allInputs = document.querySelectorAll('input[name]:not([name=home])');
//#endregion

//#region Inputs objects for validation
const nameRules = { 'description': 'Nome', 'regEx': /\w/g, 'maxLength': 40, 'input': nameInput };
const emailRules = { 'description': 'E-mail', 'regEx': /\w*@\w*/, 'maxLength': 50, 'input': emailInput };
const cpfRules = { 'description': 'CPF', 'regEx': /\d/g, 'maxLength': 11, 'input': cpfInput };
const qthRules = { 'description': 'Endereço', 'regEx': /\w/g, 'maxLength': 200, 'input': qthInput };
const cityRules = { 'description': 'Cidade', 'regEx': /\w/g, 'maxLength': 28, 'input': cityInput };
// const stateRules = { 'description': 'Estado', 'regEx': /\w/, 'maxLength': 2, 'input': stateInput };
const jobRules = { 'description': 'Cargo', 'regEx': /\w/g, 'maxLength': 40, 'input': jobInput };
const jobDescriptionRules = { 'description': 'DescriçãoDoCargo', 'regEx': /\w/g, 'maxLength': 500, 'input': jobDescriptionInput };
const dateRegEx = /[0-3][0-9]\/[0-1][0-9]\/20[2-9][0-9]/;
const initialDateRules = { 'description': 'Data de início', 'regEx': dateRegEx, 'maxLength': 10, 'input': initialDateInput };
//#endregion
const rules = [nameRules, emailRules, cpfRules, qthRules, cityRules, jobRules, jobDescriptionRules, initialDateRules];

const submitButton = document.getElementById('submit-button');
const clearAllButton = document.getElementById('clear-all');
const outputDiv = document.getElementById('curriculumOutput');

// Append states
function appendStates() {
  for (let index = 0; index < statesCodes.length; index += 1) {
    const state = document.createElement('option');
    state.innerText = statesCodes[index];
    state.value = statesCodes[index];
    stateInput.appendChild(state);
  }
}

// function validateInputs(rulesArray) {
//   for (let index = 0; index < rulesArray.length; index += 1) {
//     let input = rulesArray[index];
//     let elementValue = rulesArray[index].input.value;
//     if (input.maxLength < elementValue.length | !(elementValue.match(input.regEx))) {
//       alert(`${input.description} inválido.`);
//       return false;
//     }
//   }
//   return true;
// }

function printCurriculum(inputList) {
  for (let index = 0; index < inputList.length; index += 1) {
    const inputValue = inputList[index].value;
    const element = document.createElement('p');
    element.innerText = inputValue;
    outputDiv.appendChild(element);
  }
}

submitButton.addEventListener('click', (event) => {
  // event.preventDefault();
  // if (validateInputs(rules)) {
  outputDiv.innerHTML = '';
  printCurriculum(allInputs);
  // }
});

function clearInputs(event) {
  // event.preventDefault();
  for (let index = 0; index < allInputs.length; index += 1) {
    allInputs[index].value = '';
  }
  resumeInput.value = '';
  homeInputs[0].checked = false;
  homeInputs[1].checked = false;
}

clearAllButton.addEventListener('click', clearInputs);

// https://github.com/horprogs/Just-validate
window.onload = () => {
  appendStates();
  new window.JustValidate('.js-form', {
    rules: {
      name: {
        required: true,
        maxLength: 30,
        minLength: 4,
      }
    },
    messages: {
      name: {
        required: 'Digite seu nome.',
        maxLength: 'Nome muito longo',
        minLength: 'Nome muito curto'
      }
    },
    tooltip: {
      fadeOutTime: 4000 // default value - 5000 
    }
  });
}

// Rules
// required - Required field, not empty
// email - Check a valid email address
// minLength - Limit the minimum value
// maxLength - Limit the maximum value
// password - At least 1 letter and 1 digit
// zip - 4-5 digits
// phone - Format 111-222-3333
// remote - validate value via remote api
// strength - validate field for default or custom regexp
// function - provide your own validation function

// new JustValidate('.js-form', {
//   rules: {
//     checkbox: {
//       required: true
//     },
//     myField: {
//       required: true
//     },
//     email: {
//       required: false,
//       email: true
//     },
//     password: {
//       strength: {
//         default: true,
//       }
//   },
//   messages: {
//     name: {
//       minLength: 'My custom message about only minLength rule'
//     },
//     email: 'My custom message about error (one error message for all rules)'
//   },

//   submitHandler: function (form, values, ajax) {

//     ajax({
//       url: 'https://just-validate-api.herokuapp.com/submit',
//       method: 'POST',
//       data: values,
//       async: true,
//       callback: function(response)  {
//         console.log(response)
//       }
//     });
//   },
//   });
