import React from 'react';
import './Pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/' +
  'PokeAPI/sprites/master/sprites/pokemon/';

function Pokecard(props) {
  let imagePokemon = `${POKE_API}${props.id}.png`;

  return (
      <div className="Pokecard">
        <div className="Pokecard-name">{ props.name }</div>
        <img src={imagePokemon} />
        <div className="Pokecard-info">Type: {props.type}</div>
        <div className="Pokecard-info">EXP: {props.exp}</div>
      </div>
  );
}

export default Pokecard;
