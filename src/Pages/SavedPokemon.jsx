import React from 'react';
import { usePokemonList } from '../context/ListContext';
import SavedDetails from './SavedDetails';
import { v4 } from 'uuid';

const SavedPokemon = () => {
  const { savedPokemon } = usePokemonList();
  return (
    <div>
      <h1>SavedPokemon</h1>
      {savedPokemon?.map((pokemon) => {
        return (
          <div key={v4()} className='pokemon-container'>
            <SavedDetails
              id={pokemon?.id}
              name={pokemon?.name}
              image={pokemon?.sprites?.other?.dream_world?.front_default}
              type={pokemon?.types ? pokemon?.types[0]?.type?.name : undefined}
              stats={pokemon?.stats}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SavedPokemon;
