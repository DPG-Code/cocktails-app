export default function CocktailDetails({strDrink, strDrinkThumb, strTags, strCategory, strIBA, strAlcoholic, strGlass, strInstructions, ingredients}) {
  return (
    <div>
      <h2>Name: {strDrink}</h2>
      <img src={strDrinkThumb} alt={strDrink}/>
      <small>{strTags}</small>
      <small>{strCategory}</small>
      <small>{strIBA}</small>
      <small>{strAlcoholic}</small>
      <small>{strGlass}</small>
      <p>Instructions: {strInstructions}</p>
      <p>Ingredients</p>
      {
        ingredients.map((ingredient, i) => (
          <span key={i}>{ingredient || ''}</span>
        ))
      }
    </div>
  )
}