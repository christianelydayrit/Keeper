import axios from "axios"

export default async function login( data ){
    try{
        console.log("from login.js ", data)
        const success = await axios.post("/api/auth/login", data)
        console.log("Success Login:" + success.data.successLogin);
        return success.data.successLogin;
    }catch(e){
        console.log(e.stack)
    }
}