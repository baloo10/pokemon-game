import React, {Component} from "react";
import "./Pokecard.css";
/* const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
 */
const POKE_API ="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

//we make a fuction
// if the number is greater than 999, then we just return the number
//if not, then we take two numbers 00 + the number, and then slicing 3 digist out of that
// if the number is 2, then we add 00+2 002, and slice 002
//if the number is 23, then we add 00 to 23, 0023, and then slice 023,the back three
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);
class Pokecard extends Component{
    render(){
        //get the image
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <div className="Pokecard-image">
                    <img src={imgSrc} alt={this.props.name}/>
                </div>
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">Exp: {this.props.exp}</div>
            </div>
        )
    }
}

 export default Pokecard;