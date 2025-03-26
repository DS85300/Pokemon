import { Link } from "react-router";


const Navbar =()=> {

    return (
    <>
    <Link to="MyPokemons">
        <div className="navbar bg-[#941f8a] text-neutral-content">
            <button className="btn btn-ghost text-xl">My Pokemons</button>
        </div>
    </Link>
      <div className="navbar bg-[#e7f20f] text-black">
        <button className="btn btn-ghost text-xl">Favorite Pokemon</button>
      </div>
       
   </>
   
    );
};

export default Navbar;
