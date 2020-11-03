import { File } from "formidable";
import path from "path";
import { v4 as uuid } from "uuid";
//@ts-ignore
import Formidable from "formidable-serverless";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function uploadFormFiles(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return new Promise(async (resolve, reject) => {
    const form = new Formidable.IncomingForm({
      multiples: true,
      keepExtensions: true,
    });

    form
      .on("file", (name: string, file: File) => {
        const data = fs.readFileSync(file.path);
        const fileExt = path.extname(file.path);
        const fileName = `${uuid()}.${fileExt}`;
        fs.writeFileSync(`public/uploads/${fileName}`, data);
        fs.unlinkSync(file.path);
      })
      .on("aborted", () => {
        reject(res.status(500).json({ message: "aborted" }));
      })
      .on("end", () => {
        resolve(res.status(200).json({ message: "done" }));
      });

    await form.parse(req);
  });
}
