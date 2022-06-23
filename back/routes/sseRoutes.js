import express from "express";
const router = express.Router();
import sse from "../config/sse.js";

router.get("/stream", sse.init);

export default router;
