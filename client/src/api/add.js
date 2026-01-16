import axios from "axios";

async function add(title, content){
    const API_URL = import.meta.env.VITE_API_URL;
    const postData = {
        title: title,
        content: content
    }
    try{
        await axios.post( `${API_URL}/api/notes` ,postData, {withCredentials: true});
        return 0
    }catch(e){
        console.error("Error sending note:", e);
        throw e;
    }
}

export default add;