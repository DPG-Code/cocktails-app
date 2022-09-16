import { useParams } from "react-router-dom"
import useCocktailDetail from "../hooks/useCocktailDetail"
import CocktailDetails from "../components/CocktailDetails"

export default function CocktailDetail() {
  const { id } = useParams()
  const { cocktail } = useCocktailDetail({id})

  return (
    <div>
      {
        cocktail[0]
        ? <CocktailDetails
          key={cocktail[0].idDrink}
          strDrink={cocktail[0].strDrink || ''}
          strDrinkThumb={cocktail[0].strDrinkThumb || ''}
          strTags={cocktail[0].strTags || ''}
          strCategory={cocktail[0].strCategory || ''}
          strIBA={cocktail[0].strIBA || ''}
          strAlcoholic={cocktail[0].strAlcoholic || ''}
          strGlass={cocktail[0].strGlass || ''}
          strInstructions={cocktail[0].strInstructions || ''}
          ingredients={cocktail[1]}
        />
        : ''
      }
    </div>
  )
}