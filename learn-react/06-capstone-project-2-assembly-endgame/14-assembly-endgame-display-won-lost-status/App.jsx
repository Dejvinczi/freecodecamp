import { clsx } from "clsx";
import { useState } from "react";
import { languages } from "./languages";

/**
 * Goal: Add in the incorrect guesses mechanism to the game
 *
 * Challenge:
 * Conditionally render either the "won" or "lost" statuses
 * from the design, both the text and the styles, based on the
 * new derived variables.
 *
 * Note: We always want the surrounding `section` to be rendered,
 * so only change the content inside that section. Otherwise the
 * content on the page would jump around a bit too much.
 */

export default function AssemblyEndgame() {
  // State values
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([]);

  // Derived values
  const wrongGuessCount = guessedLetters.filter((letter) => !currentWord.includes(letter)).length;
  const isGameWon = currentWord.split("").every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length;
  const isGameOver = isGameWon || isGameLost;

  // Static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetters) => (prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]));
  }

  const languageElements = languages.map((lang, index) => {
    const isLanguageLost = index < wrongGuessCount;
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    const className = clsx("chip", isLanguageLost && "lost");
    return (
      <span className={className} style={styles} key={lang.name}>
        {lang.name}
      </span>
    );
  });

  const letterElements = currentWord
    .split("")
    .map((letter, index) => <span key={index}>{guessedLetters.includes(letter) ? letter.toUpperCase() : ""}</span>);

  const gameStatusClass = clsx({
    won: isGameWon,
    lost: isGameLost,
  });

  const statusElement = () => {
    return (
      <>
        <h2>{isGameWon ? "You win!" : "Game over!"}</h2>
        <p>{isGameWon ? "Well done! 🎉" : "You lost! Better start learning Assembly"}</p>
      </>
    );
  };

  const keyboardElements = alphabet.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button className={className} key={letter} onClick={() => addGuessedLetter(letter)}>
        {letter.toUpperCase()}
      </button>
    );
  });

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word within 8 attempts to keep the programming world safe from Assembly!</p>
      </header>

      <section className={`game-status ${gameStatusClass}`}>{isGameOver && statusElement()}</section>

      <section className="language-chips">{languageElements}</section>

      <section className="word">{letterElements}</section>

      <section className="keyboard">{keyboardElements}</section>

      {isGameOver && <button className="new-game">New Game</button>}
    </main>
  );
}
