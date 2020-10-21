import React, { Component } from 'react'
import Pokedex from './Pokedex';
//import Pokedex from './Pokedex';

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    };

    render(){
        let hand1 = [];
        //hand2 contains the content of the pokemon array
        let hand2 = [...this.props.pokemon]; 
        while (hand1.length < hand2.length){
            let randIndex = Math.floor(Math.random() * hand2.length);
            //here we grab the random pokemon
            //we just take one element, this is why splice have 1, but we can take more than 1 element if we want
            let randomPokemon = hand2.splice(randIndex,1)[0];
            //then we want to push that random pokemon in
            hand1.push(randomPokemon);
        }


        //we add each experience toghter
        //we go thro hand1, and for each pokemon, we gonna take the base experience and add it to exp, starting from 0
        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        return(
        <div>
            <Pokedex pokemon= {hand1} exp={exp1} isWinner={exp1>exp2}/>
            <Pokedex pokemon= {hand2} exp={exp2} isWinner={exp1<exp2}/>
        </div>
        );
    }
}

export default Pokegame;