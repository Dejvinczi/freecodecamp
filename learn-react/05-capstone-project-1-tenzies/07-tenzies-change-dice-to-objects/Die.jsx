export default function Die(props) {
  return <button onClick={props.heldDie}>{props.value}</button>;
}
