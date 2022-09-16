const URL = 'https://www.thecocktaildb.com/api/json/v1/1'

export function getCocktailDetail({ id = '', path }) {
  return fetch(`${URL}/${path}${id}`)
  .then(res => res.json())
  .then(response => {
    const { drinks } = response
    const properties = Object.values(drinks[0])
    const ingredients = properties.slice(17, 32)
    
    const CocktailById = [
      drinks[0],
      ingredients
    ]

    return CocktailById
  })
}