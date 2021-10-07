import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    console.log(this);
    console.log('Botão clicado');
  }

  render() {
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App;
