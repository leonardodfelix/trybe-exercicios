let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let crescNumbers = numbers.slice();
let decrescNumbers = [...numbers]; // Higher performance - ... spread operator

for (let index = 1; index < crescNumbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (crescNumbers[index] < crescNumbers[secondIndex]) {
      let position = crescNumbers[index];
      crescNumbers[index] = crescNumbers[secondIndex];
      crescNumbers[secondIndex] = position;
    }
  }
}

for (let index = 1; index < decrescNumbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (decrescNumbers[index] > decrescNumbers[secondIndex]) {
      let position = decrescNumbers[index];
      decrescNumbers[index] = decrescNumbers[secondIndex];
      decrescNumbers[secondIndex] = position;
    }
  }
}

console.log(numbers);
console.log(crescNumbers);
console.log(decrescNumbers);

let newArray = []

for (let index = 0; index < numbers.length - 1; index++) {
  newArray.push(numbers[index] * numbers[index + 1]);
}
newArray.push(numbers[numbers.length - 1] * 2);

console.log(newArray);