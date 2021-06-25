/**
 * Client should be moved to a seperate file when needed in multiple files
 * to avoid creating multiple clients
 */

import { PrismaClient } from '@root/db';

const db = new PrismaClient();

console.log(await db.user.findMany());

process.exit(0);
