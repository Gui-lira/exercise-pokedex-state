import React, {Component} from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';


class App extends Component {
  constructor() {
    super()
    this.filterclick = this.filterclick.bind(this);
    this.state = {
      buttonValue: 'Normal'
    }
  }
  reducingArr(array) {
    const arr = [];
    array.forEach(element => {
      if (!arr.includes(element.type)) {
        arr.push(element.type)
      }
    });
    // console.log(arr);
    return arr;
  }
  filterclick(event) {
    const test = event.target.value
    this.setState((_props) => ({ buttonValue: test }))
  }
  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons.filter((pokemon) => pokemon.type === this.state.buttonValue)} />
        {this.reducingArr(pokemons).map((type) => <button onClick={this.filterclick} value={type}>{type}</button>)}
      </div>
    );
  }  
}

export default App;