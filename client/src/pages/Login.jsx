import { useState } from "react"
import Card from "../components/Card"
import { Box } from "@mui/material"
import SnackBar from "../components/SnackBar"
import login from "../api/auth/login"
import { useNavigate } from "react-router-dom"


  function Login() {
    const [passError, setPassError] = useState(false)
    const [textError, setTextError] = useState(false)
    const [success , setSuccess] = useState(false)
    const [textEntryMessage , setMessage] = useState("")
    const navigate = useNavigate();

    async function loginUser(input){
      const name = input.username;
      const pass = input.password;
      
      setPassError(false);
      setTextError(false);

      const result = await login({
        username: name,
        password: pass
      });
    
      if(result === 1){
        setSuccess(true);

        setTimeout(() => {
            navigate("/keeper");
        }, 1000);
      }else if(result === 0){
        setMessage("Wrong Username")
        setTextError(true);
        setPassError(true);
        console.log("Pass doesnt Match")
      }else{
        setMessage("Username doesn't exist")
        setTextError(true); 
        console.log("Username doesn't exist")
      }
      
    }

    const textFields=[
      {
        name: "username",
        type: "text",
        inputLabel: "Username",
        error: textError,
        wrongEntry:textEntryMessage
      },
      {
        name: "password",
        type: "password",
        inputLabel: "Password",
        error: passError,
        wrongEntry: "Wrong Password"
      }
    ]
    return (
      <Box >
        <Card 
          cardName={"Login"}
          textField={textFields}
          submitInput={loginUser}
          submitName={"Login"}
          ggle="signin_with"
        />
        <SnackBar success={success} message="Success Login"/>
      </Box>
    );
  }
  
  export default Login;
  