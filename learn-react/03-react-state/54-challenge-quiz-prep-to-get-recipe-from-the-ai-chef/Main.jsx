import React from "react";
import { getRecipeFromMistral } from "./ai";
import ClaudeRecipe from "./components/ClaudeRecipe";
import IngredientsList from "./components/IngredientsList";

/**
 * Challenge: Get a recipe from the AI!
 *
 * This will be a bit harder of a challenge that will require you
 * to think critically and synthesize the skills you've been
 * learning and practicing up to this point.
 *
 * We'll start with a mini-quiz:
 *
 * 1. Think about where the recipe response should live and how you're
 *    going to make sure it doesn't disappear between each state change in
 *    the app. (I don't mean between refreshes of your mini-browser.
 *    You don't need to save this to localStorage or anything more permanent
 *    than in React's memory for now.)
 *
 *
 * 2. What action from the user should trigger getting the recipe?
 *
 */

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState(undefined);

  async function getRecipe() {
    const recipe = await getRecipeFromMistral(ingredients);
    setRecipe(recipe);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient" />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />}

      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
