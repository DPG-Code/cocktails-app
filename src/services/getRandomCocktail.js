const URL = 'https://www.thecocktaildb.com/api/json/v1/1'

export function getRandomCocktail({ path }) {
  return fetch(`${URL}/${path}`)
      .then(res => res.json())
      .then(response => {
        const { drinks } = response
        return drinks
      })
}