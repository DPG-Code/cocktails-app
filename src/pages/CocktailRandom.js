import Cocktail from '../components/Cocktail'
import useRandomCocktail from '../hooks/useRandomCocktail'

export default function CocktailRandom() {
  const path = 'random.php'
  const { cocktails, getCocktailsFromApi } = useRandomCocktail({path})

  return (
    <div>
      <h2>Random Cocktail</h2>
      <button onClick={getCocktailsFromApi}>Random</button>
      {
        cocktails?.map(cocktail => (
          <Cocktail
            key={cocktail.idDrink}
            idDrink={cocktail.idDrink}
            strDrink={cocktail.strDrink}
            strDrinkThumb={cocktail.strDrinkThumb}
          />
        ))
      }
    </div>
  )
}