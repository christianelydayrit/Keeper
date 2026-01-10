import {notes, addNote, deleteNote, editNote} from "../models/notes.model.js"

export async function getNotes(req, res){
    try{
        const list = await notes();
        res.status(200).json(list);
    }catch(e){
        res.status(500).json({ error: "Failed to fetch List" });
    }
}


export async function addNotes(req, res){
    const content = req.body.content;
    const title = req.body.title;
    try{
        const count = await addNote(title, content);
        if (count === 0) {
            return res.status(400).json({ error: "Insert failed" });
          }
        res.status(201).json({ message: "List added" });
    }catch(e){
        res.status(500).json({ error: "Failed to add List" });
    }
}

export async function deleteNotes(req, res){
    const id = req.params.id;
    try{
        await deleteNote(id);
        res.status(200).json({ message: "List deleted" });
    }catch(e){
        res.status(500).json({ error: "Failed to delete List" });
    }
}

export async function editNotes(req, res){
    const id = req.params.id
    const title = req.body.title
    const content = req.body.content
    try{
        await editNote(id, title, content);
        res.status(200).json({ message: "List Edited" });
    }catch(e){
        res.status(500).json({ error: "Failed to Edit List" });
    }
}