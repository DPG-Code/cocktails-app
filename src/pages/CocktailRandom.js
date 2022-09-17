import Cocktail from '../components/Cocktail'
import LayoutResults from '../components/LayoutResults'
import useRandomCocktail from '../hooks/useRandomCocktail'

export default function CocktailRandom() {
  const path = 'random.php'
  const { cocktails, getCocktailsFromApi } = useRandomCocktail({path})

  return (
    <div  className='w-full flex flex-col items-center flex-wrap justify-center gap-4'>
      <h2 className='mt-20 mb-16 text-3xl text-center font-bold'>Random Cocktail</h2>
      <button
        onClick={getCocktailsFromApi}
        className="py-2 px-4 bg-black text-sm text-white font-semibold rounded-lg"
      >
        Random
      </button>
      <LayoutResults>
        {
          cocktails?.map(cocktail => (
            <Cocktail
              key={cocktail.idDrink}
              idDrink={cocktail.idDrink}
              strDrink={cocktail.strDrink}
              strDrinkThumb={cocktail.strDrinkThumb}
            />
          ))
        }
      </LayoutResults>
    </div>
  )
}