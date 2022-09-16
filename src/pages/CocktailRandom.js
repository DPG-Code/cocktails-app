import { useState } from 'react'
import Cocktail from '../components/Cocktail'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1'

export default function CocktailRandom() {
  const [ randomCocktail, setRandomCocktail ] = useState([])

  const getRandomCocktail = (letter) => {
    fetch(`${URL}/random.php`)
      .then(res => res.json())
      .then(response => {
        const { drinks } = response
        setRandomCocktail(drinks)
      })
  }

  return (
    <div>
      <h2>Random Cocktail</h2>
      <button onClick={getRandomCocktail}>Random</button>
      {
        randomCocktail?.map(cocktail => (
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