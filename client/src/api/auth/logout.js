import axios from "axios"

async function logout(){
    const API_URL = import.meta.env.VITE_API_URL;
    try{
        const data = await axios.post(`${API_URL}/api/auth/logout`, {}, {withCredentials: true})
        return data.data.provider;
    }catch(e){
        console.error("Error sending note:", e);
        throw e;
    }
}

export default logout;