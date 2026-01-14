import { userRegister, userLogin } from "../services/auth.service.js"
import { signIn } from "../services/jwt.service.js"

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
        const id = await userLogin(username.trim(), password);
        if(id === 2 ){
            res.json({successLogin: 2}); //Not existing
            
        }else if(id === 0){
            res.json({successLogin: 0}); //Wrong pass
        }        
        else{
            const token = signIn({userId: id})//Authenticate User
            res.cookie("token", token, {
                httpOnly: true, 
                secure: false, 
                sameSite: "lax", 
                maxAge: 60 * 60 * 1000,
                path: "/"
            })
            res.json({successLogin: 1});
        }
        
    }catch(e){
        res.status(500).json({ error: "Failed to connect to auth service" });
    }
}

export function userLogout(req, res){
    console.log("Received request from Frontend")
    res.clearCookie("token", {
        httpOnly: true, 
        secure: false, 
        sameSite: "lax",
        path: "/"
    })
    res.json({successLogout: 1})
}