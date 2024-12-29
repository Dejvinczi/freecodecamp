import { nanoid } from "nanoid";
import { useState } from "react";
import Die from "./Die";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => generateNewDie());
  }
  /**
   * Challenge: Update the `rollDice` function to not just roll
   * all new dice, but instead to look through the existing dice
   * to NOT role any that are being `held`.
   *
   * Hint: this will look relatively similiar to the `hold`
   * function below. When we're "rolling" a die, we're really
   * just updating the `value` property of the die object.
   */

  function rollDice() {
    setDice((prevDice) => prevDice.map((die) => (die.isHeld ? die : generateNewDie())));
  }

  function hold(id) {
    setDice((oldDice) => oldDice.map((die) => (die.id === id ? { ...die, isHeld: !die.isHeld } : die)));
  }

  const diceElements = dice.map((dieObj) => (
    <Die key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} hold={() => hold(dieObj.id)} />
  ));

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
