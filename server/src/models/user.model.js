import db from "../config/db.js"


export async function registerUser(userName, password){
    try{
       await db.query("INSERT INTO username, password VALUES ($1, $2)", [userName, password]);
    }catch(e){
        console.log(e.stack)
    }
}


export async function checkUser(userName){
    try{
       const data = await db.query("SELECT FROM users WHERE LOWER(username) = LOWER($1)", [userName]);
       return data.rows.length;
    }catch(e){
        console.log(e.stack)
    }
}