import { Component } from "react";

export default class ColorsClicker extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      clicks: 0,
      buttonColor: 'gray'
    }

  }

  handleClick() {
    this.setState((lastState, _props) => ({
      clicks: lastState.clicks + 1,
      buttonColor: (this.state.clicks % 2 === 0) ? 'gray' : 'green'
    }))
  }

  render() {
    console.log(this.state.buttonColor);
    return (
      <>
        <button onClick={this.handleClick} 
          style={{backgroundColor:`${this.state.buttonColor}`}}>
            Green For Even Numbers Button
        </button>
        <div className="green">Clicks: {this.state.clicks}</div>
      </>
    )
  }
}