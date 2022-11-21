import "./App.css";
import Editor from "./Components/Editor/Editor";
import Sidebar from "./Components/Sidebar/Sidebar";
import NoteNameModal from "./Components/NoteNameModal/NoteNameModal";
import Split from "react-split";
import React from "react";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = React.useState(() => {
    return [];
  });
  const [selectedNote, setSelectedNote] = React.useState(() => {
    return notes && notes.length > 0 ? notes[0].id : "";
  });
  const createNewNote = (value) => {
    console.log(value);
    const newNote = {
      id: nanoid(),
      title: value,
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => {
      return [newNote, ...prevNotes];
    });
    setSelectedNote(newNote.id);
  };
  const displayNewNote = (id) => {
    setSelectedNote(id);
  };
  const deleteExistingNote = (id) => {
    const newNotesArray = [];
    notes.forEach((item) => {
      if (item.id !== id) {
        newNotesArray.push(item);
      }
    });
    if (selectedNote === id) {
      if (newNotesArray && newNotesArray.length > 0)
        setSelectedNote(newNotesArray[0].id);
      else setSelectedNote("");
    }
    setNotes(newNotesArray);
  };
  const selectedNoteBody = () => {
    let noteBody;
    notes.forEach((item) => {
      if (item.id == selectedNote) {
        noteBody = item.body;
      }
    });
    return noteBody;
  };
  const updateSelectedNote = (text) => {
    console.log("updateSelectedNote called");
    setNotes((prevNote) => {
      let newNotes = [];
      prevNote.forEach((item) => {
        if (item.id === selectedNote) {
          newNotes.unshift({ ...item, body: text });
        } else {
          newNotes.push(item);
        }
      });
      return newNotes;
    });
  };
  const createNewNoteBtnTemplate = (
    <button className="landingPage--btn">Click here to create a Note!</button>
  );
  return (
    <div className="App">
      {notes && notes.length > 0 ? (
        <Split
          className="split"
          minSize={150}
          sizes={[30, 70]}
          direction="horizontal"
        >
          <Sidebar
            notes={notes}
            createNewNote={(noteName) => {
              createNewNote(noteName);
            }}
            selectedNote={selectedNote}
            displayNewNote={(id) => displayNewNote(id)}
            deleteExistingNote={(id) => deleteExistingNote(id)}
          />
          <Editor
            selectedNote={selectedNote}
            selectedNoteBody={selectedNoteBody()}
            updateSelectedNote={(text) => {
              updateSelectedNote(text);
            }}
          />
        </Split>
      ) : (
        <div className="landingPage">
          <h2 className="landingPage--text">You have no Notes Created</h2>
          <NoteNameModal
            btnTemplate={createNewNoteBtnTemplate}
            confirmClickevent={(value) => {
              createNewNote(value);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
