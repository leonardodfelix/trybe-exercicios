let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Ex 1

for (let number of numbers) {
  console.log(number);
}

// Ex 2

let sum = 0;

for (let number of numbers) {
  sum += number;
}

console.log("A soma é:", sum);

// Ex 3

let mean = sum / numbers.length;

console.log("O valor médio do array é:", mean.toFixed(2));

// Ex 4

if (mean > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

// Ex 5

let maior = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maior) {
    maior = numbers[index];
  }
}

console.log("O maior é", maior);

// Ex 6

let qtdeImpar = 0;

for (let number of numbers) {
  if ((number % 2) == 1) {
    qtdeImpar += 1;
  }
}

if (qtdeImpar) {
  console.log("A quantidade de números ímpares é", qtdeImpar);
} else {
  console.log("nenhum valor ímpar encontrado");
}

// Ex 7

let menor = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < menor) {
    menor = numbers[index];
  }
}

console.log("O menor é", menor);

// Ex 8

let newArray = [];

for (let index = 1; index <= 25; index+= 1) {
  newArray.push(index);
}

console.log(newArray);

