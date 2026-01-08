import {TextField} from "@mui/material";

function Password(props){
    return <TextField
    label={props.passwordInput}
    type="password"
    variant="outlined"
    fullWidth
  />
}

export default Password;