export default function App() {
  return (
    <div className="py-20 px-2 max-w-4xl mx-auto">
      <h1 className="text-4xl lg:text-5xl text-neutral-900 bg-[#FEA609] rounded-lg font-bold text-center">
        Wellcome to Recipe Finder
      </h1>

      <form>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for a recipe"
          required
        />
      </form>
      <div>
        <article>
          <h2>
            Name of the recipe <span>Category</span>Region<span></span>
          </h2>
          <img
            className="w-full object-cover"
            src="https://i.pinimg.com/736x/93/d5/d4/93d5d4b3d5932388b3e6ed1db050ac0f.jpg"
            alt=""
          />
          <h3>Ingredients</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Items 3</li>
          </ul>
          <h3>Instructions</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            officiis deserunt obcaecati voluptas ullam. Labore, voluptatibus
            officiis nobis consectetur eius qui, natus dolore necessitatibus
            aliquid quisquam non nesciunt fugiat fuga.
          </p>
          <ul>
            <li>Video</li>
            <li>Source</li>
          </ul>
        </article>
      </div>
    </div>
  );
}
