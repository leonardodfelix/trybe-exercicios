//#region Spread Operator

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'orange', 'guava'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['tomato', 'soy', 'peanut'];

const fruitSalad = (fruit, additional) => {
  return [...fruit,...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));
//#endregion

//#region Array Destructuring
// 1
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [sentence, printSentence] = saudacoes;
printSentence(sentence);

// 2
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[animal, bebida, comida] = [comida, animal, bebida];
console.log(comida, animal, bebida); // arroz gato água

// 3
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,,...numerosPares] = numerosPares;
console.log(numerosPares); // [6, 8, 10, 12];

//#endregion

//#region Default Destructuring
const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

//#endregion

//#region Object Property Shorthand
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});

console.log(getPosition(-19.8157, -43.9542));
//#endregion
