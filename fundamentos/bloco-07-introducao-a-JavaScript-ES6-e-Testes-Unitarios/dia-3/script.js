// Exercícios
// Parte 1

// 1 de 5
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

const expected11 = sum(4, 5);
assert.strictEqual(expected11, 9, '9 expected');

const expected12 = sum(0, 0);
assert.strictEqual(expected12, 0, '0 expected');
assert.throws(() => { sum(4, '5') });
assert.throws(() => { sum(4, '5') }, /parameters must be numbers/);

// 2 de 5
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
const expected21 = myRemove([1, 2, 3, 4], 3);
const expected24 = myRemove([1, 2, 3, 4], 5);

assert.deepStrictEqual(expected21, [1, 2, 4], 'Wrong array');
assert.notDeepStrictEqual(expected21, [1, 2, 3, 4], 'Should not return this');
const arr = [1, 2];
arrCheck = [...arr];
myRemove(arr, 2);
assert.deepStrictEqual(arr, arrCheck, 'Should not change param');
assert.deepStrictEqual(expected24, [1, 2, 3, 4], 'Unexpected array');

// 3 de 5

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

const expected31 = myRemoveWithoutCopy([1, 2, 3, 4], 3);
const expected34 = myRemoveWithoutCopy([1, 2, 3, 4], 5);

assert.deepStrictEqual(expected31, [1, 2, 4]);
assert.notDeepStrictEqual(expected31, [1, 2, 3, 4]);
const arr3 = [1, 2, 3, 4];
const arr3Check = [...arr3];
const expected33 = myRemoveWithoutCopy(arr3, 3);
assert.notDeepStrictEqual(expected33, arr3Check);
assert.deepStrictEqual(expected34, arr3Check);

// 4 de 5
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

const expected41 = myFizzBuzz(15);
const expected42 = myFizzBuzz(3);
const expected43 = myFizzBuzz(5);
const expected44 = myFizzBuzz(2);
const expected45 = myFizzBuzz('15');

assert.strictEqual(expected41, 'fizzbuzz');
assert.strictEqual(expected42, 'fizz');
assert.strictEqual(expected43, 'buzz');
assert.strictEqual(expected44, 2);
assert.deepStrictEqual(expected45, false);

// 5 de 5

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual(obj1, obj2, '1 dif 2');
// assert.deepStrictEqual(obj1, obj3, '1 dif 3');
// assert.deepStrictEqual(obj3, obj2, '3 dif 2');

// Parte 2
// 1 de 4

function addOne(arr) {
  const newArr = [...arr];
  newArr.forEach((_element, index, newArr) => newArr[index] += 1);
  return newArr;
}

const myArrayP21 = [31, 57, 12, 5];
const unchangedP21 = [31, 57, 12, 5];
const expectedP21 = [32, 58, 13, 6];
const outputP21 = addOne(myArrayP21);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(outputP21, expectedP21);
assert.deepStrictEqual(myArrayP21, unchangedP21);

// 2 de 4

function wordLengths(wordsArray) {
  const numsArray = [];
  wordsArray.forEach(word => {
    numsArray.push(word.length);
  }, numsArray);
  return numsArray;
}

const wordsP22 = ['sun', 'potato', 'roundabout', 'pizza'];
const expectedP22 = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const outputP22 = wordLengths(wordsP22);
assert.deepStrictEqual(outputP22, expectedP22);

// 3 de 4
function sumAllNumbers(numsArray) {
  return numsArray.reduce((acc, num) => acc + num);
}

const numbersP23 = [9, 23, 10, 3, 8];
const expectedP23 = 53;
const outputP23 = sumAllNumbers(numbersP23);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(outputP23, expectedP23);

// 4 de 4

function findTheNeedle(wordsArray, word) {
  return wordsArray.indexOf(word);
}

let wordsP24 = ['house', 'train', 'slide', 'needle', 'book'];
let expectedP24 = 3;
let outputP24 = findTheNeedle(wordsP24, 'needle');
assert.strictEqual(outputP24, expectedP24);

wordsP24 = ['plant', 'shelf', 'arrow', 'bird'];
expectedP24 = 0;
outputP24 = findTheNeedle(wordsP24, 'plant');
assert.strictEqual(outputP24, expectedP24);

wordsP24 = ['plant', 'shelf', 'arrow', 'bird'];
expectedP24 = -1;
outputP24 = findTheNeedle(wordsP24, 'plat');
assert.strictEqual(outputP24, expectedP24);

// Parte 3
// 1 de 4
const greetPeople = (people) => {
  let greeting = 'Hello ';
  const greetings = [];
  for (const person in people) {
    greeting += people[person];
    greetings.push(greeting);
    greeting = 'Hello ';
  }
  return greetings;
};

const parameterP31 = ['Irina', 'Ashleigh', 'Elsa'];
const resultP31 = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameterP31), resultP31);

// 2 de 4
const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let vowelIndex = 1;
  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      results.push(vowelIndex);
      vowelIndex += 1;
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};


const parameterP32 = 'Dayane';
const resultP32 = 'D1y2n3';

assert.deepStrictEqual(removeVowels(parameterP32), resultP32);

// 3 de 4
const greaterThanTen = (array) => {
  const results = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results.push(array[index]);
    }
  }
  return results;
};

const parameterP33 = [4, 10, 32, 9, 21];
const resultP33 = [32, 21];

assert.deepStrictEqual(greaterThanTen(parameterP33), resultP33);

// 4 de 4
function secondThirdSmallest(array) {
  let results = []
  array.sort(function (x, y) {
      return x - y;
  });
  results = [array[1], array[2]];
  return results;
};

const parameterP34 = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const resultP34 = [5, 6];

assert.deepStrictEqual(secondThirdSmallest(parameterP34), resultP34);