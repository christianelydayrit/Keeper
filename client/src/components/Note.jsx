import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';

function Note(props) {
  const [item, setItem] = useState({
      id: props.id,
      title: props.title,
      content: props.content
  })

  const [edit, setEdit] = useState(false);

  function editing(event){
    const name = event.target.name
    const content = event.target.value

    setItem((preVal)=>(
      {
        ...preVal,
        [name]: content
      }
    )
    )
  }
  return (
    <div className="note">
      {!edit ? 
      <div>
        <h1>{item.title}</h1>
        <p>{item.content}</p>
        <button onClick={() =>{
        setEdit(true);
        }}>
        <EditIcon />
        </button>
        <button
          onClick={() => {
            props.delete(item.id);
          }}
        >
          <DeleteIcon/>
        </button>
      </div>
       : <div>      
          <TextField
            id="standard-helperText"
            label="Title"
            value={item.title}
            name="title"
            variant="standard"
            onChange={editing}
          />
          <TextField
            id="outlined-multiline-static"
            multiline
            name="content"
            rows={4}
            value={item.content}
            onChange={editing}
          />
          <button onClick={() => { props.edit(item) 
            setEdit(false);
          }}>
            <CheckIcon/>
          </button> 
        </div>
        }
    </div>
  );
}

export default Note;
