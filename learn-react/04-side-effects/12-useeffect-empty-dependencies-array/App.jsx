import React from "react";

export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(0);

  console.log("Rendered!");

  React.useEffect(() => {
    console.log("Effect ran");
    fetch("https://dummyjson.com/users/" + count)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);

  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Add</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}