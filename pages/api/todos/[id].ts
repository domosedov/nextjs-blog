import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { id } = req.query;
    const user = await prisma.todo.findOne({
      where: {
        id: Number(id),
      },
    });
    if (!user) {
      return res.status(404).json({ message: "Not found" });
    } else {
      res.json(user);
    }
  } else {
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
