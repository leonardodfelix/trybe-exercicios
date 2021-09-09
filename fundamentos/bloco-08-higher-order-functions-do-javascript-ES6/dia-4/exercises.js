//#region 1 of 6
const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr));
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
//#endregion

//#region Array for exercises 2, 3 and 4
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
//#endregion

//#region 2 of 6
const expectedResult2 = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  const stringList = books.reduce((list, book) => `${list}, ${book.author.name}`,'');
  return `${[stringList.slice(2)]}.`
}

assert.strictEqual(reduceNames(), expectedResult2);
//#endregion

//#region 3 of 6
const expectedResult3 = 43;

function averageAge() {
  return books.reduce((sum, book) => sum + (book.releaseYear - book.author.birthYear), 0) / books.length;
}

assert.strictEqual(averageAge(), expectedResult3);
//#endregion

//#region 4 de 6
const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  return books.reduce((longName, book) => (longName.name.length > book.name.length) ? longName : book);
}

assert.deepStrictEqual(longestNamedBook(), expectedResult);
//#endregion

//#region 5 de 6
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((aTimes, word) => {
    const aQuantity = word.toLowerCase().split('').reduce((aOcurr, letter) => (letter === 'a') ? aOcurr += 1 : aOcurr, 0);
    return aTimes + aQuantity;
  }, 0);
}

assert.deepStrictEqual(containsA(), 20);
//#endregion

//#region 6 de 6
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return students.map((student, index) => ({
    name: student,
    average: grades[index].reduce((sum, grade) => sum + grade, 0) / grades[index].length,
  }))
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);
//#endregion
