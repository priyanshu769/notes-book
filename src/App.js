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
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [pin, setPin] = useState(false);
  const [dark, setDark] = useState("App");
  const [noteColor, setNoteColor] = useState("#ffffff");
  const [colorComp, setColorComp] = useState(false);
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
      setTitle(x.target.value);
    } else if (x.target.name === "note") {
      setNote(x.target.value);
    } else if (x.target.name === "addNote") {
      setNoteList([
        ...noteList,
        { title: title, note: note, noteBg: noteColor, id: uuid(), pinned: pin }
      ]);
      setTitle("");
      setNote("");
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
  const unPinnedNotes = noteList.filter((note) => note.pinned === false);
  const pinnedNotes = noteList.filter((note) => note.pinned === true);
  return (
    <div className={dark}>
      <h1>Notes' Book</h1>
      <h2>Note down all stuffs at one place.</h2>
      <DarkMode function={changeHandler} />
      <div style={{ backgroundColor: noteColor }} className="createNote">
        <CreateNote
          valueTitle={title}
          valueNote={note}
          noteBG={noteColor}
          function={changeHandler}
          classNames={pin ? "btn pinned" : "btn"}
        />
        <Colors
          function={colorHandle}
          style={colorComp ? { display: "" } : { display: "none" }}
        />
      </div>
      {/* display notes */}
      <h2>Pinned</h2>
      <div clasName="pinnedNotes">
        {pinnedNotes.map((note) => (
          <TheNote
            noteBg={note.noteBg}
            heading={note.title}
            note={note.note}
            id={note.id}
            function={deleteNote}
            functionColor={changeHandler}
          />
        ))}
      </div>
      <h2>Unpinned Notes</h2>
      <div className="notesDisplay unPinnedNotes">
        {unPinnedNotes.map((note) => (
          <TheNote
            noteBg={note.noteBg}
            heading={note.title}
            note={note.note}
            id={note.id}
            function={deleteNote}
            functionColor={changeHandler}
          />
        ))}
      </div>
    </div>
  );
}
