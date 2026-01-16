import axios from "axios"

export default async function googleSignIn(response){
  try{
    const result = await axios.post("/api/auth/google", {idToken: response.credential});
    console.log(result.data.success);
    return result.data.success === 1;
  }catch(e){
    console.log(e)
  }
} 
