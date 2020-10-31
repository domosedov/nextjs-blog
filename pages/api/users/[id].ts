import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { id } = req.query;
    const user = await prisma.user.findOne({
      where: {
        id: Number(id),
      },
      select: {
        login: true,
        email: true,
        todo: {
          select: {
            id: true,
            title: true,
            description: true,
            completed: true,
          },
        },
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
