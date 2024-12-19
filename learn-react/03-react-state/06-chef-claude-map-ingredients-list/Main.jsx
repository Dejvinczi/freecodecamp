export default function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  /**
   * Review Challenge:
   * Map over the list of ingredients and render them as list items
   *
   * Note: We're doing things a weird way here. Don't worry,
   * we're building up to learning the right way 🙂
   */

  return (
    <main>
      <form className="add-ingredient-form">
        <input type="text" placeholder="e.g. oregano" aria-label="Add ingredient" />
        <button>Add ingredient</button>
      </form>
      <ul>
        {ingredients.map((ingredient, index) => {
          return <li id={`ingredient-${index}`}>{ingredient}</li>;
        })}
      </ul>
    </main>
  );
}
