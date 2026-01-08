import axios from "axios";

async function del(id){
    try{
        await axios.delete(`/api/notes/${id}`)
    }catch(e){
        throw e;
    }
}

export default del;