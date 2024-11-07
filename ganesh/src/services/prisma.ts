// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// Evite múltiplas instâncias de PrismaClient durante o desenvolvimento
let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

export default prisma;