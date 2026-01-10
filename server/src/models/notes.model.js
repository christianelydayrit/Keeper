import db from "../config/db.js"

export async function notes(){
     const list = await db.query("SELECT * FROM todo ORDER BY id ASC")
     return list.rows
}

export async function addNote(title, content){
    const result =  await db.query("INSERT INTO todo (title, content) VALUES ($1, $2)", [title, content])
    return result.rowCount;
}

export async function deleteNote(id){
     await db.query("DELETE FROM todo WHERE id = $1", [id])
}

export async function editNote(id, title, content){
    await db.query("UPDATE todo SET title=$1, content=$2 WHERE id=$3", [title, content, id])
}