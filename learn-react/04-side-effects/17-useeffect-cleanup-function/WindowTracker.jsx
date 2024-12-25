import React from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function watchResize() {
      console.log("resize");
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchResize);
    return () => window.removeEventListener("resize", watchResize);
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
}
