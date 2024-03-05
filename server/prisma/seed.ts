import { PrismaService } from '../src/prisma/prisma.service';
import { Role } from '@prisma/client';
import { faker } from '@faker-js/faker';
// import dotenv from 'dotenv';
import hashPassword from '../src/utils/hashPassword';

// dotenv.config();

const prisma = new PrismaService();

interface User {
  name: string;
  username: string;
  password: string;
  role: Role;
}

interface Medicine {
  name: string;
  description: string;
  quantity: number;
}

interface Customer {
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
}

const generateUsers = async (num: number): Promise<void> => {
  for (let i = 0; i < num; i++) {
    const user: User = {
      name: faker.person.fullName(),
      username: faker.internet.userName(),
      password: await hashPassword('pass1234'),
      role: faker.helpers.arrayElement(['manager', 'cashier']),
    };
    await prisma.user.create({ data: user });
  }
};

const generateOwner = async (): Promise<void> => {
  const owner: User = {
    name: 'Grey Boolean',
    username: 'greyboolean',
    password: await hashPassword('pass1234'),
    role: 'owner',
  };
  await prisma.user.create({ data: owner });
};

const generateMedicines = async (num: number): Promise<void> => {
  for (let i = 0; i < num; i++) {
    const medicine: Medicine = {
      name: faker.commerce.productName(),
      description: faker.lorem.sentence(),
      quantity: parseInt(faker.string.numeric()),
    };
    await prisma.medicine.create({ data: medicine });
  }
};

const generateCustomers = async (num: number): Promise<void> => {
  for (let i = 0; i < num; i++) {
    const customer: Customer = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      address: faker.location.streetAddress(),
      phoneNumber: faker.phone.number(),
    };
    await prisma.customer.create({ data: customer });
  }
};

const generateData = async (num: number): Promise<void> => {
  console.log('Generating data...');
  await Promise.all([
    generateUsers(num),
    generateMedicines(num),
    generateCustomers(num),
  ]);
  await generateOwner();
  console.log('Data generation completed.');
};

const deleteData = async (): Promise<void> => {
  console.log('Deleting data...');
  await Promise.all([
    prisma.user.deleteMany(),
    prisma.medicine.deleteMany(),
    prisma.customer.deleteMany(),
  ]);
  // Reset sequences
  await prisma.$executeRaw`ALTER SEQUENCE "User_id_seq" RESTART WITH 1;`;
  await prisma.$executeRaw`ALTER SEQUENCE "Medicine_id_seq" RESTART WITH 1;`;
  await prisma.$executeRaw`ALTER SEQUENCE "Customer_id_seq" RESTART WITH 1;`;
  console.log('Data deleted.');
};

const command: string = process.argv[2];
const num: number = parseInt(process.argv[3]) || 5;

if (command === 'generate') {
  generateData(num);
} else if (command === 'delete') {
  deleteData();
} else {
  console.log('Invalid command. Use "generate" or "delete".');
}

prisma.$disconnect();
