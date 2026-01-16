import axios from "axios";

async function edit(item){
    console.log("from api Edit", item)
    const data={
        title: item.title,
        content: item.content
    }
    try{
        await axios.patch(`${API_URL}/api/notes/${item.id}`, data, {withCredentials: true})
    }catch(e){
        console.log(e)
    }
}

export default edit;