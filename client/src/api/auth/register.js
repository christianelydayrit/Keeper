import axios from "axios"

export default async function register( data ){
    try{
        const success = await axios.post("/api/auth/register", data)
        return success;
    }catch(e){
        console.log(e.stack)
    }
}