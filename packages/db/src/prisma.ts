import Blitz from "blitz" // it's commonjs module, so named export doesn't work
import Prisma from "@prisma/client" // it's commonjs module, so named export doesn't work
const { PrismaClient } = Prisma
const { enhancePrisma } = Blitz

// const EnhancedPrisma = enhancePrisma(PrismaClient)

// interface EnhancedPrismaClientAddedMethods {
//     $reset: () => Promise<void>
// }

// export const db = new EnhancedPrisma() as InstanceType<typeof PrismaClient> & EnhancedPrismaClientAddedMethods
export const db = new PrismaClient()