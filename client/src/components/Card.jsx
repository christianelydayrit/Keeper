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
import FormInput from "./FormInput";

function Card(props){
  const textFields = props.textField
  const initialData = textFields.reduce((acc, field) =>{
    acc[field.name]= "";
    return acc
  }, {});

  const [userData, setUserData] = useState(initialData);

  function changes(user){
    const name = user.name;
    const value = user.value;
    console.log(value)
    setUserData((prevVal) =>({
      ...prevVal,
      [name]: value
    }))
  }

    return (
        <Container maxWidth="sm">
          <Box
            sx={{
              mt: 8,
              p: 4,
              borderRadius: 2,
              boxShadow: 3,
              textAlign: "center",
              backgroundColor:"white"
            }}
          >
            <Typography variant="h5" gutterBottom>
              {props.cardName}
            </Typography>

            <form method="POST" onSubmit={(e) =>{
                  e.preventDefault();
                  props.submitInput(userData);
                }}>
            <Stack spacing={2}>
           
              {textFields.map((field, index) =>(
                  <FormInput 
                    key={index}
                    inputLabel={field.inputLabel} 
                    type={field.type} 
                    name={field.name} 
                    value={userData[field.name]} 
                    change={changes} 
                    error={field.error}  
                    wrongEntry={field.wrongEntry}
                />
              ))}

              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{ backgroundColor: '#f5ba13', color: '#fff' }}
                type="submit"
                >
                {props.submitName}
            </Button>
            
              <Divider>OR</Divider>

              <Sign ggle={props.ggle}/>

            </Stack>
            </form>
          </Box>
        </Container>
      );
}

export default Card;