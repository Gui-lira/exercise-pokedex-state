import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super()
        this.NextPokemon = this.NextPokemon.bind(this)
        this.state = {
            index: 0
        }
    }
    NextPokemon() {
        const length = this.props.pokemons.length;
        if (this.state.index === length - 1) {
            this.setState({ index: 0})
        }
        else {
            this.setState((pastState,_props) => ({
                index: pastState.index + 1
            }))
        }
    }
    render() {
        // console.log(this.state)
        const pokemon = this.props.pokemons[this.state.index]
        // console.log(pokemon);
        return (
            
            <div className="pokedex">
                <Pokemon key={pokemon.id} pokemon={pokemon} />
                <button onClick={this.NextPokemon}>Next</button>
            </div>
        );
    }
}

export default Pokedex;