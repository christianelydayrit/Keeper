import Card from "../components/Card"
  
  function Login() {
    return (
        <Card cardName={"Login"} buttonName="Login" textInput={"Username"} passwordInput={["Password"]} ggle={{title: "SIGN IN WITH GOOGLE", link: "/login"}}/>
    );
  }
  
  export default Login;
  