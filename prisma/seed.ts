import { PrismaClient, UserRole } from '@prisma/client';
import { hashSync } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: 'admin@hospicenter.local' },
    update: {},
    create: {
      name: 'Administrador',
      email: 'admin@hospicenter.local',
      passwordHash: hashSync('Admin@123456', 10),
      role: UserRole.ADMIN,
    },
  });
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
