import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import Joi from 'joi'
import {hash} from 'bcrypt'
const prisma = new PrismaClient();
const registerSchema = Joi.object({
  login: Joi.string()
    .alphanum()
    .min(3)
    .max(50)
    .required(),

  email: Joi.string()
    .email()
    .required(),

  password: Joi.string().required()
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const allUsers = await prisma.user.findMany({
      select: {
        id: true,
        login: true,
      }
    })
    res.json(allUsers);
  } else if (req.method === 'POST') {
    try {
      const result = await registerSchema.validateAsync(req.body)
      res.json(result)
    } catch (err) {
      res.status(400).json({message: err.message})
    }
    

  } else {
    res.status(405).json({message: `Method ${req.method} is not allowed`});
  }
};
