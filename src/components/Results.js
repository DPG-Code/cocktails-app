import useSearch from "../hooks/useSearch"
import Cocktail from "./Cocktail"
import Layout from "./Layout"
import LayoutResults from "./LayoutResults"

export default function Results() {
  const { cocktails, query } = useSearch()

  return (
    <Layout>
      {
        cocktails === null
        ? <h2 className='px-6 mt-28 mb-0 text-2xl text-black text-center font-normal   sm:text-3xl'>
          No results for: <span className='font-bold'>{query}</span>
        </h2>
        : <h2 className='px-6 mt-28 mb-0 text-2xl text-black text-center font-normal   sm:text-3xl'>
          Results for: <span className='font-bold'>{query}</span>
        </h2>
      }
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