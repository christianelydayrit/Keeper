import {TextField} from "@mui/material";


function Password(props){
    return <TextField
    label={props.passwordInput}
    type="password"
    variant="outlined"
    name={props.name}
    value={props.value}
    onChange={(event) =>{props.change(event.target)}}
    error={props.error}
    helperText={props.helperTextPass}
    fullWidth
  />
}

export default Password;