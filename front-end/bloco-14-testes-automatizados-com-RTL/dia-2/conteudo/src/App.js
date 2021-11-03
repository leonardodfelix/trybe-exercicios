// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       joke: '',
//     };
//   }

//   componentDidMount() {
//     const API_URL = 'https://icanhazdadjoke.com/';
//     fetch(API_URL, { headers: { Accept: 'application/json' } })
//       .then((response) => response.json())
//       .then((data) => this.setState({ joke: data.joke }));
//   }

//   render() {
//     const { joke } = this.state;

//     return (
//       <div className="App">
//         {joke}
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
    };
  }

  handleInput(e) {
    const { name, value } = e.target;
    // console.log(name, value);
    this.setState({ [name]: value });
  }

  render() {
    const { nome, email } = this.state;

    return (
      <div>
        <h1>Teste de inputs</h1>
        <p>
          <label htmlFor="nome">
            Nome
            <input
              type="text"
              id="nome"
              name="nome"
              value={ nome }
              onChange={ (e) => this.handleInput(e) }
            />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              id="email"
              name="email"
              value={ email }
              onChange={ (e) => this.handleInput(e) }
            />
          </label>
        </p>
      </div>
    );
  }
}
export default App;