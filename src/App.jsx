import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="navbar bg-[#941f8a] text-neutral-content">
  <button className="btn btn-ghost text-xl">My Pokemons</button>
</div>

<div className="navbar bg-[#1f9473]">
  <button className="btn btn-ghost text-xl">Favorite Pokemons</button>
</div>

<div className="navbar bg-[#e7f20f] text-black">
  <button className="btn btn-ghost text-xl">Something Else with Pokemon</button>
</div>
    

    </>
  )
}

export default App
