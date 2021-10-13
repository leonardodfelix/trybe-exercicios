import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      techs: 'javascript',
      name: '',
      birthday: '',
      feedback: '',
      isLooking: false,
      favPic: ''
    };
  }

  handleChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { techs, name, birthday, feedback } = this.state
    return (
      <>
        <h2>Componentes controlados</h2>
        <form className="form">
          <fieldset>
            <legend>Professional</legend>
            <label htmlFor="techs">Choose a technology: </label>
            <select name="techs" id="techs" value={techs} onChange={this.handleChange}>
              <option value="javascript">Javascript</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="python">Python</option>
            </select>
          </fieldset>
          <br />
          <fieldset>
            <legend>Personal</legend>
            <label htmlFor="name">Your name: </label>
            <input id="name" type="text" name="name" value={name} onChange={this.handleChange}></input>
            <br />
            <br />
            <label htmlFor="birthday">Birthday: </label>
            <input type="date" id="birthday" name="birthday" value={birthday} onChange={this.handleChange}></input>
          </fieldset>
          <br />
          <fieldset>
            <legend>Stuff</legend>
            <span>Looking for job? </span>
            <input type="checkbox" name="isLooking" onChange={this.handleChange} />
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