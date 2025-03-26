import './App.css';
import { Routes, Route } from 'react-router';
import Favorites from './Pages/Favorites';
import MyPokemons from './Pages/MyPokemons';
import Layout from './Layout/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/myPokemons" element={<MyPokemons />} />
          <Route path="/favorites/:name" element={<Favorites />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
