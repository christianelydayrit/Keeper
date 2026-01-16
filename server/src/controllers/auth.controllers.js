import { userRegister, userLogin, googleSignIn } from "../services/auth.service.js"
import { signIn } from "../services/jwt.service.js"

export async function userExist(req, res){
    const username = req.body.username;
    const password = req.body.password;
    try{
        const exist = await userRegister(username.trim(), password);
        res.json({successRegister: exist});
    }catch(e){
        res.status(500).json({ error: "Failed to connect to auth service" });
    }
}

export async function userLog(req, res){
    const username = req.body.username;
    const password = req.body.password;
    try{
        const user = await userLogin(username.trim(), password);
        if(user === 2 ){
            res.json({successLogin: 2}); //Not existing
            
        }else if(user === 0){
            res.json({successLogin: 0}); //Wrong pass
        }        
        else{
            const token = signIn({userId: user.userId, provider: user.provider})//Authenticate User
            res.cookie("token", token, {// REPEATING SIGNIN
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
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
    
    const provider = req.user.provider;
    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: 60 * 60 * 1000,
        path: "/"
    })
    res.json({provider: provider})
}

export async function googelAuth(req, res){

    try{
        const user = await googleSignIn(req.body.idToken)//Authenticate User
        
        const token = signIn({userId: user.userId, provider: user.provider})
        res.cookie("token", token, {// REPEATING SIGNIN
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: 60 * 60 * 1000,
            path: "/"
        })
        res.json({success: 1})
    }catch(e){
        res.json({success: 0})
    }

}