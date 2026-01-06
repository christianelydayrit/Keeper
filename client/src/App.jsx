import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [listNote, changeNotes] = useState([]);

  function getNote(inputText) {
    changeNotes((prevVal) => {
      return [
        ...prevVal,
        { title: inputText.title, content: inputText.content },
      ];
    });
  }

  function deleteItem(item) {
    changeNotes(() => {
      return listNote.filter((x, index) => {
        return index !== item;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea getNote={getNote} />
      {listNote.map((note, index) => (
        <Note
          delete={deleteItem}
          key={index}
          id={index}
          title={note.title}
          content={note.content}
        />
      ))}

    </div>
  );
}

export default App;
