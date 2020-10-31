import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const allUsers = await prisma.users.findMany({
      select: {
        id: true,
        login: true,
      }
    })
    res.json(allUsers);
  } else {
    res.status(405).json({message: `Method ${req.method} is not allowed`});
  }
};
