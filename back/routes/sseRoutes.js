import express from "express";
const router = express.Router();
import sse from "../config/sse.js";

router.get("/stream", async (req, res) => {
  try {
    await sse.init(req, res);
  } catch (err) {
    console.log(err);
  }
});

export default router;
