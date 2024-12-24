import React from "react";
import Pad from "./Pad";
import padsData from "./pads";
export default function App() {
  const [pads, setPads] = React.useState(padsData);

  /**
   * Challenge part 2:
   * 1. Create a separate component called "Pad" and
   *    replace the `button` above with our <Pad /> component
   * 2. Pass the Pad component a prop called `color` with the
   *    value of the same name from the `padsData` objects
   * 3. In the Pad component, apply an inline style to the <button>
   *    to set the backgroundColor of the button.
   *
   * (We'll deal with the "on" property soon)
   */

  return (
    <main>
      <div className="pad-container">
        {pads.map((pad) => (
          <Pad {...pad} />
        ))}
      </div>
    </main>
  );
}
