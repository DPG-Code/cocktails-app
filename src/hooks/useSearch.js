import { useState } from 'react'
import { getResults } from '../services/getResults'

export default function useSearch() {
  const [ cocktails, setCocktails ] = useState([])
  const [ keyword, setKeyword ] = useState('')
  const path = 'search.php?s='
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const results = await getResults({path, keyword})
    setCocktails(results)
  }

  const handleChange = (e) => {
    const query = e.target.value
    setKeyword(query)
  }

  return { cocktails, keyword, handleSubmit, handleChange }
}