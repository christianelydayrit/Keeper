import {
    Container,
    Box,
    Typography,
    Divider,
    Stack
  } from "@mui/material";
import ButtonCustom from "./Button";
import Sign from "./SignIn";
import TextF from "./TextField";
import Password from "./PasswordInput";

function Card(props){
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

              <TextF textInput={props.textInput}/>

              {passW.map((title, index) =>{ return <Password key={index} passwordInput={title}/>})}

              <ButtonCustom name={props.buttonName}/>

              <Divider>OR</Divider>

              <Sign ggle={props.ggle}/>

            </Stack>
          </Box>
        </Container>
      );
}

export default Card;