import React from "react";
import Body from "./Body";
import Header from "./Header";

export default function App() {
  const [userName, setUserName] = React.useState("Joe");

  return (
    <main>
      <Header userName={userName} />
      <Body userName={userName} />
    </main>
  );
}
