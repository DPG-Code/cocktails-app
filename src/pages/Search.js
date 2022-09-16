import Cocktail from '../components/Cocktail'
import useSearch from '../hooks/useSearch'

export default function Search() {
  const { cocktails, keyword, handleSubmit, handleChange } = useSearch()

  return (
    <div>
      <h2>Search Cocktail</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={keyword} onChange={handleChange}/>
      </form>
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
    </div>
  )
}