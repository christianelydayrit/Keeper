import Card from "../components/Card"
  
  function Register() {
    return (
      <Card 
        cardName={"Create Account"} 
        buttonName="Register" 
        textInput={"Username"} 
        passwordInput={["Password", "Repeat Password"]} 
        ggle={{title: "REGISTER WITH GOOGLE", link: "/register"}}/>
    );
  }
  
  export default Register;
  