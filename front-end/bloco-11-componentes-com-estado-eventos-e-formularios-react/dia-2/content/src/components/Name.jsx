import React, { Component } from "react";

class Name extends Component {
  render() {
    const { handleChange, name } = this.props;

    let error = undefined;
    if (name === '') error = ' Type your name';
    if (name.length > 30) error = ' Name too long';

    return (
      <label htmlFor="name">Your name:
        <input id="name" type="text" name="name" value={name} onChange={handleChange} />
        <span>{error ? error : ''}</span>
      </label>
    )
  }
}

export default Name