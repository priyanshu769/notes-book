import "./styles.css";

export default function DarkMode(props) {
  return (
    <div className="DarkMode">
      <button
        name="darkBtn"
        className="btn darkModeBtn"
        style={props.style}
        onClick={props.function}
      >
        Dark
      </button>
    </div>
  );
}
