import {TextField} from "@mui/material";

function TextF(props){
 return<TextField
        label={props.textInput}
        variant="outlined"
        name={props.name}
        value={props.value}
        onChange={(event) =>{props.change(event.target)}}
        error={props.error}
        helperText={props.helperTextName}
        fullWidth
    />
}

export default TextF;