export default function CocktailDetails({strDrink, strDrinkThumb, strTags, strCategory, strIBA, strAlcoholic, strGlass, strInstructions, ingredients}) {
  return (
    <div className="pt-14 px-6 w-full flex flex-col   sm:flex-row sm:p-0 sm:h-screen">
      <section className="image-detail w-full relative overflow-hidden rounded-xl   sm:w-3/6 sm:h-full sm:rounded-none">
        <img
          src={strDrinkThumb}
          alt={strDrink}
          className="w-full h-96 object-cover   sm:h-full"
        />
        <div className="shadow"></div>
        <h2 className="z-20 font-bold text-4xl text-white absolute bottom-6 left-6   sm:text-6xl">{strDrink}</h2>
      </section>

      <aside className="p-6 w-full h-fit flex flex-col items-center justify-center   sm:w-3/6 sm:h-full">
        <div className="mb-4 w-full flex flex-col">
          <h3 className="mb-2 text-2xl font-bold">Instructions</h3>
          <p className="text-sm font-normal">{strInstructions}</p>
        </div>
        <div className="mb-8 w-full flex flex-col">
          <h3 className="mb-2 text-2xl font-bold">Ingredients</h3>
          <div className="w-full flex gap-2 flex-wrap items-start justify-start">
            {
              ingredients.map((ingredient, i) => (
                ingredient
                ? <span
                  key={i}
                  className="py-1 px-2 bg-black rounded text-white text-xs font-medium">
                    {ingredient}
                  </span>
                : null
              ))
            }
          </div>
        </div>
        <div className="w-full flex gap-2 flex-wrap items-center justify-start">
          { strTags
            ? <span className="py-1 px-2 bg-neutral-300 rounded text-xs font-normal">{strTags}</span>
            : null }
          { strCategory
            ? <span className="py-1 px-2 bg-neutral-300 rounded text-xs font-medium">{strCategory}</span>
            : null }
          { strIBA
            ? <span className="py-1 px-2 bg-neutral-300 rounded text-xs font-medium">{strIBA}</span>
            : null }
          { strAlcoholic
            ? <span className="py-1 px-2 bg-neutral-300 rounded text-xs font-medium">{strAlcoholic}</span>
            : null }
          { strGlass
            ? <span className="py-1 px-2 bg-neutral-300 rounded text-xs font-medium">{strGlass}</span>
            : null }
        </div>
      </aside>
    </div>
  )
}