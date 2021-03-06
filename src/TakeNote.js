import "./styles.css";

export default function CreateNote(props) {
  return (
    <div>
      <input
        className="input title"
        placeholder="Title"
        value={props.valueTitle}
        onChange={props.function}
        name="heading"
      />
      <br />
      <textarea
        className="input takeNote"
        placeholder="Take a Note"
        value={props.valueNote}
        onChange={props.function}
        name="note"
      />
      <br />
      <div className="btnArea">
        <button className="btn" onClick={props.function} name="addNote">
          Add
        </button>
        <button className="btn" onClick={props.function} name="color">
          Color
        </button>
        <button
          className={props.classNames}
          onClick={props.function}
          name="pinNote"
        >
          Pin
        </button>
      </div>
    </div>
  );
}
