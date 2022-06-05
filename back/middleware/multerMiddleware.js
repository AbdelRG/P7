import multer from "multer";
import path from "path";

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join("./images"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "." + file.originalname);
  },
});

module.exports = multer({ storage: fileStorageEngine }).single("image");
