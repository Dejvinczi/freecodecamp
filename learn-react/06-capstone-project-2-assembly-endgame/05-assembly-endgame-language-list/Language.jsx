export default function Language(props) {
  const style = {
    backgroundColor: props.backgroundColor,
    color: props.color,
  };

  return (
    <div className="language" style={style}>
      {props.name}
    </div>
  );
}
