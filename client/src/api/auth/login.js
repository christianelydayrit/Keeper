import axios from "axios"

export default async function login( data ){
    const API_URL = import.meta.env.VITE_API_URL;
    try{
        const success = await axios.post(`${API_URL}/api/auth/login`, data,{withCredentials: true})
        return success.data.successLogin;
    }catch(e){
        console.log(e.stack)
        throw e;
    }
}