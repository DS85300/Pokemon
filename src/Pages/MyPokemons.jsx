import { useState, useEffect } from 'react';
import { Link } from 'react-router';

const MyPokemons = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=40');
        const data = await response.json();
        console.log(data);
        setPokemon(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Ooops, you screwed it up', error);
        setLoading(false);
      }
    };
    fetchPokemon();
  }, []);

  if (loading) {
    return <div>.....loading pokemons</div>;
  }

  return (
    <div className="grid grid-cols-2 grid-row-12 sm:grid-cols-4 md:grid-col-6 lg:grid-col-8">
      {pokemon.map((p, index) => (
        <div className="bg-[#E1A2B7] border-4 w-min m-6 p-2" key={index}>
          <h1 className="bg-yellow-100 rounded">{p.name}</h1>
          <Link to={`/favorites/${p.name}`} key={p.name}>
            <p className="bg-blue-400 text-[12px]">detailed Card</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MyPokemons;
