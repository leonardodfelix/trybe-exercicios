import React, { Component } from 'react';
import './App.css';
import ColorsClicker from './Components/ColorsClicks';
import GreenForEvens from './Components/GreenForEvens';

class App extends Component {
  render() {
    return (
      <>
        <ColorsClicker />
        <hr/>
        <GreenForEvens />
      </>
    )
  }
}

export default App;
