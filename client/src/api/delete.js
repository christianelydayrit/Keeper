import axios from "axios";

async function del(id){
    try{
        await axios.delete(`/api/delete/${id}`)
    }catch(e){
        throw e;
    }
}

export default del;