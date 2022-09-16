import { useState } from 'react'
import { getCocktails } from '../services/getCocktails'

export default function useCocktails({ path }) {
  const [ cocktails , setCoctails ] = useState([])

  const getCocktailsFromApi = async (keyword = '') => {
    const results = await getCocktails({ path, keyword })
    setCoctails(results)
  }

  return { cocktails, getCocktailsFromApi }
}