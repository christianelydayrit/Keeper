import {Button } from "@mui/material";

function ButtonCustom(props){
    return <Button
    variant="contained"
    size="large"
    fullWidth
    sx={{ backgroundColor: '#f5ba13', color: '#fff' }}
  >
    {props.name}
  </Button>
}

export default ButtonCustom;