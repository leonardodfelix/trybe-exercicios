// forEach

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach( email => showEmailList(email));

// find
// 1
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (num) => ((num % 5) === 0 && (num % 3) === 0);

console.log(numbers.find(num => findDivisibleBy3And5(num)));

// 2
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => names.find(name => name.length === 5);

console.log(findNameWithFiveLetters());

// 3
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  return musicas.find( music => music.id === id).title;
}

console.log(findMusic('31031685'))

// Some and Every
// 1
const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some( elem => elem === name);
}

console.log(hasName(names, 'Ana'))
// 2
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every( obj => obj.age >= minimumAge);
}

console.log(verifyAges(people, 18));

// Sort
const people1 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const sortNameFunc = (a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
}

const peopleSortedByName = [...people].sort(sortNameFunc);
const peopleSortedByAge = [...people].sort((a, b) => a.age - b.age);

console.log(peopleSortedByName);
console.log(peopleSortedByAge);