import axios from "axios";

async function del(id){
    const API_URL = import.meta.env.VITE_API_URL;
    try{
        await axios.delete(`${API_URL}/api/notes/${id}`, {withCredentials: true})
    }catch(e){
        throw e;
    }
}

export default del;