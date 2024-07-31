import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), "public/uploads");

const handleFileUpload = (req, res) => {
  const form = new formidable.IncomingForm({
    uploadDir,
    keepExtensions: true,
  });

  form.on("file", (field, file) => {
    fs.renameSync(file.path, path.join(uploadDir, file.name));
  });

  form.on("end", () => {
    res.status(200).json({ url: `/uploads/${file.name}` });
  });

  form.parse(req);
};

export default (req, res) => {
  if (req.method === "POST") {
    handleFileUpload(req, res);
  } else {
    res.status(405).send("Method Not Allowed");
  }
