import './App.css';
import CocktailRandom from './pages/CocktailRandom';
import Search from './pages/Search';

// `${URL}/lookup.php?i=${id}`

function App() {
  return (
    <div className="App">
      <Search />
      <CocktailRandom />
    </div>
  );
}

export default App;
