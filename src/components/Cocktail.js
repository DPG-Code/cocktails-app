import { Link } from "react-router-dom"

export default function Cocktail({ idDrink, strDrink, strDrinkThumb}) {
  return (
    <Link to={`/cocktail/${idDrink}`} className="m-0 w-52 h-52 flex relative overflow-hidden items-center">
      <p className="z-20 py-3 px-2 w-full bg-[#000000ce] text-center text-white font-semibold absolute">{strDrink}</p>
      <div className="z-10 w-full h-full bg-[#00000044] absolute"></div>
      <img
        src={`${strDrinkThumb}/preview`}
        alt={strDrink}
        className="w-full h-full object-cover"
      />
    </Link>
  )
}