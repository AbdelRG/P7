import express from "express";
const router = express.Router();
import signUp from "../controllers/authController.js";

//auth
router.post("", signUp);
//router.post("/login", authController.login);

export default router;
