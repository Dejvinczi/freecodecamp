const Joke = ({ setup, punchline }) => {
  return (
    <div className="joke">
      {setup && <p className="bold">Setup: {setup}</p>}
      <p>Punchline: {punchline}</p>
    </div>
  );
};

export default Joke;
