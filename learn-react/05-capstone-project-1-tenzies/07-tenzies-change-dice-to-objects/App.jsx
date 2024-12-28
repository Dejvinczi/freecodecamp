import { useState } from "react";
import Die from "./Die";

export default function App() {
  /**
   * Challenge: Update the array of numbers in state to be
   * an array of objects instead. Each object should look like:
   * { value: <random number>, isHeld: false }
   *
   * Making this change will break parts of our code, so make
   * sure to update things so we're back to a working state
   */

  const [dice, setDice] = useState(generateAllNewDice());

  function generateDieRandomValue() {
    return Math.ceil(Math.random() * 6);
  }

  function generateAllNewDice() {
    return new Array(10).fill(0).map((e) => ({ value: generateDieRandomValue(), isHeld: false }));
  }

  function heldDie(e) {
    const { key } = e.currentTarget;
    setDice((prevState) => prevState.map((die, idx) => (idx === key ? { ...die, isHeld: !die.isHeld } : die)));
  }

  function rollDice() {
    setDice((prevDice) =>
      prevDice.map((die) => (die.isHeld ? die : { value: generateDieRandomValue(), isHeld: false }))
    );
  }

  const diceElements = dice.map((die, idx) => <Die key={idx} {...die} heldDie={heldDie} />);

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
