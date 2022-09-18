import Cocktail from '../components/Cocktail'
import useRandomCocktail from '../hooks/useRandomCocktail'

export default function CocktailRandom() {
  const path = 'random.php'
  const { cocktails, getCocktailsFromApi } = useRandomCocktail({path})

  return (
    <div  className='z-30 w-full h-screen flex flex-col items-center flex-wrap justify-center gap-4'>
      <button
        onClick={getCocktailsFromApi}
        className="mb-4 py-2 px-4 bg-[#000000ce] border-solid border border-white text-sm text-white font-semibold"
      >
        Get random Cocktail
      </button>
      {
        cocktails.length > 0
        ? cocktails.map(cocktail => (
          <Cocktail
            key={cocktail.idDrink}
            idDrink={cocktail.idDrink}
            strDrink={cocktail.strDrink}
            strDrinkThumb={cocktail.strDrinkThumb}
          />
        ))
        : <div className='w-52 h-52 bg-black text-white text-5xl font-bold flex items-center justify-center'>¿?</div>
      }
    </div>
  )
}