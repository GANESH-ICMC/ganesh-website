import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('☀️😎日本語☀️😎日本語', 10); // Hash the password

  const user = await prisma.user.upsert({
    where: { email: 'shogoshima@usp.br' },
    update: {},
    create: {
      email: 'shogoshima@usp.br',
      password: hashedPassword,
    },
  });

  console.log('Seeded user:', user);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
