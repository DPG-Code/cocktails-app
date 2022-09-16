import Cocktail from '../components/Cocktail'
import useCocktails from '../hooks/useCocktails'

export default function CocktailsAlcholic() {
  const path = 'filter.php?a='
  const { cocktails, getCocktailsFromApi } = useCocktails({path})

  return (
    <div>
      <h2>Filter Alcholic or No Alcholic</h2>
      <button onClick={() => getCocktailsFromApi('Alcoholic')}>Alcholic</button>
      <button onClick={() => getCocktailsFromApi('Non_Alcoholic')}>No Alcholic</button>
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