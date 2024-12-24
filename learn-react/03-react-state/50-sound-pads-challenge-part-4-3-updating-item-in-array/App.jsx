import React from "react";
import Pad from "./Pad";
import padsData from "./pads";

export default function App() {
  const [pads, setPads] = React.useState(padsData);

  function toggle(id) {
    setPads((prevPads) => prevPads.map((pad) => (pad.id === id ? { ...pad, on: !pad.on } : pad)));
  }

  const buttonElements = pads.map((pad) => (
    <Pad toggle={toggle} id={pad.id} key={pad.id} color={pad.color} on={pad.on} />
  ));

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
}
