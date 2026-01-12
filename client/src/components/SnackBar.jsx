import { Snackbar, Alert } from "@mui/material"

export default function SnackBar(props){
    return (<Snackbar
    open={props.success}
    autoHideDuration={1500}
    anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
    <Alert severity="success" variant="filled">
      {props.message}
    </Alert>
  </Snackbar>)

}