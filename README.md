Recipe Finder

Overview

This Recipe Finder app is a simple yet powerful web application that allows users to search for recipes by dish name and view detailed cooking instructions. The app fetches real-time data from TheMealDB API and presents an intuitive user interface for browsing and exploring delicious recipes.

Features

✅ Search Recipes – Users can search for recipes using a search bar.
✅ Recipe List – Displays matching recipes with images, titles, categories, and Regions.
✅ Detailed Recipe View – Clicking a recipe shows ingredients, instructions,video and source.
✅ Responsive UI – Optimized for mobile, tablet, and desktop screens using Tailwind CSS.
✅ Error Handling – Displays user-friendly messages for errors or no search results.

Technologies Used

Frontend: React, Tailwind CSS, JavaScript (ES6+)

API: TheMealDB

State Management: React Hooks (useState, useEffect)

Deployment: Vercel/Netlify

Installation & Setup

1. Clone the repository
   git clone https://github.com/hay-mi/tasty-recipes.git
   cd tasty-recipes
2. Install dependencies
   npm install
3. Start the development server
   npm run dev
   The app will be available at http://localhost:5173/ (if using Vite).

API Integration

The app fetches recipes using TheMealDB API:
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)

Components

SearchBar – Handles user input for searching recipes.
RecipeCard – Displays individual recipe previews.
RecipeDetails – Shows ingredients, steps, and video tutorials.

Deployment

To deploy the application:

1. Build the project:
   npm run build
2. Deploy on Vercel or Netlify

Screenshots

![alt text](image.png)
