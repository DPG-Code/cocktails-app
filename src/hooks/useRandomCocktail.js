import { useState } from 'react'
import { getRandomCocktail } from '../services/getRandomCocktail'

export default function useRandomCocktail({ path }) {
  const [ cocktails , setCoctails ] = useState([])

  const getCocktailsFromApi = async () => {
    const results = await getRandomCocktail({ path })
    setCoctails(results)
  }

  return { cocktails, getCocktailsFromApi }
}