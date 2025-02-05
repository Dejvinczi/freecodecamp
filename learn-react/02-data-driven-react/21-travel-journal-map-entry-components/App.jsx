import Entry from "./components/Entry";
import Header from "./components/Header";
import data from "./data";

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        {data.map((e) => {
          return (
            <Entry
              img={e.img}
              title={e.title}
              country={e.country}
              googleMapsLink={e.googleMapsLink}
              dates={e.dates}
              text={e.text}
            />
          );
        })}
      </main>
    </>
  );
}
