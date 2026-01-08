import axios from "axios";

async function edit(item){
    console.log("from api Edit", item)
    const data={
        title: item.title,
        content: item.content
    }
    try{
        await axios.patch(`/api/notes/${item.id}`, data)
    }catch(e){
        console.log(e)
    }
}

export default edit;