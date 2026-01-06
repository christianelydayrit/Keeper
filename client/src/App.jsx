import React, { useState, useEffect } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import list from "./api/list"
function App() {
  const [listNote, changeNotes] = useState([]);

  useEffect(() =>{
    async function loadList(){
      const something = await list();
      console.log("From Client " + something.title )
      changeNotes(something)
    }

    loadList();
  }, []);

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
