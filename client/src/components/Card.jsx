import { useState } from "react";
import {
    Container,
    Box,
    Typography,
    Divider,
    Stack,
    Button
  } from "@mui/material";
import Sign from "./SignIn";
import TextF from "./TextField";
import Password from "./PasswordInput";

function Card(props){
  const [userData, setUserData] = useState({
    userName: "",
    password0: "",
    password1: ""
  });

  const [nameError, setNameError] = useState(false);
  const [passError, setPassError] = useState(false);

  function changes(user){
    const name = user.name;
    const value = user.value;
    console.log(value)
    setUserData((prevVal) =>({
      ...prevVal,
      [name]: value
    }))
  }

  const passW = props.passwordInput

    return (
        <Container maxWidth="sm">
          <Box
            sx={{
              mt: 8,
              p: 4,
              borderRadius: 2,
              boxShadow: 3,
              textAlign: "center",
            }}
          >
            <Typography variant="h5" gutterBottom>
              {props.cardName}
            </Typography>
    
            <Stack spacing={2}>

              <TextF textInput={props.textInput} name="userName" value={userData.userName} change={changes} error={nameError} wrongName={props.helperTextName}/>

              {passW.map((title, index) =>{ return <Password key={index} passwordInput={title} name={`password${index}`} value={userData[`password${index}`]} change={changes} error={passError} wrongPass={props.helperTextPass}/>})}

              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{ backgroundColor: '#f5ba13', color: '#fff' }}
                onClick={() =>{
                  props.submitInput(userData)
                }}
                >
                {props.submitName}
            </Button>

              <Divider>OR</Divider>

              <Sign ggle={props.ggle}/>

            </Stack>
          </Box>
        </Container>
      );
}

export default Card;