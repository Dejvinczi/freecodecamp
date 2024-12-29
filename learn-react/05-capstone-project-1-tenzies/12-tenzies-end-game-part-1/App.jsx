import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Die from "./Die";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());
  const [gameWon, setGameWon] = useState(false);

  /**
   * Critical thinking time!
   *
   * We want to indicate to the user that the game is over
   * if (1) all the dice are held, and (2) all the dice have
   * the same value.
   *
   * How might we do this? Some questions to consider:
   *
   * 1. Do we need to save a `gameWon` value in state? If so, why?
   *    If not, why not?
   *
   *
   *
   * 2. Do we need to create a side effect to synchronize the `gameWon`
   *    value (whether it's in state or not) with the current state of
   *    the dice?
   *
   *
   * Conclusion:
   *
   *
   *
   */

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function rollDice() {
    setDice((oldDice) => oldDice.map((die) => (die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) })));
  }

  function hold(id) {
    setDice((oldDice) => oldDice.map((die) => (die.id === id ? { ...die, isHeld: !die.isHeld } : die)));
  }

  function newGame() {
    setDice(generateAllNewDice());
    setGameWon(false);
  }

  useEffect(() => {
    const isGameWon = dice.every((die) => dice[0].value === die.value && dice[0].isHeld === die.isHeld);
    isGameWon && setGameWon(true);
  }, [dice]);

  const diceElements = dice.map((dieObj) => (
    <Die key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} hold={() => hold(dieObj.id)} />
  ));

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      {gameWon ? (
        <button className="new-game" onClick={newGame}>
          New Game
        </button>
      ) : (
        <button className="roll-dice" onClick={rollDice}>
          Roll
        </button>
      )}
    </main>
  );
}
