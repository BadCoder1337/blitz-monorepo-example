import { enhancePrisma } from "blitz"
import { PrismaClient } from "@root/db"

const EnhancedPrisma = enhancePrisma(PrismaClient)

interface EnhancedPrismaClientAddedMethods {
  $reset: () => Promise<void>
}

const db = new EnhancedPrisma() as InstanceType<typeof PrismaClient> &
  EnhancedPrismaClientAddedMethods

export default db
