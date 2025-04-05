import { useState, useEffect } from "react";

export default function App() {
  const [meals, setMeals] = useState([]);
  const [meal, setMeal] = useState("");

  async function getMeals() {
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
      );
      const data = await res.json();
      setMeals(data.meals);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getMeals();
  }, []);

  return (
    <div className="py-20 px-2 max-w-4xl mx-auto">
      <h1 className="text-4xl lg:text-5xl text-neutral-900 bg-[#FEA609] rounded-lg font-bold text-center">
        Wellcome to Recipe Finder
      </h1>

      <form className="my-16">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for a recipe"
          required
          className="w-full py-3 rounded-full bg-neutral-100 border-2 border-neutral-200 focus:border-e-neutral-700 focus:ring-4 focus:ring-neutral-700 outline-none lg:text-xl"
        />
      </form>
      <div>
        {meals.map((meal) => (
          <article>
            <h2 className="flex items-center gap-4 text-3xl lg:text-4xl text-neutral-900  font-bold mb-12">
              {meal.strMeal}
              <span className="bg-[#FEA609] font-normal text-sm px-2 rounded-full">
                {meal.strCategory}
              </span>
              <span className="bg-[#FEA609] font-normal text-sm px-2 rounded-full">
                {meal.strArea}
              </span>
            </h2>
            <img
              className="w-full"
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
            <h3 className="text-2xl  text-neutral-900  font-bold my-8">
              Ingredients
            </h3>
            <ul className="list-decimal pl-4">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Items 3</li>
            </ul>
            <h3 className="text-2xl  text-neutral-900  font-bold my-8">
              Instructions
            </h3>
            <p>{meal.strInstructions}</p>
            <ul className="flex items-center justify-start flex-wrap mt-8">
              <li className="bg-[#FEA609] font-normal text-base px-2 rounded-full">
                <a href={meal.strYoutube} target="_blank" rel="noreferrer">
                  Video
                </a>
              </li>
              <li className="bg-[#FEA609] font-normal text-base px-2 rounded-full">
                <a href={meal.strSource} target="_blank" rel="noreferrer">
                  Source
                </a>
              </li>
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
