import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const URL = 'https://www.thecocktaildb.com/api/json/v1/1'

export default function CocktailDetail() {
  const [ cocktail, setCocktail ] = useState([])
  const { id } = useParams()

  useEffect(() => {
    try {
      fetch(`${URL}/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(response => {
          const { drinks } = response
          const properties = Object.values(drinks[0])
          const ingredients = properties.slice(17, 32)
          
          const CocktailById = [
            drinks[0],
            ingredients
          ]

          setCocktail(CocktailById)
        })
    } catch (error) {
      throw new Error('Cocktail not found')
    }
  }, [id])

  return (
    <div>
      {
        cocktail[0]
        ? <div key={cocktail[0].idDrink}>
            <h2>Name: {cocktail[0].strDrink}</h2>
            <img src={cocktail[0].strDrinkThumb} alt={cocktail[0].strDrink}/>
            <small>{cocktail[0].strTags || ''}</small>
            <small>{cocktail[0].strCategory || ''}</small>
            <small>{cocktail[0].strIBA || ''}</small>
            <small>{cocktail[0].strAlcoholic || ''}</small>
            <small>{cocktail[0].strGlass || ''}</small>
            <p>Instructions: {cocktail[0].strInstructions}</p>
            <p>Ingredients</p>
            {
              cocktail[1].map((ingredient, i) => (
                <span key={i}>{ingredient || ''}</span>
              ))
            }
          </div>
        : ''
      }
    </div>
  )
}