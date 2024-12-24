export default function Pad(props) {
  console.log(props);
  return <button key={props.id} style={{ backgroundColor: props.color }}></button>;
}
