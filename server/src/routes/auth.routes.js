import express from "express"
import {userExist, userLog} from "../controllers/auth.controllers.js"

const router = express.Router();

router.post("/register", userExist);
router.post("/login", userLog);

export default router;