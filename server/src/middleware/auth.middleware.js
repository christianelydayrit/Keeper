import jwt from "jsonwebtoken";

export function authenticateToken(req, res, next){
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({error: "Unauthorized"})
    }

    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET)//returns exception when token is invalid
        req.user = payload;
        next()
    }catch(e){
        return res.status(401).json({ error: "Invalid or expired token" });
    }
    
}

