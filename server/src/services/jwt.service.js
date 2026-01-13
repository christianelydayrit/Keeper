import jwt from "jsonwebtoken";
import env from "dotenv"
import path from "path";

env.config({ path: path.resolve(process.cwd(), ".env") });

export function signIn(userId){
    return jwt.sign(userId, process.env.JWT_SECRET, {
        expiresIn: "1h"
    })
}