// multer.js
import multer from "multer";
import path from 'path';

// Set up multer storage for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "../../client/public/assets/");
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage });

export { storage, upload };
  