import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const ListContext = createContext();
export const ListProvider = ({ children }) => {
	const [pokemons, setPokemons] = useState([]);
	const [search, setSearch] = useState("");
	const [filteredArr, setFilteredArr] = useState([...pokemons]);
	// const [loading, setLoading] = useState(false);
	// const [loadMore, setLoadMore] = useState(
	// 	"https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
	// );
	const [page, setPage] = useState(50);

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(
					`https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`
				);

				// setLoadMore(response?.data?.next);

				function pokemonDetailsFunc(result) {
					result?.forEach(async (pokemon) => {
						const response = await axios.get(
							` https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
						);

						setPokemons((currentList) => [...currentList, response?.data]);
					});
				}
				pokemonDetailsFunc(response?.data?.results);
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);
	console.log({ pokemons });
	return (
		<ListContext.Provider
			value={{
				pokemons,
				setPokemons,
				filteredArr,
				setFilteredArr,
				search,
				setSearch,
				page,
				setPage,
			}}
		>
			{children}
		</ListContext.Provider>
	);
};

export const usePokemonList = () => useContext(ListContext);
