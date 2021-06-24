import db from "@root/db";

console.log(await db.user.findMany())

process.exit(0);