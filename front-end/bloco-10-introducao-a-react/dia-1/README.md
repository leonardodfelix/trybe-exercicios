# 'Hello, world!' no React!

## Conteúdo

### JSX

Para fixar, crie um elemento JSX que recebe o valor "Hello, JSX" de uma constante chamada `textJSX` , e o incorpore em uma tag `h1` .

### Classes e React

Para fixar tudo o que você aprendeu siga os passos à seguir para criar o seu primeiro componente React de classe:  

1. Crie um novo projeto utilizando `npx create-react-app nome-app`  

* **⚠️ Substitua o nome-app pelo que você desejar para seu app ⚠️**  

2. Na pasta `src` , acesse `App.js` e remova todo o conteúdo da função `App` , de modo que ela fique assim:  

```js
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return ();
}

export default App;
```

3. Na pasta `src` , crie um arquivo chamado Component.js crie um componente que retorne um `<h1>` com o seu nome um paragráfo, `<p>` , com uma breve descrição sobre você.

* Lembre-se, quando vamos retornar mais de um elemento é preciso que eles estejam dentro de um `<div>` .  

4. Importe seu componente em App.js de modo que ele seja renderizado na tela quando a aplicação for iniciada, npm start .  

* Para isso você precisará utilizar o `export default` para exportar seu componente, o `export default` é sempre utilizado quando queremos exportar apenas um elemento de um arquivo, seja uma função, um componente ou uma variável. A penúltima linha do arquivo `Component.js` deverá ficar da seguinte forma:

```js
export default Component;
```

5. Execute sua aplicação, `npm start` , e verifique se tudo ocorreu como o esperado. Ao finalizar esse exercício você terá feito o seu primeiro componente React de classe. Parabéns 🎉  

## Exercícios

1. Crie um novo projeto utilizando `npx create-react-app nome-app` e acesse a pasta `nome-app`  

* **⚠️ Substitua o `nome-app` pelo que você desejar para seu app ⚠️**  

2. Crie uma lista de tarefas simples seguindo os passos abaixo:

* insira a função a seguir acima do seu `App` :

```js
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
```

* agora, chame a função dentro do seu componente `App` (não se esqueça da sintaxe JSX!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando `npm start` .

* por fim, crie uma array de compromissos e use a função `map` para que cada item do array apareça, como um item de lista, no seu componente `App` .

3. Crie um novo projeto utilizando npx create-react-app.  

* Na pasta src, crie um novo arquivo chamado `Header.jsx` , que representará o componente Header;  

* No arquivo `Header.jsx` , crie uma classe React, chamada `Header` . Essa classe deve renderizar uma tag `h1` com o texto 'Conteúdos de Front-End'. Não esqueça de exportar esse componente;  

* No arquivo `App.js` , importe o componente `Header` criado anteriormente;  

* Renderize o componente `Header` no `App.js` ;  

* Na pasta src, crie um novo arquivo chamado `Content.jsx` , que representará o componente `Content` ;  

* Dentro do arquivo `Content.jsx` , crie uma classe React chamada `Content` ;  

* Ainda no arquivo `Content.jsx` , adicione o seguinte array:  

```js
const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];
```

* A classe `Content` deve renderizar o array `conteudos` com a utilização da função map, como visto anteriormente, com o seguinte formato:

```txt
O conteúdo é: `Nome do Conteúdo`
Status: `Status do Conteúdo`
Bloco: `Bloco do Conteúdo`
```

* Lembre-se de adicionar o atributo 'key' ao elemento pai dessa lista, na renderização.  

* Exporte o componente `Content` ;  

* No arquivo `App.js` , importe o componente `Content` criado anteriormente;  

* Renderize o componente `Content` no `App.js` ;
Crie um novo arquivo Footer.jsx ;  

* No arquivo `Footer.jsx` , crie uma classe chamada `Footer` .  

* A classe `Footer` deve renderizar uma tag `h1` com o texto "E isso é só o começo...". Não esqueça de exportar o componente criado.  

* Importe o componente `Footer` no `app.js`  

* Renderize o componente `Footer` no `app.js` .  

4. **Bônus** Estilize a aplicação do exercicio 3. Para isso, adicione classes para estilização dos seus componentes de forma que cada conteúdo listado seja um Card.  

Para adicionar uma classe de estilização em um elemento HTML, utilize o atributo className:  

```html
<footer className='footer'>
  ...
</footer>
```