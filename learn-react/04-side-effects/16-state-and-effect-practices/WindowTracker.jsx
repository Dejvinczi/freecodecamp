import React from "react";

export default function WindowTracker() {
  const [windowInnerWidth, setWindowInnerWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowInnerWidth(window.innerWidth);
    });
  }, [window.innerWidth]);

  return <h1>Window width: {windowInnerWidth}</h1>;
}
