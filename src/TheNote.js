import "./styles.css";

export default function TheNote(props) {
  return (
    <div style={{ backgroundColor: props.noteBg }} className="theNote">
      <small className="context">Title</small>
      <h4>{props.heading}</h4>
      <small className="context">Note</small>
      <p>{props.note}</p>
      <hr />
      <button className="btn" id={props.id} onClick={props.function}>
        Delete
      </button>
    </div>
  );
}
