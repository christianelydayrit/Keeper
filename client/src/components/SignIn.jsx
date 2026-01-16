import { GoogleLogin } from "@react-oauth/google";
import googleSignIn from "../api/auth/google.js"
import { useNavigate } from "react-router-dom"
function Sign(props){
  const navigate = useNavigate();
  return(
    <GoogleLogin 
    onSuccess={async (response) => {
      const success = await googleSignIn(response)

      if(success){navigate("/keeper");
      }else{console.log("Pass doesnt Match")} 
    }} 
    onError={() => console.log("Login Failed")}
    text={props.ggle}
    auto_select="true"
    />
  )
}

export default Sign;