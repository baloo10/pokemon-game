import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';
 
class Pokedex extends Component{
    
    render(){
        let title;
        if(this.props.isWinner){
            title = <h1 className="Pokedex-winner">Winning hand </h1>
        } else {
            //if you come here, you have lsot
            title = <h1 className="Pokedex-loser">Losing hand </h1>
        }
        return(
            //we make a basic loop
            //this.props.pokeman, will give us all the pokemons that is above
            //after ? if you are a winner, say Winner else Loser 
            //<p className="">{this.props.isWinner ? 'Winner' : 'Loser!'}</p>
            <div className="Pokedex">
                {title}
                <h4> Totale Experience: {this.props.exp}</h4>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p)=>(
                    //what we will return
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>
                    ))}
                </div>
            </div>            
        );
    }
}

export default Pokedex;