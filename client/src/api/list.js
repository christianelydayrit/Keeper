import axios from "axios";

async function list(){
    
    try{
        const data = await axios.get("/api/notes")
        return data.data

    }catch(e){
        console.log("this is error " + e);
        throw e
    }

}

export default list;