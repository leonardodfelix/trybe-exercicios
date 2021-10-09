import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      techs: '',
      name: '',
      birthday: '',
      feedback: ''
    };
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { techs, name, birthday } = this.state;

    return (
      <>
        <h2>Componentes controlados</h2>
        <form className="form">
          <label htmlFor="techs">Choose a technology: </label>
          <select name="techs" id="techs" value={this.state.techs} onChange={this.handleChange}>
            <option value="javascript">Javascript</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="python">Python</option>
          </select>
          <br />
          <br />
          <label htmlFor="name">Your name: </label>
          <input id="name" type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
          <br />
          <br />
          <label htmlFor="birthday">Birthday: </label>
          <input type="date" id="birthday" name="birthday" value={this.state.birthday} onChange={this.handleChange}></input>
          <br />
          <br />
          Feedback:
          <textarea id="feedback" name="feedback" rows="4" cols="50" maxLength="200" value={this.state.feedback} onChange={this.handleChange}>

          </textarea>
        </form>
      </>
    );
  }
}

export default Form;