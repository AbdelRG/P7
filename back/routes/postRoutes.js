import express from "express";
const router = express.Router();
import { setPost, getAllPost } from "../controllers/postController.js";
import authenticateToken from "../middleware/authMiddleware.js";
import multerMiddleware from "../middleware/multerMiddleware.js";

router.post("setPost", authenticateToken, multerMiddleware, setPost);
router.get("getAllPost", authenticateToken, getAllPost);

export default router;
