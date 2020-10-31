import { NextApiRequest, NextApiResponse } from "next";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const allTodos = await prisma.todos.findMany()
        res.json(allTodos)
    }
}