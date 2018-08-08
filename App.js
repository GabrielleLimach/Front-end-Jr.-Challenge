import React, { Component } from 'react';
import './styles/App.css';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from '../Pokemon';

class App extends Component{
  constructor() {
    super();
    this.state = {
      pokemon: {}
    };

    this.Click = this.Click.bind(this);
  }

  Click(id) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);

        this.setState({ pokemon });
      })
      .catch(err => console.log(err));
    }
 
  render(){
    return(
      <div className="App">
        <PokeList Click={this.Click} />
        <DetailView pokemon={this.state.pokemon} />
      </div>

    );
  } 
}

export default App;