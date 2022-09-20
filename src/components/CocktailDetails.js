export default function CocktailDetails({strDrink, strDrinkThumb, strTags, strCategory, strIBA, strAlcoholic, strGlass, strInstructions, ingredients}) {
  return (
    <div className="pt-14 px-6 w-full flex flex-col   sm:flex-row sm:p-0 sm:h-screen">
      <section className="image-detail mt-12 mx-auto w-11/12 relative overflow-hidden rounded-tl-full rounded-tr-full   sm:w-3/6 sm:h-full sm:m-0 sm:rounded-none">
        <img
          src={strDrinkThumb}
          alt={strDrink}
          className="w-full h-96 object-cover   sm:h-full"
        />
        <div className="shadow"></div>
        <h2 className="z-20 font-bold text-4xl text-white absolute bottom-6 left-6   sm:text-6xl">{strDrink}</h2>
      </section>

      <aside className="py-6 px-0 w-full h-fit flex flex-col items-center justify-center   sm:w-3/6 sm:h-full sm:p-6">
        <div className="mb-4 w-full flex flex-col">
          <h3 className="mb-2 text-black text-2xl font-bold   sm:text-3xl">Instructions</h3>
          <p className="text-black text-sm font-medium   sm:text-base">{strInstructions}</p>
        </div>
        <div className="mb-8 w-full flex flex-col">
          <h3 className="mb-2 text-black text-xl font-bold   sm:text-2xl">Ingredients</h3>
          <div className="w-full flex gap-2 flex-wrap items-start justify-start">
            {
              ingredients.map((ingredient, i) => (
                ingredient
                ? <span
                  key={i}
                  className="py-1 px-3 bg-black rounded-full text-white text-xs font-semibold">
                    {ingredient}
                  </span>
                : null
              ))
            }
          </div>
        </div>
        <div className="w-full flex flex-col">
          <h3 className="mb-2 text-black text-xl font-bold   sm:text-2xl">Tags</h3>
          <div className="w-full flex gap-2 flex-wrap items-center justify-start">
            { strTags
              ? <span className="py-1 px-3 text-black bg-neutral-300 rounded-full text-xs font-semibold">{strTags}</span>
              : null }
            { strCategory
              ? <span className="py-1 px-3 text-black bg-neutral-300 rounded-full text-xs font-semibold">{strCategory}</span>
              : null }
            { strIBA
              ? <span className="py-1 px-3 text-black bg-neutral-300 rounded-full text-xs font-semibold">{strIBA}</span>
              : null }
            { strAlcoholic
              ? <span className="py-1 px-3 text-black bg-neutral-300 rounded-full text-xs font-semibold">{strAlcoholic}</span>
              : null }
            { strGlass
              ? <span className="py-1 px-3 text-black bg-neutral-300 rounded-full text-xs font-semibold">{strGlass}</span>
              : null }
          </div>
        </div>
      </aside>
    </div>
  )
}