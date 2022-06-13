import express from "express";
import userRoutes from "./routes/userRoutes.js";
//const sauceRoutes = require("./routes/sauceRoutes.js");
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });
import postRoutes from "./routes/postRoutes.js";
import db from "./config/db.js";
import { login } from "./controllers/authController.js";
import { setPost, getAllPost } from "./controllers/postController.js";
import multerMiddleware from "./middleware/multerMiddleware.js";
import cors from "cors";
import authenticateToken from "./middleware/authMiddleware.js";
import {
  getUser,
  getUserById,
  updateUser,
} from "./controllers/userController.js";

const app = express();
app.use("/images", express.static(path.join("./images")));
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
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
//app.use("/api", sauceRoutes);

//server
db.sync({ force: false, alter: false })
  .then(console.log("connexion  à la base de donnée reussi"))
  .catch((error) => console.log(error));

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
