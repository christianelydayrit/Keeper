import { userRegister, userLogin } from "../services/auth.service.js"

export async function userExist(req, res){
    const username = req.body.username;
    const password = req.body.password;
    try{
        const exist = await userRegister(username.trim(), password);
        console.log("Receive- auth.controller: " +  exist)
        res.json({successRegister: exist});
    }catch(e){
        res.status(500).json({ error: "Failed to connect to auth service" });
    }
}

export async function userLog(req, res){
    const username = req.body.username;
    const password = req.body.password;
    try{
        const result = await userLogin(username.trim(), password);
        console.log("Receive- auth.controller: " +  result)
        res.json({successLogin: result});
    }catch(e){
        res.status(500).json({ error: "Failed to connect to auth service" });
    }
}