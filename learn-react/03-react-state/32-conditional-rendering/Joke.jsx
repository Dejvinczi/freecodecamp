import { useState } from "react";
export default function Joke(props) {
  /**
   * Challenge:
   * - Create state `isShown` (boolean, default to `false`)
   * - Add a button that toggles the value back and forth
   */
  const [isShown, setIsShown] = useState(false);

  const handlerIsShown = () => {
    setIsShown((prev) => !prev);
  };

  console.log(isShown);
  return (
    <div>
      {isShown && (
        <>
          {props.setup && <h3>{props.setup}</h3>}
          <p>{props.punchline}</p>
        </>
      )}
      <button onClick={handlerIsShown}>Click</button>
      <hr />
    </div>
  );
}
