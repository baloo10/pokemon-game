import React from 'react';
//import Pokedex from "./Pokedex";
//import Pokecard from './Pokecard';
import Pokegame from './Pokegame';
import './App.css';
import Pokecard from './Pokecard';

function App() {
  //pokedex will render all the pokecards fo rus
  return (
    <div className="App">
      <header className="App-header">
        <Pokegame/>
      </header>
    </div>
  );
}

export default App;
