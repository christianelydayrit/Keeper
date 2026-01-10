import { registerUser, checkUser} from "../models/user.model.js"

export async function userExist(req, res){
    const username = req.body.userName;
    const password = req.body.password;
    try{
        const exist = await checkUser(username);
        if(exist === 0 ){
            await registerUser(username, password);
            res.json({successRegister: 1});
        } 
        res.json({successRegister: 0});
        
    }catch(e){
        res.status(500).json({ error: "Failed to connect to db" });
    }
}