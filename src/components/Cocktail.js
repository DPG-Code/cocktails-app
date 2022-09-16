import { Link } from "react-router-dom"

export default function Cocktail({ idDrink, strDrink, strDrinkThumb}) {
  return (
    <Link to={`/cocktail/${idDrink}`}>
      <p>{strDrink}</p>
      <img src={`${strDrinkThumb}/preview`} alt={strDrink}/>
    </Link>
  )
}