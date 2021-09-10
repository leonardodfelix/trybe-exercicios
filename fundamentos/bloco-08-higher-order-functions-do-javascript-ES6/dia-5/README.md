# JavaScript ES6 - spread operator, parâmetro rest, destructuring e mais

## Para fixar

### Spread Operator

Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada `fruitSalad` passando como parâmetro `specialFruit` e `additionalItens` , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o `spread` .

```js
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['', '', ''];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['', '', ''];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
};

console.log(fruitSalad(specialFruit, additionalItens));
```

### Array Destructuring

**1 -** Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

```js
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
```

**2 -** A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

```js
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
```

**3 -** array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável `numerosPares` .

```js
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
```

### Default Destructuring

Do jeito que está, quando passamos `person` para a função `GetNationality` o retorno é `João is undefined` . Ajuste a função `GetNationality` para que a chamada `GetNationality(person)` retorne `João is Brazilian` .

```js
const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
```

### Object Property Shorthand

Agora é hora de praticar: altere a função `getPosition` utilizando a `property shorthand` .


```js
const getPosition = (latitude, longitude) => ({
  latitude: latitude,
  longitude: longitude});

console.log(getPosition(-19.8157, -43.9542));
```

### Exercícios

1 - Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência `2` , `15` e `54` .  
* Dica: use `spread operator` .

```js
const assert = require('assert');

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  assert.strictEqual(rectangleArea(), rectangle[0] * rectangle[1]); // altere a chamada da funcao rectangleArea
});
```

2 - Crie uma função `sum` que dado um número variável de elementos retorna a soma desses elementos. Ou seja:  
* Dica: use `parâmetro rest` .

```js
const assert = require('assert');

// escreva sum abaixo

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);
```

3 - Escreva a função `personLikes` , que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo:  
* Dica: use `object destructuring`.



```js
const assert = require('assert');

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = () => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

assert.strictEqual(personLikes(alex), 'Alex is 26 years old and likes fly fishing.');
assert.strictEqual(personLikes(gunnar), 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.');
```

4 - Escreva uma função `filterPeople` que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:  
* Dica: use `object destructuring` .


```js
const assert = require('assert');

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo

const filteredPeople = filterPeople(people);

assert.deepStrictEqual(filteredPeople[0], { name: 'Nicole', bornIn: 1992, nationality: 'Australian' });
assert.deepStrictEqual(filteredPeople[1], { name: 'Toby', bornIn: 1901, nationality: 'Australian' });
```

5 - Escreva a função `swap` , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:  
* Dica: use `array destructuring` .


```js
const assert = require('assert');

const myList = [1, 2, 3];

// escreva swap abaixo

const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);
```

6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função `toObject` que, dada uma lista, retorna um objeto representando o carro:
Dica: use `array destructuring` e `abbreviation object literal` .

```js
const assert = require('assert');

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

assert.deepStrictEqual(toObject(palio), { name: 'Palio', brand: 'Fiat', year: 2019 });
assert.deepStrictEqual(toObject(shelbyCobra), { name: 'Shelby Cobra', brand: 'Ford', year: 1963 });
assert.deepStrictEqual(toObject(chiron), { name: 'Chiron', brand: 'Bugatti', year: 2016 });
```

7 - Escreva uma função `shipLength` que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento:  
* Dica: use `object destructuring` .

```js
const assert = require('assert');

const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

// escreva shipLength abaixo

assert.strictEqual(shipLength(ships[0]), 'Titanic is 269.1 meters long');
assert.strictEqual(shipLength(ships[1]), 'Queen Mary 2 is 1132 feet long');
assert.strictEqual(shipLength(ships[2]), 'Yamato is 256 meters long');
```

8 - Escreva uma função `greet` que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:  
* Dica: use `default params` .


```js
const assert = require('assert');

// escreva greet abaixo

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');
```