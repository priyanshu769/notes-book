import "./styles.css";

export default function Colors(props) {
  return (
    <div style={props.style} className="Colors">
      <button
        onClick={props.function}
        name="red"
        className="colorBtn red"
      ></button>
      <button
        onClick={props.function}
        name="green"
        className="colorBtn green"
      ></button>
      <button
        onClick={props.function}
        name="blue"
        className="colorBtn blue"
      ></button>
      <button
        onClick={props.function}
        name="yellow"
        className="colorBtn yellow"
      ></button>
    </div>
  );
}
