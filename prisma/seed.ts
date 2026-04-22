import { PrismaClient, UserRole } from '@prisma/client';
import { hashSync } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'admin@hospicenter.local' },
    update: {
      name: 'Admin Hospicenter',
      role: UserRole.ADMIN,
      isActive: true,
    },
    create: {
      name: 'Admin Hospicenter',
      email: 'admin@hospicenter.local',
      passwordHash: hashSync('Admin@123456', 10),
      role: UserRole.ADMIN,
      isActive: true,
    },
  });

  await prisma.user.upsert({
    where: { email: 'analista1@hospicenter.local' },
    update: {
      name: 'Analista E-commerce 1',
      role: UserRole.USER,
      isActive: true,
      updatedById: admin.id,
    },
    create: {
      name: 'Analista E-commerce 1',
      email: 'analista1@hospicenter.local',
      passwordHash: hashSync('User@123456', 10),
      role: UserRole.USER,
      isActive: true,
      createdById: admin.id,
      updatedById: admin.id,
    },
  });

  await prisma.user.upsert({
    where: { email: 'analista2@hospicenter.local' },
    update: {
      name: 'Analista E-commerce 2',
      role: UserRole.USER,
      isActive: true,
      updatedById: admin.id,
    },
    create: {
      name: 'Analista E-commerce 2',
      email: 'analista2@hospicenter.local',
      passwordHash: hashSync('User@123456', 10),
      role: UserRole.USER,
      isActive: true,
      createdById: admin.id,
      updatedById: admin.id,
    },
  });

  const channels = [
    { name: 'Hospicenter', slug: 'hospicenter' },
    { name: 'Vias Aéreas', slug: 'vias-aereas' },
    { name: 'Mercado Livre', slug: 'mercado-livre' },
  ];

  for (const channel of channels) {
    await prisma.channel.upsert({
      where: { slug: channel.slug },
      update: {
        name: channel.name,
        isActive: true,
        updatedById: admin.id,
      },
      create: {
        name: channel.name,
        slug: channel.slug,
        isActive: true,
        createdById: admin.id,
        updatedById: admin.id,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error('Seed error:', error);
    await prisma.$disconnect();
    process.exit(1);
  });
