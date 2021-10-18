# Ciclo de Vida de Componentes e React Router

## Content

### Ciclo de vida de componentes

```js
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("construtor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}
```

## Para fixar

1 - Faça um fork do repositório a seguir para treinar os momentos de cada método do React lifecycle: [repositório de exercícios React lifecycle](https://github.com/tryber/exercises-lifecycle-step-by-step) e siga as instruções abaixo. Se você tiver dúvidas sobre como se faz um fork de um repositório, há um tutorial na master do repositório de exercícios.

Você receberá trechos do código de uma aplicação e deverá encaixar e adaptar esse código de acordo com o método correspondente. **Para isso você receberá dicas sobre qual é o método responsável pela execução do código**, e qual o componente que precisará desse código. Alinhamentos feitos? Ah! **Entender o código inteiro da aplicação é um bônus! Se você conseguir fazê-la rodar, ainda que não ententa o código completamente, o exercício está feito!** Beleza? Let's code!

Dentro da master:
```
cd lifecycleapp
npm install
npm start
```

#### src/App.js

*O método que você procura é o primeiro método a ser executado. Ele é executado uma única vez quando o componente é inicializado e guarda os estados iniciais do componente. Recebe props como argumento e é onde conectamos as funções ao componente (bind).*

```js
super();

this.state = {
  showProfile: true,
};

this.changeProfile = this.changeProfile.bind(this);
```

#### src/App.js

*Não use o setState dentro do render(), isso pode ocasionar loops infinitos, porque o metódo render é chamado quando o state é atualizado, então ao colocar o setState dentro do render, ele irá atualizar o state e chamar o render, atualizar o state novamente e chamar o render e por aí vai, o metódo render deve ser puro. Uma função pura é aquela que ela não pode ser alterada, independente do que entra nela ela deve permanecer igual. Se você quer inicializar váriaveis assim que a página for montada, utilize o componentDidMount()*

```js
const { showProfile } = this.state;
return (
  <div className="gitNetwork d-flex flex-column justify-content-center">
    { showProfile ? <Profile /> : null }
    <div className="central d-flex justify-content-center">
      <button
        className="btn btn-dark align-self-center"
        type="button"
        onClick={ this.changeProfile }
      >
        Mostrar / Ocultar Perfil
      </button>
    </div>
    <Connections />
  </div>
);
```

#### src/components/Profile.js

*O método que você busca é executado assim que o componente for montado e estiver pronto na tela. Caso precise fazer uma requisição a alguma API, esse método é um bom lugar para guardar tal requisição. O React permite o uso do setState nesse método.*

```js
const myUser = ''; //Preencha myUser com o seu user do GitHub.
try {
  const url = `https://api.github.com/users/${myUser}`;
  const response = await fetch(url)
  const dataJson = await response.json()
  this.setState({ api: dataJson})
} catch (error) {
  console.log(error)
}
```

#### src/components/Connections.js

*Método executado sempre que ocorrer alguma atualização. Comumente utilizado para atualizar o DOM de acordo com as alterações de estado ou props, e é um método que também pode ser utilizado para requisições à API. Recebe como parâmetros prevProps, prevState e snapshot, sendo os mais utilizados os dois primeiros.*

```js
const { list } = this.state;

if (prevState.list.length < list.length) {
this.changeToBlue();
// Ao adicionar um contato, a div ficará azul.
} else if (prevState.list.length > list.length) {
this.changeToCoral();
// Ao deletar um contato, a div ficará coral.
}
```
#### src/components/Profile.js

*Aqui você busca o método executado no momento anterior a completa desmontagem, destruição, do componente. Qualquer limpeza pode ser realizada neste método, seja cancelar a chamada de uma API, limpar localStorage ou parar a atualização de algum timer. Não se deve utilizar o setState nesse método, uma vez que o componente será destruído e, portanto, não ocorrerá uma nova atualização de estado nesse componente.*

```js
alert('Você ocultou seu perfil');
```

**Agora que você terminou a sua aplicação, você deve verificar que tudo está funcionando de acordo com o planejado. Para isso, selecionamos esta lista de celebridades do mundo da tecnologia que possuem um perfil no GitHub, para serem incluídos e incluídas na sua lista VIP de contatos:**

* Sandi Metz (skmetz) - Desenvolvedora de software e autora, especialista em código orientado a objetos em Ruby on Rails.
* Anders Hejlsberg (ahejlsberg) - Desenvolvedor do Delphi e Turbo Pascal.
* Brendan Gregg (brendangregg) - Engenheiro de núcleo e desempenho da Netflix.
* Guido van Rossum (gvanrossum) - Autor da linguagem de programação Python.
* Yukihiro Matsumoto (matz) - Criador da linguagem de programação Ruby,
* Brendan Eich (BrendanEich) - Criador da linguagem de programação JavaScript.
* Markus Persson (xNotch) - Fundador da Mojang Studios e criador do jogo Minecraft.
* Natalie Weizenbaum (nex3) - principal desenvolvedora e designer líder do Sass.


#### Verifique

1. Os dados do seu perfil GitHub foram exibidos ao iniciar a aplicação?
2. É possível exibir ou ocultar os dados do seu perfil?
3. É possível adicionar um contato na sua lista de contatos?
4. Ao adicionar o contato, o background mudou para um tom azulado?
5. É possível excluir um contato na sua lista de contatos?
6. Ao excluir o contato, o background mudou para um tom alaranjado?
7. O contador de contatos funciona perfeitamente?

**Se você respondeu SIM para todas as perguntas acima, você acabou de completar uma aplicação com todos os métodos comuns de ciclo de vida do React. Parabéns!**

#### src/components/Connections.js

*O método aqui é muito útil quando você não quer que a sua atualização de estado ou props gere uma nova renderização. Ele, portanto, é executado antes do método componentDidUpdate. O componentDidUpdate não será chamado se esse método retornar false. Recebe como parâmetros nextProps e nextState.*

```js
const maxContactsNumber = 3;

return list.length <= maxContactsNumber;
// A quantidade de contatos não pode ser maior que 3, portanto se a lista é maior que 3, ele deverá retornar false e impedir a atualização.
```

2. Nesse exercício, você construirá um componente em React que exibirá os dados pessoais de usuários entregues por uma api.

A api utilizada será a **randomuser** no endereço https://api.randomuser.me/ que, ao ser acessada, entrega um objeto contendo um usuário aleatório e seus dados pessoais num array de nome results . Exemplo:

```json
{
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "brad",
        "last": "gibson"
      },
      "location": {
        "street": "9278 new road",
        "city": "kilcoole",
        "state": "waterford",
        "postcode": "93027",
        "coordinates": {
          "latitude": "20.9267",
          "longitude": "-7.9310"
        },
        "timezone": {
          "offset": "-3:30",
          "description": "Newfoundland"
        }
      },
      "email": "brad.gibson@example.com",
      "login": {
        "uuid": "155e77ee-ba6d-486f-95ce-0e0c0fb4b919",
        "username": "silverswan131",
        "password": "firewall",
        "salt": "TQA1Gz7x",
        "md5": "dc523cb313b63dfe5be2140b0c05b3bc",
        "sha1": "7a4aa07d1bedcc6bcf4b7f8856643492c191540d",
        "sha256": "74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"
      },
      "dob": {
        "date": "1993-07-20T09:44:18.674Z",
        "age": 26
      },
      // ...
    }
  ]
}
```

Ciente disto, após ser montado no DOM, o seu componente deve fazer uma requisição para a api **randomuser** . Utilize o método `componentDidMount` .

Enquanto os dados não são entregues, deve ser renderizada uma `div` com o conteúdo *loading...*

Após a entrega dos dados, seu componente deve ser renderizado exibindo foto, nome, email e idade do usuário.

Caso a idade do usuário seja maior que 50, o componente NÃO deve ser renderizado. Aplique esta lógica no método `shouldComponentUpdate` .

**Dica!** Caso tenham dúvidas sobre como e onde fazer as chamadas de API, esse conteúdo pode ajudar!

* [Onde devemos integrar chamadas de APIs?](https://pt-br.reactjs.org/docs/faq-ajax.html)

Leonardo D Felix - Turma 15 Tribo A
[My repo](https://github.com/leonardodfelix/exercises-lifecycle-step-by-step)

## Execise

Leonardo D Felix - Turma 15 Tribo A
[My repo](https://github.com/leonardodfelix/exercise-dog-image)
