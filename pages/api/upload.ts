import fs from 'fs'
import formidable from 'formidable'
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
    api: {
        bodyParser: false 
    }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await new Promise((resolve, reject) => {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            console.log(fields)
            console.log(files)
        })
    })
    await data
    res.json({message: 'hello'})
}