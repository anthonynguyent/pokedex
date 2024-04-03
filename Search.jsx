import React, { useState } from 'react';

const Search = () => {
	const [input, setInput] = useState('');

	const [pokemon, setPokemon] = useState({
		name: 'pikachu',
		height: 4,
		weight: 60,
		sprites: {
			front_default:
				'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
		},
	});

	const fetchPokemon = async () => {
		try {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`
			);
			const data = await response.json();
			setPokemon(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='search'>
			<h2>Search for a Pokemon</h2>
			{pokemon !== null && (
				<div id='pokemon-card'>
					<h2>{pokemon.name}</h2>
					<img src={pokemon.sprites.front_default} />
					<p>Height: {pokemon.height}</p>
					<p>Weight: {pokemon.weight}</p>
				</div>
			)}

			<div className='search-box'>
				<input
					type='text'
					placeholder='Enter Pokemon name'
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button onClick={fetchPokemon}>Search</button>
			</div>
		</div>
	);
};

export default Search;
