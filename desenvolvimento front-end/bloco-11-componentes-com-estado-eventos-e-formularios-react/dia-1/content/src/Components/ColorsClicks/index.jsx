import { Component } from "react";

export default class ColorsClicker extends Component {
  constructor() {
    super();

    this.handleRedClick = this.handleRedClick.bind(this);
    this.handleGreenClick = this.handleGreenClick.bind(this);
    this.handleBlueClick = this.handleBlueClick.bind(this);

    this.state = {
      redClicks: 0,
      greenClicks: 0,
      blueClicks: 0
    }

  }

  handleRedClick() {
    this.setState((lastState, _props) => ({
      redClicks: lastState.redClicks + 1,
    }))
  }

  handleGreenClick() {
    this.setState((lastState, _props) => ({
      greenClicks: lastState.greenClicks + 1,
    }))
  }

  handleBlueClick() {
    this.setState((lastState, _props) => ({
      blueClicks: lastState.blueClicks + 1,
    }))
  }

  render() {
    return (
      <>
        <button onClick={this.handleRedClick}>Red Button</button>
        <button onClick={this.handleGreenClick}>Green Button</button>
        <button onClick={this.handleBlueClick}>Blue Button</button>
        <div id="colors">
          <div className="red">Red: {this.state.redClicks}</div>
          <div className="green">Green: {this.state.greenClicks}</div>
          <div className="blue">Blue: {this.state.blueClicks}</div>
        </div>
        <div id="result" style={`backgroundColor:rgb(${this.state.redClicks * 10},
          ${this.state.greenClicks * 10},
          ${this.state.blueClicks * 10})`}></div>
      </>
    )
  }
}