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
let maior = array[0];
let index = 0;

function maiorValor(array) {
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

