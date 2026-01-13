import express from "express";
import {getNotes, addNotes, deleteNotes, editNotes} from "../controllers/note.controller.js"
import { authenticateToken } from "../middleware/auth.middleware.js"

const router = express.Router();

router.get("/notes",authenticateToken, getNotes);
router.post("/notes",authenticateToken, addNotes);
router.delete("/notes/:id",authenticateToken, deleteNotes);
router.patch("/notes/:id",authenticateToken, editNotes);

export default router;