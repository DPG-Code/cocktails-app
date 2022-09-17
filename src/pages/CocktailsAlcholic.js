import Cocktail from '../components/Cocktail'
import useCocktails from '../hooks/useCocktails'
import Layout from '../components/Layout'
import LayoutResults from '../components/LayoutResults'

export default function CocktailsAlcholic() {
  const path = 'filter.php?a='
  const { cocktails, getCocktailsFromApi } = useCocktails({path})

  return (
    <Layout>
      <h2 className='mt-20 mb-16 text-3xl text-center font-bold'>Filter by alcoholic or no alcoholic Cocktails!</h2>
      <div className='px-6 w-full flex items-center flex-wrap justify-center gap-4'>
        <button
        onClick={() => getCocktailsFromApi('Alcoholic')}
          className="py-2 px-4 bg-black text-sm text-white font-semibold rounded-lg"
        >
          Alcholic
        </button>
        <button
        onClick={() => getCocktailsFromApi('Non_Alcoholic')}
          className="py-2 px-4 bg-black text-sm text-white font-semibold rounded-lg"
        >
          No Alcholic
        </button>
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