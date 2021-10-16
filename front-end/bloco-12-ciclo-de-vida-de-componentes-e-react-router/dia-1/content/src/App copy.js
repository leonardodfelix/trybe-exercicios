import React, { Component }from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      characters: [],
    };
  }

  fetchCharacters = async () => {
    this.setState({
      loading: true,
    }, () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({
        characters: data.results,
        loading: false,
      })
    })}
    )
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters, loading } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          { loading ? <h1>Loading</h1>
          : characters.map(({ name, image }) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;