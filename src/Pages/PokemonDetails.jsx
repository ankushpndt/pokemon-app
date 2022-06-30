import React, { useState } from 'react';
import PokemonStats from './PokemonStats';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { usePokemonList } from '../context/ListContext';
const PokemonDetails = ({ image, name, id, type, stats }) => {
  const style = type + ' thumb-container';
  const { savedPokemon, setSavedPokemon } = usePokemonList();
  const saveHandler = () => {
    setSavedPokemon((currentList) => [
      ...currentList,
      { image, name, id, type, stats },
    ]);
  };
  const checkPokemon = savedPokemon?.some((pokemon) => pokemon.id === id);
  const [show, setShow] = useState(true);

  return (
    <>
      <div
        onMouseEnter={() => setShow(false)}
        onMouseLeave={() => setShow(true)}
      >
        {show ? (
          <div className={style}>
            <LazyLoadImage alt={name} src={image} effect='blur' />

            <div className='number'>
              <small>#0{id}</small>
            </div>

            <div className='detail-wrapper'>
              <h3>{name}</h3>
              <small>Type: {type}</small>
            </div>
          </div>
        ) : (
          <div>
            <PokemonStats stats={stats} />
          </div>
        )}
      </div>

      <button
        className='save-btn'
        onClick={saveHandler}
        disabled={checkPokemon}
      >
        Save
      </button>
    </>
  );
};

export default PokemonDetails;
