import {notes, addNote, deleteNote, editNote} from "../models/notes.model.js"

export async function requestNotes(id){
        const list = await notes(id);
        return list;
}

export async function requestAddNotes(id, title, content){
        const count = await addNote(id, title, content);
        return count;
}

export async function requestDeleteNotes(id){
        await deleteNote(id);
}


export async function requestEditNotes(id, title, content){
        await editNote(id, title, content);
}