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
const multerMiddleware = multer({ storage: fileStorageEngine }).single("file");

export default multerMiddleware;
