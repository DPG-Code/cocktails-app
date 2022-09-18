import Cocktail from '../components/Cocktail'
import useCocktails from '../hooks/useCocktails'
import Layout from '../components/Layout';
import LayoutResults from '../components/LayoutResults';

const RANDOM_COCKTAIL = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export default function CocktailByLetter() {
  const path = 'search.php?f='
  const { cocktails, getCocktailsFromApi } = useCocktails({path})

  return (
    <Layout>
      <h2 className='mt-24 mb-12 text-3xl text-white text-center font-bold'>Choose a letter to filter Cocktails!</h2>
      <div className='px-6 w-full flex items-center flex-wrap justify-center gap-2'>
        {
          RANDOM_COCKTAIL.map(letter => (
            <button
              key={letter}
              onClick={() => getCocktailsFromApi(letter)}
              className="w-8 h-8 bg-[#000000ce] text-sm text-white font-bold border-solid border border-white"
            >
              {letter}
            </button>
          ))
        }
      </div>
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
    </Layout>
  )
}