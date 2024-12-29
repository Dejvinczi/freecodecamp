export default function Die(props) {
  return <button style={props.isHeld ? { background: "#59E391" } : undefined}>{props.value}</button>;
}
