import express from "express";
import userRoutes from "./routes/userRoutes.js";
//const sauceRoutes = require("./routes/sauceRoutes.js");
//require("dotenv").config({ path: "./config/.env" });
import path from "path";
import db from "./config/db.js";

import cors from "cors";

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

//app.use("/api", sauceRoutes);

//server
db.sync()
  .then(console.log("connection  à la base de donnée reussi"))
  .catch((error) => console.log(error));

app.listen(3000, () => {
  console.log(`listening on port 3000`);
});
