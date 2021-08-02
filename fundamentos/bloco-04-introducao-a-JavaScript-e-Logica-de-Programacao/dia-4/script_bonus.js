// Bônus
// Ex. 1

function romanosParaIndoArabicos (numeroRomano) {
  let arrayRomano = numeroRomano.toUpperCase().split("");
  let sum = 0;
  for (let index = 0; index < arrayRomano.length; index += 1){
    switch (arrayRomano[index]) {
      case 'I':
        arrayRomano[index] = 1;
        break;
    
      case 'V':
        arrayRomano[index] = 5;
        break;
  
      case 'X':
        arrayRomano[index] = 10;
        break;

      case 'L':
        arrayRomano[index] = 50;
        break;
    
      case 'C':
        arrayRomano[index] = 100;
        break;
  
      case 'D':
        arrayRomano[index] = 500;
        break;
        
      case 'M':
        arrayRomano[index] = 1000;
        break;
      
      default:
        break;
    }
  }
  for (let index = 0; index < arrayRomano.length; index += 1){
    if (arrayRomano[index] < arrayRomano[index+1]) {
      arrayRomano[index] = -arrayRomano[index];
    }
    sum += arrayRomano[index];
  }
  return sum;
}

console.log(romanosParaIndoArabicos('MCDXLIV'));

// Ex.2

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector) {
  let arrayOfEven = [];
  for (let index in vector) {
    for (let index2 in vector[index]) {
      let number = vector[index][index2];
      if ((number % 2) === 0){
        arrayOfEven.push(number);
      }
    }
  }
  return arrayOfEven;
}

console.log(arrayOfNumbers(vector));

// Ex.3

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

function countArraytoObj(array) {
  let obj = {};
  for (let string of array) {
    let str = string;
    if (!obj[str]) {
      obj[str] = 1;
    } else {
      obj[str] += 1;
    }
  }
  return obj;
}

console.log(countArraytoObj(basket));