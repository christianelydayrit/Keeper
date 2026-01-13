import axios from "axios";

async function list(){
    
    try{
        const data = await axios.get("/api/notes")
        return data.data

    }catch(err){
        if (err.response?.status === 401) {
            return { unauthorized: true };
        }
        throw e
    }

}

export default list;