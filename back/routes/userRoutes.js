import express from "express";
const router = express.Router();
import { signUp, login } from "../controllers/authController.js";
import { getUser, updateUser } from "../controllers/userController.js";
import authenticateToken from "../middleware/authMiddleware.js";
import multerMiddleware from "../middleware/multerMiddleware.js";

//auth
router.post("", signUp);
router.post("login", login);
//user
router.get("getUser", authenticateToken, getUser);
router.put("updateUser", authenticateToken, multerMiddleware, updateUser);

export default router;
