import React from "react";
import starEmpty from "./images/star-empty.png";
import starFilled from "./images/star-filled.png";
import avatar from "./images/user.png";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });
  /**
   * Challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore `isFavorite` for now)
   */

  function toggleFavorite() {
    setContact((prevState) => ({ ...prevState, isFavorite: !prevState.isFavorite }));
  }

  return (
    <main>
      <article className="card">
        <img src={avatar} className="avatar" alt="User profile picture of John Doe" />
        <div className="info">
          <button onClick={toggleFavorite} aria-pressed={contact.isFavorite} className="favorite-button">
            <img
              src={contact.isFavorite ? starFilled : starEmpty}
              alt={`${contact.isFavorite ? "filled" : "empty"} star icon`}
              className="favorite"
            />
          </button>
          <h2 className="name">John Doe</h2>
          <p className="contact">+1 (212) 555-1212</p>
          <p className="contact">itsmyrealname@example.com</p>
        </div>
      </article>
    </main>
  );
}
