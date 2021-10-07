# Componentes com estado e eventos

## Conteúdo

### Introdução aos eventos

```js
import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
function handleClick() {
  console.log('Clicou no botão!')
}

class App extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {
    return <button onClick={handleClick}>Meu botão</button>
  }
}

export default App;
```

### Para fixar  

1. Crie uma aplicação React com `npx create-react-app fancy-buttons` . Altere o componente `App.js` para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via `console.log()` . **Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!!**  

2. Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via `console.log()` .

---

## Vinculando funções à classe com `this` e `bind` no `constructor`

```js
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
		// A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    super()
		// Sua lógica extra vai aqui! O parâmetro `props` é opcional, para você acessar as props diretamente no construtor

    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
    console.log(this)
    console.log('Clicou!')
  }

  render() {
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App;
```

### Para fixar  

3. Declare dentro da classe do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!  

4. Garanta acesso ao objeto `this` na função que você declarou.

---

```js
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
		/* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
		
    console.log('Clicou!')
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}

export default App;
```

💡 Se você quisesse chamar, no elemento, um evento passando um parâmetro, você deveria trocar a sintaxe `<button onClick{this.minhaFuncao} ...>` por `<button onClick={() => this.minhaFuncao('meu parametro')}` . Basicamente, substitua a função do evento por uma chamada à mesma feita via callback! Experimente!

### Para fixar  

5. Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão! Primeiramente, defina um estado inicial para a contagem de cada botão.  

🦜 **Dica**: Uma possibilidade é você definir três chaves, uma para cada botão!  

6. Agora, quando um botão for clicado, altere de forma assíncrona o estado deste botão de zero para um.  

7. Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado!