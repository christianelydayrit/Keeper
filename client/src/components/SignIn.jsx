import {Button } from "@mui/material";
import { Link } from "react-router-dom";

function Sign(props){
    const {title, link} = props.ggle;
    return <Link to={link}>
        <Button
        variant="outlined"
        color="secondary"
        size="large"
        fullWidth
         >
        {title}
    </Button>
  </Link>
}

export default Sign;