import { useState } from 'react';
const PokemonList = (props) => {
	const [pokemon, setPokemon] = useState([]);

	const fetchPokemon = () => {
		fetch('https://pokeapi.co/api/v2/pokemon?limit=100000')
			.then(response => response.json())
			.then(response => setPokemon(response.results))
	};

	return (
		<div>
			<button className='btn-fetch' onClick={fetchPokemon}>Fetch pokemon</button>
			<ul style={{textAlign: "center", listStylePosition: "inside", padding: 0}}>
				{pokemon.length > 0 && pokemon.map((currentPokemon, index)=>{
					return (<li key={index}>{currentPokemon.name}</li>)
				})}
			</ul>
		</div>
    );
}
export default PokemonList;
