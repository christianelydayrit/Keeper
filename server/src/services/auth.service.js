import { registerUser, checkUser, login, googleRegisterUser} from "../models/user.model.js"
import argon2 from "argon2";
import googleClient from "../config/googleClient.js"

export async function  userRegister(username, password){
    try{
        const exist = await checkUser(username);
        if(exist === 0){
            const hashPassword = await argon2.hash(password);
            await registerUser(username, hashPassword);
            return 1;
        } else{return 0;}
    }catch(e){
        console.log("Error from Auth Service Register: " + e);
        throw e;
    }
}

export async function userLogin(username, password){
    try{
        const data = await login(username);
        if(data.length > 0){
            const match = await argon2.verify(data[0].password, password);
            return match ? {userId: data[0].id, provider: data[0].provider} : 0;
        }else{
            return 2; //user doesnt exist
        }
    }catch(e){
        console.log("Error from Auth Service Login: " + e);
        throw e;
    }
}

export async function googleSignIn(rawToken){
    const ticket = await googleClient.verifyIdToken({
        idToken: rawToken,
        audience: process.env.GOOGLE_CLIENT_ID
    })

    const { email, sub: googleId } = ticket.getPayload();

    const user = await checkUser(email);

    if(!user){
        await googleRegisterUser(email, googleId)
    }

    const data = await login(email);
    return {userId: data[0].id, provider: data[0].provider};

}  