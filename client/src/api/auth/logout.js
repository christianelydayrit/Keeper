import axios from "axios"

async function logout(){
    const API_URL = import.meta.env.VITE_API_URL;
    try{
        const data = await axios.post(`${API_URL}/api/auth/logout`, {}, {withCredentials: true})
        console.log("Success Logout: " +  data.data.provider)
        return data.data.provider;
    }catch(e){
        console.error("Error sending note:", e);
    }
}

export default logout;