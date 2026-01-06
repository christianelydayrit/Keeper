import axios from "axios";

async function add(title, content){

    const postData = {
        title: title,
        content: content
    }
    try{
        await axios.post( "/api/add" ,postData);
        return 0
    }catch(e){
        console.error("Error sending note:", e);
    }
}

export default add;