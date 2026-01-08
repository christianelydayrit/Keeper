import {TextField} from "@mui/material";

function TextF(props){
 return<TextField
        label={props.textInput}
        variant="outlined"
        fullWidth
    />
}

export default TextF;