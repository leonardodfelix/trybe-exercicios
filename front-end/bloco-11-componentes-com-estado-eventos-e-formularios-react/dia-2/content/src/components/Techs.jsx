import React, { Component } from "react";

class Techs extends Component {
  render() {
    const { handleChange, name } = this.props;

    let error = undefined;
    if (name === '') error = ' Select a tech';

    return (
      <fieldset>
        <legend>Professional</legend>
        <label htmlFor="techs">Choose a technology:
          <select name="techs" id="techs" value={name} onChange={handleChange}>
            <option value=""></option>
            <option value="javascript">Javascript</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="python">Python</option>
          </select>
          <span>{error ? error : ''}</span>
        </label>
      </fieldset>
    )
  }
}

export default Techs