import { useState } from "react"
import Card from "../components/Card"
import register from "../api/auth/register"
  function Register() {
    const [userData, setUserData] = useState({
      username: "",
      password: ""
    });

    const [passError, setPassError] = useState(false)
    const [textError, setTextError] = useState(false)

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
        setUserData(()=>({
          username: name,
          password: pass1
        }))
        const success = await register({
          username: name,
          password: pass1
        });
        if(!success.successRegister){
          setTextError(true)
        }
      }else{
          setPassError(true);
        console.log("Pass doesnt Match")
      }0
    }

    return (
      <Card 
        cardName={"Create Account"}
        textField={textFields}
        submitInput={postUser}
        submitName={"Register"}
        ggle={{title: "REGISTER WITH GOOGLE", link: "/register"}}/>
        
    );
  }
  
  export default Register;
  