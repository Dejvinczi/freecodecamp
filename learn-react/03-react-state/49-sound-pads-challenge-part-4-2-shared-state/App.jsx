import React from "react";
import Pad from "./Pad";
import padsData from "./pads";

export default function App() {
  const [pads, setPads] = React.useState(padsData);

  /**
   * Challenge: Create a toggle() function that logs
   * "clicked!" to the console
   *
   * Pass that function down to each of the Pad components
   * and set it up so when they get clicked, the function runs
   */

  const toggle = () => {
    console.log("clicked!");
  };

  const buttonElements = pads.map((pad) => <Pad key={pad.id} color={pad.color} on={pad.on} toggle={toggle} />);

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
}