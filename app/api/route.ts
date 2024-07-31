// app/api/upload/route.ts
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

// Configure the directory for file uploads
const uploadDir = path.join(process.cwd(), 'public/uploads');

// Ensure the upload directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export async function POST(req: Request): Promise<Response> {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm({
      uploadDir,
      keepExtensions: true,
    });

    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(NextResponse.json({ error: 'Error parsing the files.' }, { status: 500 }));
      }

      // Assume the field name for file is 'file'; adjust if different
      const file = files.file?.[0];

      if (!file) {
        return reject(NextResponse.json({ error: 'No file uploaded.' }, { status: 400 }));
      }

      // Rename and move the file to the upload directory
      const newFilePath = path.join(uploadDir, file.originalFilename || file.newFilename);
      fs.renameSync(file.filepath, newFilePath);

      // Respond with the URL of the uploaded file
      resolve(NextResponse.json({ url: `/uploads/${file.newFilename || file.originalFilename}` }));
    });
  });
}
