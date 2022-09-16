import { useState } from 'react'
import Cocktail from '../components/Cocktail'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1'

export default function CocktailsAlcholic() {
  const [ cocktailIsAlcholic , setCoctailIsAlcholics ] = useState([])

  const getCoctailsAlcholic = (alcholic) => {
    fetch(`${URL}/filter.php?a=${alcholic}`)
      .then(res => res.json())
      .then(response => {
        const { drinks } = response
        setCoctailIsAlcholics(drinks)
      })
  }

  return (
    <div>
      <h2>Filter Alcholic or No Alcholic</h2>
      <button onClick={() => getCoctailsAlcholic('Alcoholic')}>Alcholic</button>
      <button onClick={() => getCoctailsAlcholic('Non_Alcoholic')}>No Alcholic</button>
      {
        cocktailIsAlcholic?.map(cocktail => (
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