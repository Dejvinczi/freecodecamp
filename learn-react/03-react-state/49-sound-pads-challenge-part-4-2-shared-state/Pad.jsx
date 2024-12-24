import React from "react";

export default function Pad(props) {
  const [on, setOn] = React.useState(props.on);

  function toggle() {
    setOn((prevOn) => !prevOn);
    props.toggle();
  }

  return (
    <button
      style={{ backgroundColor: props.color }}
      className={on ? "on" : undefined}
      onClick={(e) => toggle()}
    ></button>
  );
}