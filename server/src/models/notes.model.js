import db from "../config/db.js"

export async function notes(id){
     const list = await db.query("SELECT * FROM todo WHERE user_id = $1 ORDER BY id ASC", [id])
     return list.rows
}

export async function addNote(id, title, content){
    const result =  await db.query("INSERT INTO todo (title, content, user_id) VALUES ($1, $2, $3)", [title, content, id])
    return result.rowCount;
}

export async function deleteNote(id){
     await db.query("DELETE FROM todo WHERE id = $1", [id])
}

export async function editNote(id, title, content){
    await db.query("UPDATE todo SET title=$1, content=$2 WHERE id=$3", [title, content, id])
}