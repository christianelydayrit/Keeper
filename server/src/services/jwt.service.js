import jwt from "jsonwebtoken";
import env from "dotenv"
import path from "path";

env.config({ path: path.resolve(process.cwd(), ".env") });

export function signIn(user){
    return jwt.sign({userId: user.userId, provider: user.provider}, process.env.JWT_SECRET, {
        expiresIn: "30m"
    })
}