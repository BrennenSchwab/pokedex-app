import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";


function Pokedex(props) {

  return (
    <div className="Pokedex">
      <h2 className="Pokedex-name">Pokedex</h2>
      <div className="Pokedex-card">
        {props.pokemon.map(p => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
      <h4>Total experience: {props.exp}</h4>
    </div>
  );
}

export default Pokedex;
