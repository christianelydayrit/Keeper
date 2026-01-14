import React, { useState, useEffect } from "react";
import Note from "../components/Note";
import CreateArea from "../components/CreateArea";
import list from "../api/list"
import add from "../api/add"
import del from "../api/delete"
import edit from "../api/edit"
import { useNavigate } from "react-router-dom"
import logout from "../api/auth/logout"

function Keeper() {
  const [listNote, changeNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() =>{
    async function loadList(){
      const data = await list();
      if(data.unauthorized === true){
        navigate("/login");
      }else{
        changeNotes(data);
      }
    }

    loadList();
  }, []);

  async function getNote(inputText) {
    
    try{
      await add(inputText.title, inputText.content);
      const data = await list();
      changeNotes(data);
    }catch(e){
      throw e
    }
  }

  async function deleteItem(item) {
    await del(item);
    changeNotes(() => {
      return listNote.filter((x) => {
        return x.id !== item;
      });
    });
  }

  async function editItem(item){
    console.log(item)
    await edit(item);
    const data = await list();
    changeNotes(data);
  }


  return (
    <div>
      <CreateArea getNote={getNote} />
      {listNote.map((note) => (
        <Note
          delete={deleteItem}
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          edit={editItem}
        />
      ))}
    </div>
  );
}

export default Keeper;
