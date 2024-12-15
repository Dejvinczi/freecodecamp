import { createElement } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
const h1El = createElement("h1", null, "Hello from React!");

root.render(h1El);
