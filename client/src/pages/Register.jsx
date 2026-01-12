import { useState } from "react"
import Card from "../components/Card"
import register from "../api/auth/register"
import SnackBar from "../components/SnackBar"
import { Box } from "@mui/material"
import { useNavigate } from "react-router-dom"

  function Register() {
    const [passError, setPassError] = useState(false)
    const [textError, setTextError] = useState(false)
    const [success , setSuccess] = useState(false)
    const navigate = useNavigate();
    const textFields = [
      {
        name: "username",
        type: "text",
        inputLabel: "Username",
        error: textError,
        wrongEntry: "Username Taken"
      },
      {
        name: "password0",
        type: "password",
        inputLabel: "Password",
        error: passError,
        wrongEntry: "Password Doesn't Match"
      },
      {
        name: "password1",
        type: "password",
        inputLabel: "Repeat Password",
        error: passError,
        wrongEntry: "Password Doesn't Match"
      }
    ]
    

    function checkPass(pass1,  pass2){
      const isSamePass = pass1 === pass2 ? true : false
      return isSamePass;
    }

    async function postUser(input){
      const name = input.username;
      const pass1 = input.password0;
      const pass2 = input.password1;
      console.log("From postUser: " +  input);

      setPassError(false);
      setTextError(false);

      if(checkPass(pass1, pass2)){
        const success = await register({
          username: name,
          password: pass1
        });

          if(!success.successRegister){
            setTextError(true);
          }else{
            setSuccess(true);

            setTimeout(() => {
              navigate("/keeper");
            }, 1000);
          }
        }else{
          setPassError(true);
          console.log("Pass doesnt Match")
        }
    }

    return (
      <Box >
        <Card 
          cardName={"Create Account"}
          textField={textFields}
          submitInput={postUser}
          submitName={"Register"}
          ggle={{title: "REGISTER WITH GOOGLE", link: "/register"}}
        />
        <SnackBar success={success} message="Success Registration"/>
      </Box>
    );
  }
  
  export default Register;
  