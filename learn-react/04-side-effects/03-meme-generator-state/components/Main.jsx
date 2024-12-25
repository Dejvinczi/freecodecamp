import { useState } from "react";

export default function Main() {
  /**
   * Challenge: move the hardcoded meme info into React
   * state. Use an object with `topText`, `bottomText`,
   * and `imageUrl` properties, and set the initial values to
   * the ones hardcoded below.
   */

  const [topText, setTopText] = useState("One does not simply");
  const [bottomText, setBottomText] = useState("Walk into Mordor");
  const [imageUrl, setImageUrl] = useState("http://i.imgflip.com/1bij.jpg");

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input type="text" placeholder="One does not simply" name="topText" />
        </label>

        <label>
          Bottom Text
          <input type="text" placeholder="Walk into Mordor" name="bottomText" />
        </label>
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={imageUrl} />
        <span className="top">{topText}</span>
        <span className="bottom">{bottomText}</span>
      </div>
    </main>
  );
}
