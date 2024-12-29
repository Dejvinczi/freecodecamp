export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <button id={props.id} onClick={props.holdDie} style={styles}>
      {props.value}
    </button>
  );
}
