import starEmpty from "./images/star-empty.png";
import starFilled from "./images/star-filled.png";
export default function Star(props) {
  let starIcon = props.isFilled ? starFilled : starEmpty;
  let altIcon = props.isFilled ? "filled star icon" : "empty star icon";
  let ariaLabelButton = props.isFilled ? "Remove from favorites" : "Add to favorites";

  return (
    <button
      onClick={props.handleClick}
      aria-pressed={props.isFilled}
      aria-label={ariaLabelButton}
      className="favorite-button"
    >
      <img src={starIcon} alt={altIcon} className="favorite" />
    </button>
  );
}
