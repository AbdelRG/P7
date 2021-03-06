import express from "express";
import userRoutes from "./routes/userRoutes.js";
import sseRoutes from "./routes/sseRoutes.js";

import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });

import db from "./config/db.js";
import { login } from "./controllers/authController.js";
import {
  setPost,
  getAllPost,
  getPostById,
  getPostByUserId,
  deletePost,
  getDeletedPost,
  restorePost,
  adminDeletePost,
} from "./controllers/postController.js";
import multerMiddleware from "./middleware/multerMiddleware.js";
import cors from "cors";
import authenticateToken from "./middleware/authMiddleware.js";
import {
  getUser,
  getUserById,
  updateUser,
  getAllUsers,
  deleteUser,
} from "./controllers/userController.js";
import {
  setComent,
  getComentsByPostId,
  deleteComent,
} from "./controllers/comentController.js";

import addFlush from "./middleware/addFlush.js";

const app = express();
app.use("/images", express.static(path.join("./images")));
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    withCredentials: true,
  })
);
//routes
app.use("/", userRoutes);
app.use("/login", login);
app.use("/getUser", authenticateToken, getUser);
app.use("/setPost", authenticateToken, multerMiddleware, setPost);
app.use("/getAllPost", authenticateToken, getAllPost);
app.use("/getUserById", authenticateToken, getUserById);
app.use("/updateUser", authenticateToken, multerMiddleware, updateUser);
app.use("/getPostById", authenticateToken, getPostById);
app.use("/setComent", authenticateToken, setComent);
app.use("/getComentsByPostId", authenticateToken, getComentsByPostId);
app.use("/getPostByUserId", authenticateToken, getPostByUserId);
app.use("/deletePost", authenticateToken, deletePost);
app.use("", addFlush, sseRoutes);
app.use("/deleteComent", authenticateToken, deleteComent);
app.use("/getAllUsers", authenticateToken, getAllUsers);
app.use("/deleteUser", authenticateToken, deleteUser);
app.use("/getDeletedPost", authenticateToken, getDeletedPost);
app.use("/restorePost", authenticateToken, restorePost);
app.use("/adminDeletePost", authenticateToken, adminDeletePost);

//server
db.sync({ force: false, alter: false })
  .then(console.log("connexion  ?? la base de donn??e reussi"))
  .catch((error) => console.log(error));

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
