# JavaScript ES6 - Higher Order Functions - forEach, find, some, every, sort

## Para fixar Array.forEach

**1 -** Use o método forEach chamando a callback **showEmailList** para apresentar os emails

```js
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui
```

**2 -** Leia e entenda este exemplo do [forEach](https://codepen.io/pen/?template=LYZPEwV) feito no CodePen.

## Para fixar Array.find

**1 -** Utilize o `find` para retornar o primeiro número do array que é divisível por **3** e **5** , caso ele exista:

```js
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
}

console.log(findDivisibleBy3And5())
```

**2 -** Utilize o `find` para encontrar o primeiro nome com cinco letras, caso ele exista:

```js
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
}

console.log(findNameWithFiveLetters());
```

**3 -** Utilize o `find` para encontrar a música com **id** igual a **31031685** , caso ela exista:

```js
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
}

console.log(findMusic('31031685'))
```

## Para fixar Array.some e Array.every

**1 -** Escreva uma função que dado um array de nomes e um nome retorne `true` se ele estiver contido e caso contrário, retorne `false` , use `some` ;
```js
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
}

console.log(hasName(names, 'Ana'))
```
2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne `true` se todas tiverem a idade maior ou igual a mínima e caso contrário `false` , use `every` ;
```js
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
}

console.log(verifyAges(people, 18));
```

## Para fixar Array.sort

1 - Utilize a `sort` para ordenar o array pela **idade** das pessoas em ordem **crescente** .
```js
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui

console.log(people);
```

2 - Modifique o `sort` do exercício anterior para que ordene o array pela **idade** das pessoas em ordem **decrescente** .
