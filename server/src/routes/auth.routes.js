import express from "express"
import {userExist, userLog, userLogout} from "../controllers/auth.controllers.js"
import { authenticateToken } from "../middleware/auth.middleware.js"
const router = express.Router();

router.post("/register", userExist);
router.post("/login", userLog);
router.post("/logout", authenticateToken, userLogout);

export default router;