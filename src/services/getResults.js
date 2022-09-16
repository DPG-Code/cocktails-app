const URL = 'https://www.thecocktaildb.com/api/json/v1/1'

export function getResults({ path, keyword }) {
  return fetch(`${URL}/${path}${keyword}`)
      .then(res => res.json())
      .then(response => {
        const { drinks } = response
        return drinks
      })
}