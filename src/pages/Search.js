import { useState } from 'react'
import Cocktail from '../components/Cocktail'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1'

export default function Search() {
  const [ cocktails, setCocktails ] = useState([])
  const [ keyword, setKeyword ] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${URL}/search.php?s=${keyword}`)
      .then(res => res.json())
      .then(response => {
        const { drinks } = response
        setCocktails(drinks)
      })
  }

  const handleChange = (e) => {
    const query = e.target.value
    setKeyword(query)
  }

  return (
    <div>
      <h2>Search Cocktail</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={keyword} onChange={handleChange}/>
      </form>
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