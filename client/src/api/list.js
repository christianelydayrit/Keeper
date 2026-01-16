import axios from "axios";

async function list(){
    const API_URL = import.meta.env.VITE_API_URL;
    try{
        const data = await axios.get(`${API_URL}/api/notes`, {withCredentials: true})
        return data.data

    }catch(err){
        if (err.response?.status === 401) {
            return { unauthorized: true };
        }
        throw e
    }

}

export default list;