import {TextField} from "@mui/material";


function FormInput(props){
    return <TextField
    label={props.inputLabel}
    type={props.type}
    variant="outlined"
    name={props.name} 
    value={props.value}
    onChange={(event) =>{props.change(event.target)}}
    error={props.error}
    helperText={props.error ? props.wrongEntry : ""}
    required
    fullWidth
  />
}

export default FormInput;