import { useEffect, useState } from "react"
import { getCocktailDetail } from "../services/getCocktailDetail"

export default function useCocktailDetail({ id }) {
  const [ cocktail, setCocktail ] = useState([])
  const path = 'lookup.php?i='

  useEffect(() => {
    const getDetails = async () => {
      const result = await getCocktailDetail({ id, path })
      setCocktail(result)
    }
    getDetails()
  }, [id])


  return { cocktail }
}