import Contact from "./Contact";
import felix from "./images/felix.png";
import fluffyskins from "./images/fluffykins.png";
import mrWhiskerson from "./images/mr-whiskerson.png";
import pumpkin from "./images/pumpkin.png";

function App() {
  return (
    <div className="contacts">
      <Contact img={mrWhiskerson} name="Mr. Whiskerson" phone="(212) 555-1234" email="mr.whiskaz@catnap.meow" />
      <Contact img={fluffyskins} name="Fluffykins" phone="(212) 555-2345" email="fluff@me.com" />
      <Contact img={felix} name="Felix" phone="(212) 555-4567" email="thecat@hotmail.com" />
      <Contact img={pumpkin} name="Pumpkin" phone="(0800) CAT KING" email="pumpkin@scrimba.com" />
    </div>
  );
}

export default App;
