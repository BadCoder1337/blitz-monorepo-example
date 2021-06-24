import { Prisma, User as DBUser } from "@prisma/client"
import { db } from "../prisma"

export class User implements DBUser {
    id: number
    createdAt: Date
    updatedAt: Date
    name: string | null
    email: string
    hashedPassword: string | null
    role: string

}