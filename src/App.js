import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState({});
  const [noteList, setNoteList] = useState([]);

  const changeHandler = (x) => {
    if (x.target.name === "heading") {
      setInput({ ...input, heading: x.target.value });
    } else if (x.target.name === "note") {
      setInput({ ...input, note: x.target.value });
    } else if (x.target.name === "addNote") {
      setNoteList([...noteList, input]);
    }
  };
  console.log(input);
  console.log(noteList);
  return (
    <div className="App">
      <h1>NotesBook</h1>
      <h2>Note down all stuffs at one place.</h2>
      <div>
        <input onChange={changeHandler} name="heading" />
        <br />
        <input onChange={changeHandler} name="note" />
        <br />
        <button onClick={changeHandler} name="addNote">
          Add Note
        </button>
      </div>
      {/* display notes */}
      <div>
        <ul>
          {noteList.map((note) => (
            <li>
              <div>
                <h4>{note.heading}</h4>
                <p>{note.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
