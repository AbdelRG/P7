import express from "express";
const router = express.Router();
import { signUp, login } from "../controllers/authController.js";
import { getUser } from "../controllers/userController.js";
import authenticateToken from "../middleware/authMiddleware.js";

//auth
router.post("", signUp);
router.post("login", login);
//user
router.get("getUser", authenticateToken, getUser);

export default router;
