import express from "express"
import {userExist, userLog, userLogout, googelAuth} from "../controllers/auth.controllers.js"
import { authenticateToken } from "../middleware/auth.middleware.js"
const router = express.Router();

router.post("/register", userExist);
router.post("/login", userLog);
router.post("/logout", authenticateToken, userLogout);
router.post("/google", googelAuth);

export default router;