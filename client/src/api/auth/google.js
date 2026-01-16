import axios from "axios"

export default async function googleSignIn(response){
  const API_URL = import.meta.env.VITE_API_URL;
  try{
    const result = await axios.post(`${API_URL}/api/auth/google`, {idToken: response.credential}, {withCredentials: true});
    return result.data.success === 1;
  }catch(e){
    console.log(e)
    throw e;
  }
} 
