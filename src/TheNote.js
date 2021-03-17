import "./styles.css";

export default function TheNote(props) {
  return (
    <div style={{ backgroundColor: props.noteBg }} className="theNote">
      <h4 className="noteTitle">{props.heading}</h4>
      <p className="noteDesc">{props.note}</p>
      <hr />
      <button className="btn" id={props.id} onClick={props.function}>
        Delete
      </button>
    </div>
  );
}
