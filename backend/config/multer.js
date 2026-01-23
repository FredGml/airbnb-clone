import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "listings",
    allowed_formats: ["jpg", "png", "jpeg", "webp", "avif"],
  },
});

export const upload = multer({ storage });
