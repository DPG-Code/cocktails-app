const URL = 'https://www.thecocktaildb.com/api/json/v1/1'

export function getResults({ path, query }) {
  return fetch(`${URL}/${path}${query}`)
        .then(res => res.json())
        .then(response => {
          const { drinks } = response
          return drinks
        })
}