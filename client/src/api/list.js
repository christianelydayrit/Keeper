import axios from "axios";

async function list(){
    
    try{
        const data = await axios.get("/api/todos")
        console.log(data.data[0]);
        return data.data

    }catch(e){
        console.log(e);
        throw e
    }

}

export default list;