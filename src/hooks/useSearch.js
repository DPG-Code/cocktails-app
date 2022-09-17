import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getResults } from '../services/getResults'

export default function useSearch() {
  const [ cocktails, setCocktails ] = useState([])

  const { query } = useParams()
  const path = 'search.php?s='
  
  useEffect(() => {
    const getResultsApi = async ({path, query}) => {
      const results = await getResults({path, query})
      setCocktails(results)
    }
    getResultsApi({path, query})
  }, [query])

  return { cocktails }
}