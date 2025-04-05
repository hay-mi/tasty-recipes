export default function App() {
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
        <article>
          <h2 className="flex items-center gap-4 text-3xl lg:text-4xl text-neutral-900  font-bold mb-12">
            Name of the recipe{" "}
            <span className="bg-[#FEA609] font-normal text-sm px-2 rounded-full">
              Category
            </span>
            <span className="bg-[#FEA609] font-normal text-sm px-2 rounded-full">
              Region
            </span>
          </h2>
          <img
            className="w-full object-cover"
            src="https://i.pinimg.com/736x/93/d5/d4/93d5d4b3d5932388b3e6ed1db050ac0f.jpg"
            alt=""
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            officiis deserunt obcaecati voluptas ullam. Labore, voluptatibus
            officiis nobis consectetur eius qui, natus dolore necessitatibus
            aliquid quisquam non nesciunt fugiat fuga.
          </p>
          <ul className="flex items-center justify-start flex-wrap mt-8">
            <li className="bg-[#FEA609] font-normal text-base px-2 rounded-full">
              Video
            </li>
            <li className="bg-[#FEA609] font-normal text-base px-2 rounded-full">
              Source
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
}
