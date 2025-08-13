import { PrismaClient } from "@prisma/client"
// Ensure this file is only used on the server in Next.js, but allow CLI scripts to run without the module present
try {
  // eslint-disable-next-line
  require('server-only')
} catch {
  // running in a non-Next CLI context (e.g., tsx scripts). Safe to ignore.
}

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient
}

export let prisma: PrismaClient
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient()
  }
  prisma = global.cachedPrisma
}
