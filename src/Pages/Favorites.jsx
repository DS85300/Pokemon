import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const Favorites = () => {
  const { name } = useParams();  // Get the name parameter from the URL
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetailsPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        console.log(data);
        setPokemon(data);
        setLoading(false);  // Set loading to false once data is fetched
      } catch (error) {
        console.error(error);
        setLoading(false);  // Stop loading even on error
      }
    };

    fetchDetailsPokemon();
  }, [name]);

  if (loading) {
    return (
      <div>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  if (!pokemon) {
    return <div>No Pokémon found...</div>;
  }

  return (
    <>
    <div className="bg-[#BEE9ED] h-screen">
      <div className=" card border-2 bg-red-400 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{pokemon.name.toUpperCase()}</h2>
          <p className="text-sm">Type: {pokemon.types.map((t) => t.type.name).join(', ')}</p>
          <p className="text-sm">Height: {pokemon.height}</p>
          <p className="text-sm">Weight: {pokemon.weight}</p>
          <p className="text-sm">Attack: {pokemon.stats[1].base_stat}</p>
          <p className="text-sm">Defense: {pokemon.stats[2].base_stat}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Add to favorites</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Favorites;
