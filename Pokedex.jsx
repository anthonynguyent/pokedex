import React, { useState, useEffect } from 'react';

const Pokedex = () => {
	const [pokemons, setPokemons] = useState([
		{ name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
		{ name: 'Ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
		{ name: 'Venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
	]);

	const fetchPokemon = async () => {
		try {
			const response = await fetch('https://pokeapi.co/api/v2/pokemon');
			const data = await response.json();
			setPokemons(data.results);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchPokemon();
	}, []);

	return (
		<div className='pokedex'>
			<h2>All Pokemon</h2>
			<ul>
				{pokemons.map((pokemon) => {
					// Extract the ID from the URL (works for single and double digits)
					const pokemonId = pokemon.url.split('/')[6]; // Get the 7th element (index 6) after splitting by '/'

					return (
						<li key={pokemon.name}>
							<img
								src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
								alt={pokemon.name}
							/>
							{pokemon.name}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Pokedex;
