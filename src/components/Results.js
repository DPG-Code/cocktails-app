import useSearch from "../hooks/useSearch"
import Cocktail from "./Cocktail"
import Layout from "./Layout"
import LayoutResults from "./LayoutResults"

export default function Results() {
  const { cocktails } = useSearch()

  return (
    <Layout>
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