const URL = 'https://www.thecocktaildb.com/api/json/v1/1'

export function getCocktails({ path, keyword }) {
  return fetch(`${URL}/${path}${keyword ? keyword : '' }`)
      .then(res => res.json())
      .then(response => {
        const { drinks } = response
        return drinks
      })
}