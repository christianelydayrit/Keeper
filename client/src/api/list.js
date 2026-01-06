import axios from "axios";

async function list(){
    
    try{
        const data = await axios.get("/api/todos")
        return data.data

    }catch(e){
        console.log("this is error tite " + e);
        throw e
    }

}

export default list;