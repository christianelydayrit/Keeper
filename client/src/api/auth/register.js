import axios from "axios"

export default async function register( data ){
    try{
        console.log("from register.js ", data)
        const success = await axios.post("/api/auth/register", data)
        console.log("Success Register:" + success.data.successRegister);
        return success.data;
    }catch(e){
        console.log(e.stack)
    }
}