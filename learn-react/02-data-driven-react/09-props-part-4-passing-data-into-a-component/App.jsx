import Contact from "./Contact";

/**
 * Challenge (I'm sorry!): Add all the rest of the
 * data to the contact card instances. 😈
 */

function App() {
  return (
    <div className="contacts">
      <Contact img="./images/mr-whiskerson.png" name="Mr. Whiskerson" phone="(212) 555-1234" mail="fluff@me.com" />
      <Contact img="./images/fluffykins.png" name="Photo of Fluffykins" phone="(212) 555-2345" mail="fluff@me.com" />
      <Contact img="./images/felix.png" name="Photo of Felix" phone="(212) 555-4567" mail="thecat@hotmail.com" />
      <Contact img="./images/pumpkin.png" name="Photo of Pumpkin" phone="(0800) CAT KING" mail="pumpkin@scrimba.com" />
    </div>
  );
}

export default App;

/**
 *
<article className="contact-card">
    <img
        src="./images/mr-whiskerson.png"
        alt="Photo of Mr. Whiskerson"
    />
    <h3>Mr. Whiskerson</h3>
    <div className="info-group">
        <img
            src="./images/phone-icon.png"
            alt="phone icon"
        />
        <p>(212) 555-1234</p>
    </div>
    <div className="info-group">
        <img
            src="./images/mail-icon.png"
            alt="mail icon"
        />
        <p>mr.whiskaz@catnap.meow</p>
    </div>
</article>

<article className="contact-card">
    <img
        src="./images/fluffykins.png"
        alt="Photo of Fluffykins"
    />
    <h3>Fluffykins</h3>
    <div className="info-group">
        <img
            src="./images/phone-icon.png"
            alt="phone icon"
        />
        <p>(212) 555-2345</p>
    </div>
    <div className="info-group">
        <img
            src="./images/mail-icon.png"
            alt="mail icon"
        />
        <p>fluff@me.com</p>
    </div>
</article>

<article className="contact-card">
    <img
        src="./images/felix.png"
        alt="Photo of Felix"
    />
    <h3>Felix</h3>
    <div className="info-group">
        <img
            src="./images/phone-icon.png"
            alt="phone icon"
        />
        <p>(212) 555-4567</p>
    </div>
    <div className="info-group">
        <img
            src="./images/mail-icon.png"
            alt="mail icon"
        />
        <p>thecat@hotmail.com</p>
    </div>
</article>

<article className="contact-card">
    <img
        src="./images/pumpkin.png"
        alt="Photo of Pumpkin"
    />
    <h3>Pumpkin</h3>
    <div className="info-group">
        <img
            src="./images/phone-icon.png"
            alt="phone icon"
        />
        <p>(0800) CAT KING</p>
    </div>
    <div className="info-group">
        <img
            src="./images/mail-icon.png"
            alt="mail icon"
        />
        <p>pumpkin@scrimba.com</p>
    </div>
</article>
 */
