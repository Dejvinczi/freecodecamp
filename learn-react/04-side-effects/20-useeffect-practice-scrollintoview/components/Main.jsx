import React from "react";
import { getRecipeFromMistral } from "../ai";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    "chicken",
    "all the main spices",
    "corn",
    "heavy cream",
    "pasta",
  ]);
  const [recipe, setRecipe] = React.useState("");
  const recipeSection = React.useRef(null);
  /**
   * Problem:
   * We want to scroll the "Ready for a recipe?" div into view
   * ONLY AFTER the ClaudeRecipe section is rendered to the page
   * (i.e. when `recipe` is not an empty string). How can we do that?
   */

  React.useEffect(() => {
    recipe !== "" && recipeSection.current.scrollIntoView({ behavior: "smooth" });
  }, [recipe]);

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
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

      {ingredients.length > 0 && (
        <IngredientsList ref={recipeSection} ingredients={ingredients} getRecipe={getRecipe} />
      )}

      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
