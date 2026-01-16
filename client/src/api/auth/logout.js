import axios from "axios"

async function logout(){
    try{
        const data = await axios.post("/api/auth/logout", {})
        console.log("Success Logout: " +  data.data.provider)
        return data.data.provider;
    }catch(e){
        console.error("Error sending note:", e);
    }
}

export default logout;