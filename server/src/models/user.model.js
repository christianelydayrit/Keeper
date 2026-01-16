import db from "../config/db.js"


export async function registerUser(userName, password){
    try{
       await db.query("INSERT INTO users (username, password, provider) VALUES ($1, $2, 'local')", [userName, password]);
    }catch(e){
        console.log("Error at user.model (Register)" + e.stack)
        throw e
    }
}


export async function checkUser(userName){
    try{
       const data = await db.query("SELECT username FROM users WHERE LOWER(username) = LOWER($1)", [userName]);
       return data.rows.length;
    }catch(e){
        console.log("Error at user.model (Register)" + e.stack)
        throw e
    }
}

export async function login(userName){
    try{
        const data = await db.query("SELECT id, username, password, provider FROM users WHERE LOWER(username) = LOWER($1)", [userName]);
       return data.rows;
    }catch(e){
        console.log("Error at user.model (Login)" + e.stack)
        throw e
    }
}

export async function googleRegisterUser(userName, googleID){
    try{
       await db.query("INSERT INTO users (username, googleid, provider) VALUES ($1, $2, 'google')", [userName, googleID]);
    }catch(e){
        console.log("Error at user.model (Register)" + e.stack)
        throw e
    }
}
