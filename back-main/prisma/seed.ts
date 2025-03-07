import { PrismaClient } from '@prisma/client';
import { hash } from '../src/Security';
import { createModels } from './insertModels';
import { createPartTypes } from './insertPartTypes';
import { createBrands } from './insertBrands';

const prisma = new PrismaClient();

async function main() {
  await createRoles();

  await createUsers();

  await createBrands();

  await createModels();

  await createPartStatus();

  await createPartTypes();

  // await createCars();

  // await createParts();
}

async function createRoles() {
  await prisma.role.upsert({
    where: { id: 1, enumerator: 'admin' },
    update: {},
    create: { enumerator: 'admin' },
  });
  await prisma.role.upsert({
    where: { id: 2, enumerator: 'seller' },
    update: {},
    create: { enumerator: 'seller' },
  });

  await prisma.role.upsert({
    where: { id: 3, enumerator: 'buyer' },
    update: {},
    create: { enumerator: 'buyer' },
  });

  console.log('Roles inserted successfully');
}

async function createUsers() {
  await prisma.user.upsert({
    where: { email: 'admin@email.com' },
    update: {},
    create: {
      username: 'admin',
      email: 'admin@email.com',
      password: await hash('admin'),
      document_number: '12345678900',
      role_id: 1,
    },
  });

  await prisma.user.upsert({
    where: { email: 'user@email.com' },
    update: {},
    create: {
      username: 'user',
      email: 'user@email.com',
      password: await hash('user'),
      document_number: '12345678901',
      role_id: 2,
    },
  });

  await prisma.user.upsert({
    where: { email: 'seller.user@email.com' },
    update: {},
    create: {
      username: 'seller.user',
      email: 'seller.user@email.com',
      password: await hash('seller.user'),
      document_number: '12345678903',
      role_id: 2,
    },
  });

  await prisma.user.upsert({
    where: { email: 'buyer.user@email.com' },
    update: {},
    create: {
      username: 'buyer.user',
      email: 'buyer.user@email.com',
      password: await hash('buyer.user'),
      document_number: '12345678902',
      role_id: 3,
    },
  });

  await prisma.user.upsert({
    where: { email: 'other.seller.user@email.com' },
    update: {},
    create: {
      username: 'other.seller.user',
      email: 'other.seller.user@email.com',
      password: await hash('other.seller.'),
      document_number: '12345678904',
      role_id: 2,
    },
  });

  await prisma.user.upsert({
    where: { email: 'other.buyer.user@email.com' },
    update: {},
    create: {
      username: 'other.buyer.user',
      email: 'other.buyer.user@email.com',
      password: 'other.buyer.user',
      document_number: '12345678905',
      role_id: 3,
    },
  });

  await prisma.seller.upsert({
    where: { user_id: 3 },
    update: {},
    create: {
      user_id: 3,
      seller_code: '12345678903',
      company_name: 'Seller Company',
      trading_name: 'Seller Trading Name',
      document_number: '12345678903',
      email: 'seller.company@email.com',
      phone_country_code: '55',
      phone_area_code: '11',
      phone_number: '999999999',
      street: 'Seller Street',
      neighborhood: 'Seller Neighborhood',
      number: '123',
      city: 'Seller City',
      state: 'SP',
      complement: 'Seller Complement',
      postal_code: '12345678',
    },
  });

  await prisma.buyer.upsert({
    where: { user_id: 4 },
    update: {},
    create: {
      user_id: 4,
      company_name: 'Buyer Company',
      trading_name: 'Buyer Trading Name',
      document_number: '12345678902',
      email: 'buyer.company@email.com',
      phone_country_code: '55',
      phone_area_code: '11',
      phone_number: '999999999',
      street: 'Buyer Street',
      neighborhood: 'Buyer Neighborhood',
      number: '123',
      city: 'Buyer City',
      state: 'SP',
      complement: 'Buyer Complement',
      postal_code: '12345678',
    },
  });

  await prisma.seller.upsert({
    where: { user_id: 5 },
    update: {},
    create: {
      user_id: 5,
      seller_code: '12345678904',
      company_name: 'Other Seller Company',
      trading_name: 'Other Seller Trading Name',
      document_number: '12345678904',
      email: 'other.seler.company@email.com',
      phone_country_code: '55',
      phone_area_code: '11',
      phone_number: '999999999',
      street: 'Other Seller Street',
      neighborhood: 'Other Seller Neighborhood',
      number: '123',
      city: 'Other Seller City',
      state: 'SP',
      complement: 'Other Seller Complement',
      postal_code: '12345678',
    },
  });

  await prisma.buyer.upsert({
    where: { user_id: 6 },
    update: {},
    create: {
      user_id: 6,
      company_name: 'Other Buyer Company',
      trading_name: 'Other Buyer Trading Name',
      document_number: '12345678905',
      email: 'other.buyer.company@email.com',
      phone_country_code: '55',
      phone_area_code: '11',
      phone_number: '999999999',
      street: 'Other Buyer Street',
      neighborhood: 'Other Buyer Neighborhood',
      number: '123',
      city: 'Other Buyer City',
      state: 'SP',
      complement: 'Other Buyer Complement',
      postal_code: '12345678',
    },
  });

  console.log('Users inserted successfully');
}

async function createCars() {
  await prisma.car.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      seller_id: 3,
      model_id: 1001,
      release_year: new Date('2021-01-01'),
      cost: 50000,
      purchase_date: new Date('2021-01-01'),
    },
  });

  await prisma.car.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      seller_id: 3,
      model_id: 1002,
      release_year: new Date('2021-01-01'),
      cost: 70000,
      purchase_date: new Date('2021-01-01'),
    },
  });

  await prisma.car.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      seller_id: 3,
      model_id: 1003,
      release_year: new Date('2021-01-01'),
      cost: 90000,
      purchase_date: new Date('2021-01-01'),
    },
  });

  await prisma.car.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      seller_id: 3,
      model_id: 2001,
      release_year: new Date('2021-01-01'),
      cost: 100000,
      purchase_date: new Date('2021-01-01'),
    },
  });

  await prisma.car.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      seller_id: 5,
      model_id: 2002,
      release_year: new Date('2021-01-01'),
      cost: 120000,
      purchase_date: new Date('2021-01-01'),
    },
  });

  await prisma.car.upsert({
    where: { id: 6 },
    update: {},
    create: {
      id: 6,
      seller_id: 5,
      model_id: 2003,
      release_year: new Date('2021-01-01'),
      cost: 150000,
      purchase_date: new Date('2021-01-01'),
    },
  });

  await prisma.car.upsert({
    where: { id: 7 },
    update: {},
    create: {
      id: 7,
      seller_id: 5,
      model_id: 56016,
      release_year: new Date('2021-01-01'),
      cost: 180000,
      purchase_date: new Date('2021-01-01'),
    },
  });

  await prisma.car.upsert({
    where: { id: 8 },
    update: {},
    create: {
      id: 8,
      seller_id: 5,
      model_id: 59202,
      release_year: new Date('2021-01-01'),
      cost: 200000,
      purchase_date: new Date('2021-01-01'),
    },
  });

  await prisma.car.upsert({
    where: { id: 9 },
    update: {},
    create: {
      id: 9,
      seller_id: 5,
      model_id: 163001,
      release_year: new Date('2021-01-01'),
      cost: 250000,
      purchase_date: new Date('2021-01-01'),
    },
  });

  await prisma.car.upsert({
    where: { id: 10 },
    update: {},
    create: {
      id: 10,
      seller_id: 5,
      model_id: 59538,
      release_year: new Date('2021-01-01'),
      cost: 300000,
      purchase_date: new Date('2021-01-01'),
    },
  });

  console.log('Cars inserted successfully');
}

async function createPartStatus() {
  await prisma.partStatus.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      enumerator: 'available',
    },
  });

  await prisma.partStatus.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      enumerator: 'ordered',
    },
  });

  await prisma.partStatus.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      enumerator: 'sold',
    },
  });

  console.log('Part status inserted successfully');
}

async function createParts() {
  await prisma.part.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      car_id: 1,
      part_status_id: 1,
      part_type_id: 1,
      description: 'Engine',
      price: 10000,
    },
  });

  await prisma.part.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      car_id: 2,
      part_status_id: 1,
      part_type_id: 2,
      description: 'Gearbox',
      price: 15000,
    },
  });

  await prisma.part.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      car_id: 3,
      part_status_id: 1,
      part_type_id: 3,
      description: 'Suspension',
      price: 20000,
    },
  });

  await prisma.part.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      car_id: 4,
      part_status_id: 1,
      part_type_id: 4,
      description: 'Brake',
      price: 25000,
    },
  });

  await prisma.part.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      car_id: 5,
      part_status_id: 1,
      part_type_id: 5,
      description: 'Wheel',
      price: 30000,
    },
  });

  await prisma.part.upsert({
    where: { id: 6 },
    update: {},
    create: {
      id: 6,
      car_id: 6,
      part_status_id: 1,
      part_type_id: 6,
      description: 'Tire',
      price: 35000,
    },
  });

  await prisma.part.upsert({
    where: { id: 7 },
    update: {},
    create: {
      id: 7,
      car_id: 7,
      part_status_id: 1,
      part_type_id: 7,
      description: 'Battery',
      price: 40000,
    },
  });

  await prisma.part.upsert({
    where: { id: 8 },
    update: {},
    create: {
      id: 8,
      car_id: 8,
      part_status_id: 1,
      part_type_id: 8,
      description: 'Exhaust',
      price: 45000,
    },
  });

  await prisma.part.upsert({
    where: { id: 9 },
    update: {},
    create: {
      id: 9,
      car_id: 9,
      part_status_id: 1,
      part_type_id: 9,
      description: 'Electrical',
      price: 50000,
    },
  });

  await prisma.part.upsert({
    where: { id: 10 },
    update: {},
    create: {
      id: 10,
      car_id: 10,
      part_status_id: 1,
      part_type_id: 10,
      description: 'Cooling',
      price: 55000,
    },
  });

  await prisma.part.upsert({
    where: { id: 11 },
    update: {},
    create: {
      id: 11,
      car_id: 1,
      part_status_id: 1,
      part_type_id: 11,
      description: 'Fuel',
      price: 60000,
    },
  });

  await prisma.part.upsert({
    where: { id: 12 },
    update: {},
    create: {
      id: 12,
      car_id: 2,
      part_status_id: 1,
      part_type_id: 12,
      description: 'Air Conditioning',
      price: 65000,
    },
  });

  await prisma.part.upsert({
    where: { id: 13 },
    update: {},
    create: {
      id: 13,
      car_id: 3,
      part_status_id: 1,
      part_type_id: 13,
      description: 'Interior',
      price: 70000,
    },
  });

  await prisma.part.upsert({
    where: { id: 14 },
    update: {},
    create: {
      id: 14,
      car_id: 4,
      part_status_id: 1,
      part_type_id: 14,
      description: 'Exterior',
      price: 75000,
    },
  });

  await prisma.part.upsert({
    where: { id: 15 },
    update: {},
    create: {
      id: 15,
      car_id: 5,
      part_status_id: 1,
      part_type_id: 15,
      description: 'Glass',
      price: 80000,
    },
  });

  await prisma.part.upsert({
    where: { id: 16 },
    update: {},
    create: {
      id: 16,
      car_id: 6,
      part_status_id: 1,
      part_type_id: 16,
      description: 'Accessory',
      price: 85000,
    },
  });

  console.log('Parts inserted successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
