// app/api/upload/route.ts (or route.js)
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

// Configure form parsing settings
const uploadDir = path.join(process.cwd(), 'public/uploads');

export async function POST(req: Request) {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm({
      uploadDir,
      keepExtensions: true,
    });

    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
        return;
      }

      const file = files.file[0]; // Adjust this if the field name differs
      fs.renameSync(file.filepath, path.join(uploadDir, file.originalFilename || file.newFilename));

      resolve(NextResponse.json({ url: `/uploads/${file.newFilename || file.originalFilename}` }));
    });
  });
}
