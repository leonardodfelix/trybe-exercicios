// Parte II
// Ex.1

function verificaPalindromo(palavra) {
  let arvalap = palavra.split("").reverse().join("");

  if (palavra === arvalap) {
    console.log(true);
  } else {
    console.log(false);
  }
}

verificaPalindromo('arara');
verificaPalindromo('desenvolvimento');

// Ex.2

let array = [2, 3, 6, 7, 10, 1];

function maiorValor(array) {
  let maior = array[0];
  let index = 0;
  for (let num in array) {
    if (array[num] > maior) {
      maior = array[num];
      index = num;
    }
  }
  return index;
}

console.log(maiorValor(array));

// Ex.3

let array2 = [2, 4, 6, 7, 10, 0, -3];

function menorValor(array) {
  let menor = array[0];
  let index = 0;
  for (let num in array) {
    if (array[num] < menor) {
      menor = array[num];
      index = num;
    }
  }
  return index;
}

console.log(menorValor(array2));

// Ex.4

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(array) {
  let maiorString = array[0];
  for (let index in array) {
    if (array[index].length > maiorString.length) {
      maiorString = array[index];
    }
  }
  return maiorString;
}

console.log(maiorNome(nomes));

// Ex.5

let numbers = [9, 2, 3, 2, 5, 8, 2, 3];

function maisRepete(array) {
  let maisNum = array[0];
  let ocorrencias = 0;
  for (let number of array) {
    let numCount = 0;
    for (let compareNumber of array) {
      if (compareNumber === number) {
        numCount += 1;
      }
    }
    if (numCount > ocorrencias) {
      ocorrencias = numCount;
      maisNum = number;
    }
  }
  return maisNum;
}

console.log(maisRepete(numbers));

// Ex.6

function somaDeUmAEne(number) {
  let sum = 0;
  for (let index = 1; index <= number; index += 1) {
    sum += index;
  }
  return sum;
}

console.log(somaDeUmAEne(10));

// Ex.7

function verificaOFim(strWord, strEnd) {
  let isEnd = true;
  let strWordArray = strWord.split("");
  let strEndArray = strEnd.split("");
  let indexEnd = strEndArray.length;

  for (let index = strWordArray.length; index > 0; index -= 1) {
    if (!indexEnd) {
      break;
    }
    if (strWordArray[index] !== strEndArray[indexEnd]) {
      isEnd = false;
    };
    indexEnd -= 1;
  }

  return isEnd;
}

console.log(verificaOFim('trybe', 'be'));
console.log(verificaOFim('joaofernando', 'fernan'));
