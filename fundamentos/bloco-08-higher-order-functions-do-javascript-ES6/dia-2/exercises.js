const assert = require('assert');

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

// 1
function authorBornIn1947() {
  return books.find(book => book.author.birthYear === 1947).author.name;
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');

// 2
function smallerName() {
  let nameBook = books[0].name;
  books.forEach(book => { if (book.name.length < nameBook.length) nameBook = book.name })
  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');

// 3
const expectedResult3 = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  return books.find(book => book.name.length === 26);
}

assert.deepStrictEqual(getNamedBook(), expectedResult3);

// 4
const expectedResult4 = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  return books.sort((a, b) => b.releaseYear - a.releaseYear);
}

assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult4);

// 5
const expectedResult5 = false;

function everyoneWasBornOnSecXX() {
  return books.every(book => book.author.birthYear > 2000);
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult5);

// 6
const expectedResult6 = true;

function someBookWasReleaseOnThe80s() {
  return books.some(book => (book.releaseYear >= 1980 && book.releaseYear < 1990));
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult6);

// 7
const expectedResult7 = false;

function authorUnique() {
  return books.every((book) => !books.some((book2) => (book2.author.birthYear === book.author.birthYear) && (book2.author.name !== book.author.name)));
}

assert.strictEqual(authorUnique(), expectedResult7);