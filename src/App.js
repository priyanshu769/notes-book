import { useState } from "react";
import "./styles.css";
import uuid from "react-uuid";

// This was made to check the delete feature.
// const notes = [
//   {
//     id: "1",
//     heading: "Buy Vegies",
//     note: "Tomato, Potato, Onion, Spinach"
//   },
//   {
//     id: "2",
//     heading: "Buy Protien",
//     note: "Paneer, Meet, Eggs"
//   },
//   {
//     id: "3",
//     heading: "Buy Clothes",
//     note: "Jacket, Jeans, Shirt, T-Shirt"
//   }
// ];

export default function App() {
  // const [empty, setEmpty] = useState("");
  const [input, setInput] = useState({});
  const [noteList, setNoteList] = useState([]);

  const changeHandler = (x) => {
    if (x.target.name === "heading") {
      setInput({ ...input, heading: x.target.value, id: "1" });
    } else if (x.target.name === "note") {
      setInput({ ...input, note: x.target.value });
    } else if (x.target.name === "addNote") {
      setNoteList([...noteList, input]);
      setInput({});
    }
  };
  // console.log(input);
  // console.log(noteList);
  const deleteNote = (x) => {
    notes.map((delNote) => {
      if (x.target.id == delNote.id) {
        // console.log(delNote);
        // console.log(noteList.indexOf(delNote));
        // console.log(noteList.splice(noteList.indexOf(delNote), 1));
        // notes.splice(notes.indexOf(delNote), 1);
        setNoteList([
          ...noteList,
          noteList.splice(noteList.indexOf(delNote), 1)
        ]);
        // console.log(notes);
      } else {
        setNoteList([...noteList]);
        // console.log(notes);
      }
    });
  };

  return (
    <div className="App">
      <h1>Notes' Book</h1>
      <h2>Note down all stuffs at one place.</h2>
      <div>
        <input
          placeholder="Title"
          // value={empty}
          onChange={changeHandler}
          name="heading"
        />
        <br />
        <input
          placeholder="Note"
          // value={empty}
          onChange={changeHandler}
          name="note"
        />
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
                <button id={note.id} onClick={deleteNote}>
                  Del
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
