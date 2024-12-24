import React from "react";
import Pad from "./Pad";
import padsData from "./pads";

export default function App() {
  const [pads, setPads] = React.useState(padsData);

  const buttonElements = pads.map((pad) => <Pad {...pad} />);

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
}
