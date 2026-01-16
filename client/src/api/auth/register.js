import axios from "axios"

export default async function register( data ){
    const API_URL = import.meta.env.VITE_API_URL;
    try{
        const success = await axios.post(`${API_URL}/api/auth/register`, data, {withCredentials: true})
        return success.data;
    }catch(e){
        console.log(e.stack)
        throw e;
    }
}