import axios from "axios";

async function edit(item){
    const API_URL = import.meta.env.VITE_API_URL;
    const data={
        title: item.title,
        content: item.content
    }
    try{
        await axios.patch(`${API_URL}/api/notes/${item.id}`, data, {withCredentials: true})
    }catch(e){
        console.log(e)
        throw e;
    }
}

export default edit;