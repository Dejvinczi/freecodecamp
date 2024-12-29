import { nanoid } from "nanoid";
import { useState } from "react";
import Die from "./Die";

export default function App() {
  /**
   * Challenge: Create a function `hold` that takes
   * `id` as a parameter. For now, just have the function
   * console.log(id).
   *
   * Then, figure out how to pass that function down to each
   * instance of the Die component so when each one is clicked,
   * it logs its own unique ID property. (Hint: there's more
   * than one way to make that work, so just choose whichever
   * you want)
   */

  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function rollDice() {
    setDice(generateAllNewDice());
  }

  function holdDie(e) {
    const { id } = e.currentTarget;
  }

  const diceElements = dice.map((dieObj) => <Die key={dieObj.id} {...dieObj} holdDie={holdDie} />);

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}