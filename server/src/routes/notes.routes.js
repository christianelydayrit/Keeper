import express from "express";
import {getNotes, addNotes, deleteNotes, editNotes} from "../controllers/note.controller.js"

const router = express.Router();

router.get("/notes", getNotes);
router.post("/notes", addNotes);
router.delete("/notes/:id", deleteNotes);
router.patch("/notes/:id", editNotes);

export default router;