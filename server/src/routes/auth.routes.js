import express from "express"
import {userExist} from "../controllers/auth.controllers.js"

const router = express.Router();

router.post("/register", userExist);

export default router;