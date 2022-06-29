import React, { useEffect } from "react";
import "./Searchbar.css";
import { usePokemonList } from "../context/ListContext";
export const Searchbar = () => {
	const { search, setSearch, pokemons, setFilteredArr } = usePokemonList();
	useEffect(() => {
		const searchResult = pokemons?.filter((pokemon) =>
			pokemon?.name?.toLowerCase().includes(search.toLowerCase())
		);

		setFilteredArr(searchResult);
	}, [pokemons, search, setFilteredArr]);
	return (
		<div>
			<div className="search__bar">
				<input
					type="search"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="search__input"
					placeholder="Search"
				/>
			</div>
		</div>
	);
};
