const assert = require('assert');

// Bônus 1
function getChange(payable, paid) {
  if (payable > paid) {
    throw new Error('paid value is not enough');
  }
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;
  for (let index = 0; index < coins.length; index += 1) {
    if (coins[index] <= remaining) {
      change.push(coins[index]);
      remaining -= coins[index];
      index -= 1;
    }
  }
  return change;
}

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepStrictEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepStrictEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepStrictEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepStrictEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);

// Bônus 2
function factorial(n) {
  return (n === 0) ? 1 : (n * factorial(n - 1));
}

const in1 = 5;
const exp1 = 120;

const in2 = 9;
const exp2 = 362880;

const in3 = 1;
const exp3 = 1;

const in4 = 0;
const exp4 = 1;

const in5 = 3;
const exp5 = 6;

const out1 = factorial(in1);
const out2 = factorial(in2);
const out3 = factorial(in3);
const out4 = factorial(in4);
const out5 = factorial(in5);

assert.strictEqual(out1, exp1);
assert.strictEqual(out2, exp2);
assert.strictEqual(out3, exp3);
assert.strictEqual(out4, exp4);
assert.strictEqual(out5, exp5);

// Bônus 3
function removeMiddle(wordsArray) {
  const middle = Math.floor(wordsArray.length/2);
  const result = [wordsArray[middle]];
  wordsArray.splice(middle, 1);
  return result;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);

// Bônus 4
const getLargestNumber = (array) => {
  let largestNumber = array[0];
  for (let index = 0; index < array.length; index += 1) {
      if (array[index] > largestNumber) {
          largestNumber = array[index];
      }
  }
  return largestNumber;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const resultB4 = 99;

assert.deepStrictEqual(getLargestNumber(parameter), resultB4);

// Bônus 5
function verify(password) {
  let isValid = true;
  if (password.length <= 8) isValid = false;
  if (password === null) isValid = false;
  if (password.split().includes(/[A-Z]/)) isValid = false;
  if (password.split().includes(/[a-z]/)) isValid = false;
  if (password.split().includes(/[0-9]/)) isValid = false;
  return isValid;
}

const validPass = 'Ab1Ec2Id3';
const invalidPass = '';
const validOutput = verify(validPass);
const invalidOutput = verify(invalidPass);

assert.deepStrictEqual(validOutput, true);
assert.deepStrictEqual(invalidOutput, false);