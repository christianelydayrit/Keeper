import { useState } from "react"
import Card from "../components/Card"
import register from "../api/auth/register"
  function Register() {
    const [userData, setUserData] = useState({
      username: "",
      password: ""
    });

    function checkPass(pass1,  pass2){
      const isSamePass = pass1 === pass2 ? true : false
      return isSamePass;
    }

    function postUser(input){
      const name = input.userName;
      const pass1 = input.password0;
      const pass2 = input.password1;
      console.log(input)
      if(checkPass(pass1, pass2)){
        setUserData(()=>({
          username: name,
          password: pass1
        }))
        // register(userData)
      }else{
        console.log("Pass doesnt Match")
      }

    }
    return (
      <Card 
        cardName={"Create Account"} 
        textInput={"Username"}
        submitInput={postUser}
        passwordInput={["Password", "Repeat Password"]} 
        helperTextPass={"Password do not match"} //change this depending on the error
        helperTextName={""}
        submitName={"Register"}
        ggle={{title: "REGISTER WITH GOOGLE", link: "/register"}}/>
        
    );
  }
  
  export default Register;
  