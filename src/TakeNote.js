import "./styles.css";

export default function CreateNote(props) {
  return (
    <div>
      <input
        className="input title"
        placeholder="Title"
        // value={empty}
        onChange={props.function}
        name="heading"
      />
      <br />
      <textarea
        className="input takeNote"
        placeholder="Take a Note"
        // value={empty}
        onChange={props.function}
        name="note"
      />
      <br />
      <button className="btn" onClick={props.function} name="addNote">
        Add
      </button>
      <button className="btn" onClick={props.function} name="color">
        Color
      </button>
      <button className="btn" onClick={props.function} name="pinNote">
        Pin
      </button>
    </div>
  );
}
