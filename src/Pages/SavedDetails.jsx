import React from 'react';
import PokemonStats from './PokemonStats';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const SavedDetails = ({ image, name, id, type, stats }) => {
  const style = type + ' thumb-container';

  return (
    <>
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
      <div>
        <PokemonStats stats={stats} />
      </div>
    </>
  );
};

export default SavedDetails;
