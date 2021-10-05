# Componentes React

## Content

**Agora vamos fazer este exercício de fixação!**

```js
import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;
```

Crie uma aplicação ***React*** na sua máquina via `create-react-app` com o nome `fixation-exercises-11-2` . Crie um arquivo `Image.js` no diretório `src` do projeto e copie para esse arquivo o código escrito acima. Uma vez feito isso tudo, responda:  

1. Qual o nome do componente declarado acima?  

2. Chame o componente `Image` , de forma que seja mostrada esta [imagem](https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg), ou o texto `Cute cat staring` , caso a imagem não consiga ser carregada.

**Agora, realize este exercício de fixação:**  

Suponha que você abra uma aplicação ***React*** e se depare com os seguintes componentes:

```js
// arquivo Order.js
import React from 'react';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.order;

    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  }
}

export default Order;
```

```js
// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './Order';

class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    return (
      <div className="App">
        <h1> Orders recently created </h1>
         {/*  adicione os componentes aqui */}
      </div>
    );
  }
}

export default App;
```

Agora, responda ao seguinte, no que diz respeito à composição de componentes:  

* O que o componente `App` é em relação a `Order` ?  

* Complete o código acima de forma que os pedidos referentes aos produtos `headphone` e `energyDrink` sejam filhos de `App` .  

**Agora vamos fazer este exercício de fixação:**  

Lembra do código de exemplo da seção anterior, referente à composição de componentes? Crie os componentes `Image , UserProfile e App` no diretório `src` do projeto `fixation-exercises-11-2` , e vamos olhar especificamente para o arquivo `App.js` :  

```js
// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const joao = {
      id: 102,
      name: "João",
      email: "joao@gmail.com",
      avatar: "https:\/\/cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    };

    const amelia = {
      id: 77,
      name: "Amélia",
      email: "amelia@gmail.com",
      avatar: "https:\/\/cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    };

    return (
      <div className="App">
        <UserProfile user={joao} />
        <UserProfile user={amelia} />
      </div>
    );
  }
}

export default App;
```

O componente `App` possui dois componentes `UserProfile` como filho. Que tal gerar esses componentes filhos dinamicamente? Isso poderia ser feito da seguinte forma:  

```js
// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const users = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https:\/\/cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https:\/\/cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      }
    ];

    return (
      <div className="App">
        {users.map(user => <UserProfile user={user} />)}
      </div>
    );
  }
}

export default App;
```

Entretanto, a geração dinâmica dos componentes está incompleta, haja vista que é preciso passar uma `key` para `UserProfile` . Você pode averiguar isso copiando o código acima e entrando no console do *Google Chrome* , que lá vai estar presente um `warning` levantado pelo ***React*** .  

Dito isso, altere a chamada do componente de `UserProfile` de forma que a lista seja gerada dinamicamente de maneira adequada.