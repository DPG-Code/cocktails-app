import { Link } from "react-router-dom"

export default function Cocktail({ idDrink, strDrink, strDrinkThumb}) {
  return (
    <Link to={`/cocktail/${idDrink}`} className="flex relative overflow-hidden rounded-lg">
      <p className="z-10 py-2 w-full bg-black text-center text-white font-semibold absolute top-0">{strDrink}</p>
      <img
        src={`${strDrinkThumb}/preview`}
        alt={strDrink}
        className="object-cover"
      />
    </Link>
  )
}