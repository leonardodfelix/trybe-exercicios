// Parte I
// Exercício 1

const testingScope = (escopo) => {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope}\nótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

const testShorter = escopo => console.log(escopo ? 'Não devo ser utilizada fora do meu escopo (if)\nótimo, fui utilizada no escopo !' : 'Não devo ser utilizada fora meu escopo (else)');

testShorter(false);
testingScope(true);

// Exercício 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortedOddsAndEvens = [...oddsAndEvens].sort((a, b) => a - b) 

console.log(`Os números ${sortedOddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
console.log(oddsAndEvens);

// Parte II
// Exercício 1
function fatorial(n) {
  return (n <= 1) ? 1 : n * fatorial(n - 1);
  // let fat = 1;
  // for (let index = 1; index <= n; index += 1) {
  //   fat *= index;
  // }
  // return fat;
}
console.log(fatorial(4));

// Exercício 2
function longestWord(phrase) {
  return phrase.split(' ').sort((a, b) => b.length - a.length)[0];
}
const phrase = "Antônio foi no banheiro e não sabemos o que aconteceu";
console.log(longestWord(phrase));
console.log(phrase);

