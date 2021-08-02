// Parte II
// Ex.1

function verificaPalindromo(palavra){
  let arvalap = palavra.split("").reverse().join("");

  if (palavra === arvalap){
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
    if (array[num] > maior){
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
    if (array[num] < menor){
      menor = array[num];
      index = num;
    }
  }
  return index;
}

console.log(menorValor(array2));

// Ex.4

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(array){
  let maiorString = array[0];
  for (let index in array) {
    if (array[index].length > maiorString.length){
      maiorString = array[index];
    }
  }
  return maiorString;
}

console.log(maiorNome(nomes));

// Ex.5