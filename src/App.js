import { useState } from "react";
import "./styles.css";
import uuid from "react-uuid";
import Colors from "./Colors.js";
import CreateNote from "./TakeNote.js";
import DarkMode from "./DarkMode.js";

// This was made to check the delete feature.
// const notes = [
// {
//   id: "1",
//   heading: "Buy Vegies",
//   note: "Tomato, Potato, Onion, Spinach"
// },
// {
//   id: "2",
//   heading: "Buy Protien",
//   note: "Paneer, Meet, Eggs"
// },
// {
//   id: "3",
//   heading: "Buy Clothes",
//   note: "Jacket, Jeans, Shirt, T-Shirt"
// }
// ];

export default function App() {
  // const [empty, setEmpty] = useState("");
  const [dark, setDark] = useState("App");
  const [noteColor, setNoteColor] = useState("#ffffff");
  const [colorComp, setColorComp] = useState(false);
  const [input, setInput] = useState({});
  const [noteList, setNoteList] = useState([
    // {
    //   id: "1",
    //   heading: "Buy Vegies",
    //   note: "Tomato, Potato, Onion, Spinach"
    // },
    // {
    //   id: "2",
    //   heading: "Buy Protien",
    //   note: "Paneer, Meet, Eggs"
    // },
    // {
    //   id: "3",
    //   heading: "Buy Clothes",
    //   note: "Jacket, Jeans, Shirt, T-Shirt"
    // }
  ]);

  const changeHandler = (x) => {
    if (x.target.name === "heading") {
      setInput({
        ...input,
        heading: x.target.value,
        noteBg: noteColor,
        id: uuid()
      });
    } else if (x.target.name === "note") {
      setInput({ ...input, note: x.target.value });
    } else if (x.target.name === "addNote") {
      setNoteList([...noteList, input]);
      setInput({});
    } else if (x.target.name === "color") {
      setColorComp(!colorComp);
      console.log(colorComp);
    } else if (x.target.name === "darkBtn") {
      if (dark === "App") {
        setDark("App dark");
      } else if (dark === "App dark") {
        setDark("App");
      }
    }
  };
  // console.log(input);
  console.log(noteList);
  const deleteNote = (x) => {
    noteList.map((delNote) => {
      if (x.target.id == delNote.id) {
        console.log(delNote);
        console.log(noteList.indexOf(delNote));
        console.log(noteList.splice(noteList.indexOf(delNote), 1));
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
  const colorHandle = (c) => {
    if (c.target.name === "red") {
      setNoteColor("#e84545");
    } else if (c.target.name === "green") {
      setNoteColor("#00b8a9");
    } else if (c.target.name === "blue") {
      setNoteColor("#3490de");
    } else if (c.target.name === "yellow") {
      setNoteColor("#f9ed69");
    }
    console.log(c.target.name);
    console.log(noteColor);
  };
  console.log(noteColor);
  return (
    <div className={dark}>
      <h1>Notes' Book</h1>
      <h2>Note down all stuffs at one place.</h2>
      <DarkMode function={changeHandler} />
      <div style={{ backgroundColor: noteColor }} className="createNote">
        <CreateNote noteBG={noteColor} function={changeHandler} />
        <Colors
          function={colorHandle}
          style={colorComp ? { display: "" } : { display: "none" }}
        />
      </div>
      {/* display notes */}
      <div className="notesDisplay">
        {noteList.map((note) => (
          <div style={{ backgroundColor: note.noteBg }} className="theNote">
            <small className="context">Title</small>
            <h4>{note.heading}</h4>
            <small className="context">Note</small>
            <p>{note.note}</p>
            <hr />
            <button className="btn" id={note.id} onClick={deleteNote}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
