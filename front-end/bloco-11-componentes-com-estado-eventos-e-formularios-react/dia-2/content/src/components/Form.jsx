import React, { Component } from 'react'
import Name from './Name';
import Techs from './Techs';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.checkForErrors = this.checkForErrors.bind(this);

    this.state = {
      techs: '',
      name: '',
      birthday: '',
      feedback: '',
      isLooking: false,
      favPic: '',
      hasErrors: true,
    };
  }

  checkForErrors() {
    const { techs, name } = this.state;
    if (techs.length === 0 || name.length === 0) return true
    return false
  }

  handleChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
      hasErrors: this.checkForErrors()
    });

  }

  render() {
    const { techs, name, birthday, feedback, hasErrors } = this.state
    return (
      <>
        <h2>Componentes controlados</h2>
        <form className="form">
          <Techs
            name={techs}
            handleChange={this.handleChange}
            hasErrors={hasErrors}
          />
          <br />
          <fieldset>
            <legend>Personal</legend>
            <Name
              name={name}
              handleChange={this.handleChange}
              hasErrors={hasErrors}
            />
            <br />
            <br />
            <label htmlFor="birthday">Birthday: </label>
            <input type="date" id="birthday" name="birthday" value={birthday} onChange={this.handleChange}></input>
          </fieldset>
          <br />
          <fieldset>
            <legend>Stuff</legend>
            <label>Looking for job?
              <input type="checkbox" name="isLooking" onChange={this.handleChange} />
            </label>
            <label for="yes">yes</label><br />
            <p>Favorite picture:</p>
            <input type="file" name="favPic" onChange={this.handleChange} />
            <br />
            <p>Feedback:</p>
            <textarea id="feedback" name="feedback" rows="4" cols="50" maxLength="200" value={feedback} onChange={this.handleChange}>
            </textarea>
          </fieldset>
        </form>
      </>
    );
  }
}

export default Form;