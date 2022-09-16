import { useState } from 'react'
import Cocktail from '../components/Cocktail'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1'
const RANDOM_COCKTAIL = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export default function CocktailByLetter() {
  const [ cocktailByLetter, setCocktailByLetter ] = useState([])

  const getCocktailByLetter = (letter) => {
    fetch(`${URL}/search.php?f=${letter.toLowerCase()}`)
      .then(res => res.json())
      .then(response => {
        const { drinks } = response
        setCocktailByLetter(drinks)
      })
  }

  return (
    <div>
      <h2>Cocktail letter</h2>
      {
        RANDOM_COCKTAIL.map(letter => (
          <button key={letter} onClick={() => getCocktailByLetter(letter)}>{letter}</button>
        ))
      }
      {
        cocktailByLetter?.map(cocktail => (
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