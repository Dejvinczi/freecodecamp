import React from "react";

export default function App() {
  const [isGoingOut, setIsGoingOut] = React.useState(false);

  const toggleIsGoingOut = (e) => {
    setIsGoingOut((prevState) => !prevState);
  };

  /**
   * Challenge:
   * - Initialize state for `isGoingOut` as a boolean
   * - Make it so clicking the button flips that
   *   boolean value (true -> false, false -> true)
   * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
   */

  return (
    <main>
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button onClick={(e) => toggleIsGoingOut(e)} className="value">
        {isGoingOut ? "Yes" : "No"}
      </button>
    </main>
  );
}
