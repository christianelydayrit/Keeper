import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [inputText, changeText] = useState({
    title: "",
    content: "",
  });

  const [isExpand, setExpand] = useState(false)  

  function getContent(event) {
    const name = event.target.name;
    const value = event.target.value;

    changeText((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
  }

  return (
    <div>
      <form>
        {isExpand && <input
          name="title"
          placeholder="Title"
          value={inputText.title}
          onChange={getContent}
        />}
        <textarea
          onClick={() =>{
            setExpand(true);
          }}
          name="content"
          placeholder="Take a note..."
          rows= {isExpand ? 3 : 1}
          value={inputText.content}
          onChange={getContent}
        />
        <Zoom in={isExpand} >
        <Fab className="zoom"
          onClick={(event) => {
            event.preventDefault();
            props.getNote(inputText);
            setExpand(false);
            changeText({
              title: "",
              content: "",
            });
            
          }}
        >
          <AddIcon/>
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
