import React from "react";

export default function App(props) {
  const [starWarsData, setStarWarsData] = React.useState(null);

  /**
   * Challenge:
   * Instead of console logging the data, save it in state
   * and display it to the page. (Just replace the hard-coded
   * object inside the `<pre>` element with the data)
   */

  fetch("https://dummyjson.com/users/1")
    .then((res) => res.json())
    .then((data) => setStarWarsData(data));

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
