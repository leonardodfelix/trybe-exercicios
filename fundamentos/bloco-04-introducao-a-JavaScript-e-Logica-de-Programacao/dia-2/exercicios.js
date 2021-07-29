let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Ex 1

for (let number of numbers) {
  console.log(number);
}

// Ex 2

let sum = 0;

for (let number of numbers) {
  sum+= number;
}

console.log("A soma é:", sum);

// Ex 3

let mean = sum / numbers.length;

console.log("O valor médio do array é:", mean.toFixed(2));

// Ex 4

if (mean > 20){
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

// Ex 5