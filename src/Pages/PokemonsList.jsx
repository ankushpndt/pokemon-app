import React, { useState } from 'react';
import { usePokemonList } from '../context/ListContext';
import { v4 } from 'uuid';
import InfiniteScroll from 'react-infinite-scroll-component';
import PokemonDetails from './PokemonDetails';
import axios from 'axios';

const PokemonsList = () => {
  const { filteredArr, page, setPage, setFilteredArr, setPokemons } =
    usePokemonList();
  const [hasMore, sethasMore] = useState(true);
  const fetchPokemons = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${page}`
    );
    function pokemonDetailsFunc(result) {
      result?.forEach(async (pokemon) => {
        const response = await axios.get(
          ` https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );

        setPokemons((currentList) => [...currentList, response?.data]);
      });
    }
    pokemonDetailsFunc(response?.data?.results);
    return response?.data?.results;
  };

  const fetchData = async () => {
    const pokemonsFromServer = await fetchPokemons();

    setFilteredArr([...filteredArr, ...pokemonsFromServer]);
    if (pokemonsFromServer.length === 0 || pokemonsFromServer.length < 50) {
      sethasMore(false);
    }
    setPage(page + 1);
  };

  return (
    <div className='list__of__pokemon'>
      <ul>
        <InfiniteScroll
          dataLength={filteredArr?.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          {filteredArr
            ?.slice(0)
            .sort((a, b) => a?.id - b?.id)
            .map((pokemon) => {
              return (
                <div key={v4()} className='pokemon-container'>
                  <PokemonDetails
                    id={pokemon?.id}
                    name={pokemon?.name}
                    image={pokemon?.sprites?.other?.dream_world?.front_default}
                    type={
                      pokemon?.types ? pokemon?.types[0]?.type?.name : undefined
                    }
                    stats={pokemon?.stats}
                  />
                </div>
              );
            })}
        </InfiniteScroll>
      </ul>
    </div>
  );
};

export default PokemonsList;
