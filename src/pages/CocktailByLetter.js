import Cocktail from '../components/Cocktail'
import useCocktails from '../hooks/useCocktails'

const RANDOM_COCKTAIL = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export default function CocktailByLetter() {
  const path = 'search.php?f='
  const { cocktails, getCocktailsFromApi } = useCocktails({path})

  return (
    <div>
      <h2>Cocktail letter</h2>
      {
        RANDOM_COCKTAIL.map(letter => (
          <button key={letter} onClick={() => getCocktailsFromApi(letter)}>{letter}</button>
        ))
      }
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