import React, { Component } from 'react'
import ValidEmail from './ValidEmail';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
      isSent: false,
    };
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '', isSent: true });
  }

  render() {
    const { email, saveEmail, isSent } = this.state;
    return (
      <>
        <h2>Learn React Testing Library</h2>
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            value={ email }
            type="email"
            onChange={ (e) => this.changeEmail(e.target.value) }
          />
        </label>
        <input
          id="btn-send"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={ () => this.changeSaveEmail(email) }
        />
        <input id="btn-back" type="button" value="Voltar" />
        {/* <h2 data-testid="id-email-user">{`Valor: ${saveEmail}`}</h2> */}
        <ValidEmail email={ saveEmail } isSent={ isSent } />
      </>
    );
  }
}