import { useState } from "react";
import "./styles.css";
import uuid from "react-uuid";
import Colors from "./Colors.js";
import CreateNote from "./TakeNote.js";
import DarkMode from "./DarkMode.js";
import TheNote from "./TheNote.js";

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
  const [pin, setPin] = useState(false);
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
        id: uuid(),
        pinned: pin
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
    } else if (x.target.name === "pinNote") {
      setPin(!pin);
    }
  };
  // console.log(input);
  console.log(noteList);
  const deleteNote = (x) => {
    const findNote = noteList.find((note) => note.id === x.target.id);
    if (findNote) {
      console.log("ID Matched");
      const noteToBeDel = noteList.find((note) => {
        if (note.id === x.target.id) {
          return note;
        }
      });
      setNoteList([
        ...noteList,
        noteList.splice(noteList.indexOf(noteToBeDel), 1)
      ]);
    }
    setNoteList([...noteList]);
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
          <TheNote
            noteBg={note.noteBg}
            heading={note.heading}
            note={note.note}
            id={note.id}
            function={deleteNote}
          />
        ))}
      </div>
    </div>
  );
}
