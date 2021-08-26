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