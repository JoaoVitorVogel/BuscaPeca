import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createBrands() {
  await prisma.brand.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      enumerator: 'Acura',
    },
  });

  await prisma.brand.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      enumerator: 'Agrale',
    },
  });

  await prisma.brand.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      enumerator: 'Alfa Romeo',
    },
  });

  await prisma.brand.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      enumerator: 'AM Gen',
    },
  });

  await prisma.brand.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      enumerator: 'Asia Motors',
    },
  });

  await prisma.brand.upsert({
    where: { id: 189 },
    update: {},
    create: {
      id: 189,
      enumerator: 'ASTON MARTIN',
    },
  });

  await prisma.brand.upsert({
    where: { id: 6 },
    update: {},
    create: {
      id: 6,
      enumerator: 'Audi',
    },
  });

  await prisma.brand.upsert({
    where: { id: 207 },
    update: {},
    create: {
      id: 207,
      enumerator: 'Baby',
    },
  });

  await prisma.brand.upsert({
    where: { id: 7 },
    update: {},
    create: {
      id: 7,
      enumerator: 'BMW',
    },
  });

  await prisma.brand.upsert({
    where: { id: 8 },
    update: {},
    create: {
      id: 8,
      enumerator: 'BRM',
    },
  });

  await prisma.brand.upsert({
    where: { id: 123 },
    update: {},
    create: {
      id: 123,
      enumerator: 'Bugre',
    },
  });

  await prisma.brand.upsert({
    where: { id: 238 },
    update: {},
    create: {
      id: 238,
      enumerator: 'BYD',
    },
  });

  await prisma.brand.upsert({
    where: { id: 236 },
    update: {},
    create: {
      id: 236,
      enumerator: 'CAB Motors',
    },
  });

  await prisma.brand.upsert({
    where: { id: 10 },
    update: {},
    create: {
      id: 10,
      enumerator: 'Cadillac',
    },
  });

  await prisma.brand.upsert({
    where: { id: 245 },
    update: {},
    create: {
      id: 245,
      enumerator: 'Caoa Chery',
    },
  });

  await prisma.brand.upsert({
    where: { id: 161 },
    update: {},
    create: {
      id: 161,
      enumerator: 'Caoa Chery/Chery',
    },
  });

  await prisma.brand.upsert({
    where: { id: 11 },
    update: {},
    create: {
      id: 11,
      enumerator: 'CBT Jipe',
    },
  });

  await prisma.brand.upsert({
    where: { id: 136 },
    update: {},
    create: {
      id: 136,
      enumerator: 'CHANA',
    },
  });

  await prisma.brand.upsert({
    where: { id: 182 },
    update: {},
    create: {
      id: 182,
      enumerator: 'CHANGAN',
    },
  });

  await prisma.brand.upsert({
    where: { id: 12 },
    update: {},
    create: {
      id: 12,
      enumerator: 'Chrysler',
    },
  });

  await prisma.brand.upsert({
    where: { id: 13 },
    update: {},
    create: {
      id: 13,
      enumerator: 'Citroën',
    },
  });

  await prisma.brand.upsert({
    where: { id: 14 },
    update: {},
    create: {
      id: 14,
      enumerator: 'Cross Lander',
    },
  });

  await prisma.brand.upsert({
    where: { id: 241 },
    update: {},
    create: {
      id: 241,
      enumerator: 'D2D Motors',
    },
  });

  await prisma.brand.upsert({
    where: { id: 15 },
    update: {},
    create: {
      id: 15,
      enumerator: 'Daewoo',
    },
  });

  await prisma.brand.upsert({
    where: { id: 16 },
    update: {},
    create: {
      id: 16,
      enumerator: 'Daihatsu',
    },
  });

  await prisma.brand.upsert({
    where: { id: 246 },
    update: {},
    create: {
      id: 246,
      enumerator: 'DFSK',
    },
  });

  await prisma.brand.upsert({
    where: { id: 17 },
    update: {},
    create: {
      id: 17,
      enumerator: 'Dodge',
    },
  });

  await prisma.brand.upsert({
    where: { id: 147 },
    update: {},
    create: {
      id: 147,
      enumerator: 'EFFA',
    },
  });

  await prisma.brand.upsert({
    where: { id: 18 },
    update: {},
    create: {
      id: 18,
      enumerator: 'Engesa',
    },
  });

  await prisma.brand.upsert({
    where: { id: 19 },
    update: {},
    create: {
      id: 19,
      enumerator: 'Envemo',
    },
  });

  await prisma.brand.upsert({
    where: { id: 20 },
    update: {},
    create: {
      id: 20,
      enumerator: 'Ferrari',
    },
  });

  await prisma.brand.upsert({
    where: { id: 21 },
    update: {},
    create: {
      id: 21,
      enumerator: 'Fiat',
    },
  });

  await prisma.brand.upsert({
    where: { id: 149 },
    update: {},
    create: {
      id: 149,
      enumerator: 'Fibravan',
    },
  });

  await prisma.brand.upsert({
    where: { id: 22 },
    update: {},
    create: {
      id: 22,
      enumerator: 'Ford',
    },
  });

  await prisma.brand.upsert({
    where: { id: 190 },
    update: {},
    create: {
      id: 190,
      enumerator: 'FOTON',
    },
  });

  await prisma.brand.upsert({
    where: { id: 170 },
    update: {},
    create: {
      id: 170,
      enumerator: 'Fyber',
    },
  });

  await prisma.brand.upsert({
    where: { id: 199 },
    update: {},
    create: {
      id: 199,
      enumerator: 'GEELY',
    },
  });

  await prisma.brand.upsert({
    where: { id: 23 },
    update: {},
    create: {
      id: 23,
      enumerator: 'GM - Chevrolet',
    },
  });

  await prisma.brand.upsert({
    where: { id: 153 },
    update: {},
    create: {
      id: 153,
      enumerator: 'GREAT WALL',
    },
  });

  await prisma.brand.upsert({
    where: { id: 24 },
    update: {},
    create: {
      id: 24,
      enumerator: 'Gurgel',
    },
  });

  await prisma.brand.upsert({
    where: { id: 240 },
    update: {},
    create: {
      id: 240,
      enumerator: 'GWM',
    },
  });

  await prisma.brand.upsert({
    where: { id: 152 },
    update: {},
    create: {
      id: 152,
      enumerator: 'HAFEI',
    },
  });

  await prisma.brand.upsert({
    where: { id: 214 },
    update: {},
    create: {
      id: 214,
      enumerator: 'HITECH ELECTRIC',
    },
  });

  await prisma.brand.upsert({
    where: { id: 25 },
    update: {},
    create: {
      id: 25,
      enumerator: 'Honda',
    },
  });

  await prisma.brand.upsert({
    where: { id: 26 },
    update: {},
    create: {
      id: 26,
      enumerator: 'Hyundai',
    },
  });

  await prisma.brand.upsert({
    where: { id: 27 },
    update: {},
    create: {
      id: 27,
      enumerator: 'Isuzu',
    },
  });

  await prisma.brand.upsert({
    where: { id: 208 },
    update: {},
    create: {
      id: 208,
      enumerator: 'IVECO',
    },
  });

  await prisma.brand.upsert({
    where: { id: 177 },
    update: {},
    create: {
      id: 177,
      enumerator: 'JAC',
    },
  });

  await prisma.brand.upsert({
    where: { id: 28 },
    update: {},
    create: {
      id: 28,
      enumerator: 'Jaguar',
    },
  });

  await prisma.brand.upsert({
    where: { id: 29 },
    update: {},
    create: {
      id: 29,
      enumerator: 'Jeep',
    },
  });

  await prisma.brand.upsert({
    where: { id: 154 },
    update: {},
    create: {
      id: 154,
      enumerator: 'JINBEI',
    },
  });

  await prisma.brand.upsert({
    where: { id: 30 },
    update: {},
    create: {
      id: 30,
      enumerator: 'JPX',
    },
  });

  await prisma.brand.upsert({
    where: { id: 31 },
    update: {},
    create: {
      id: 31,
      enumerator: 'Kia Motors',
    },
  });

  await prisma.brand.upsert({
    where: { id: 32 },
    update: {},
    create: {
      id: 32,
      enumerator: 'Lada',
    },
  });

  await prisma.brand.upsert({
    where: { id: 171 },
    update: {},
    create: {
      id: 171,
      enumerator: 'LAMBORGHINI',
    },
  });

  await prisma.brand.upsert({
    where: { id: 33 },
    update: {},
    create: {
      id: 33,
      enumerator: 'Land Rover',
    },
  });

  await prisma.brand.upsert({
    where: { id: 34 },
    update: {},
    create: {
      id: 34,
      enumerator: 'Lexus',
    },
  });

  await prisma.brand.upsert({
    where: { id: 168 },
    update: {},
    create: {
      id: 168,
      enumerator: 'LIFAN',
    },
  });

  await prisma.brand.upsert({
    where: { id: 127 },
    update: {},
    create: {
      id: 127,
      enumerator: 'LOBINI',
    },
  });

  await prisma.brand.upsert({
    where: { id: 35 },
    update: {},
    create: {
      id: 35,
      enumerator: 'Lotus',
    },
  });

  await prisma.brand.upsert({
    where: { id: 140 },
    update: {},
    create: {
      id: 140,
      enumerator: 'Mahindra',
    },
  });

  await prisma.brand.upsert({
    where: { id: 36 },
    update: {},
    create: {
      id: 36,
      enumerator: 'Maserati',
    },
  });

  await prisma.brand.upsert({
    where: { id: 37 },
    update: {},
    create: {
      id: 37,
      enumerator: 'Matra',
    },
  });

  await prisma.brand.upsert({
    where: { id: 38 },
    update: {},
    create: {
      id: 38,
      enumerator: 'Mazda',
    },
  });

  await prisma.brand.upsert({
    where: { id: 211 },
    update: {},
    create: {
      id: 211,
      enumerator: 'Mclaren',
    },
  });

  await prisma.brand.upsert({
    where: { id: 39 },
    update: {},
    create: {
      id: 39,
      enumerator: 'Mercedes-Benz',
    },
  });

  await prisma.brand.upsert({
    where: { id: 40 },
    update: {},
    create: {
      id: 40,
      enumerator: 'Mercury',
    },
  });

  await prisma.brand.upsert({
    where: { id: 167 },
    update: {},
    create: {
      id: 167,
      enumerator: 'MG',
    },
  });

  await prisma.brand.upsert({
    where: { id: 156 },
    update: {},
    create: {
      id: 156,
      enumerator: 'MINI',
    },
  });

  await prisma.brand.upsert({
    where: { id: 41 },
    update: {},
    create: {
      id: 41,
      enumerator: 'Mitsubishi',
    },
  });

  await prisma.brand.upsert({
    where: { id: 42 },
    update: {},
    create: {
      id: 42,
      enumerator: 'Miura',
    },
  });

  await prisma.brand.upsert({
    where: { id: 43 },
    update: {},
    create: {
      id: 43,
      enumerator: 'Nissan',
    },
  });

  await prisma.brand.upsert({
    where: { id: 44 },
    update: {},
    create: {
      id: 44,
      enumerator: 'Peugeot',
    },
  });

  await prisma.brand.upsert({
    where: { id: 45 },
    update: {},
    create: {
      id: 45,
      enumerator: 'Plymouth',
    },
  });

  await prisma.brand.upsert({
    where: { id: 46 },
    update: {},
    create: {
      id: 46,
      enumerator: 'Pontiac',
    },
  });

  await prisma.brand.upsert({
    where: { id: 47 },
    update: {},
    create: {
      id: 47,
      enumerator: 'Porsche',
    },
  });

  await prisma.brand.upsert({
    where: { id: 185 },
    update: {},
    create: {
      id: 185,
      enumerator: 'RAM',
    },
  });

  await prisma.brand.upsert({
    where: { id: 186 },
    update: {},
    create: {
      id: 186,
      enumerator: 'RELY',
    },
  });

  await prisma.brand.upsert({
    where: { id: 48 },
    update: {},
    create: {
      id: 48,
      enumerator: 'Renault',
    },
  });

  await prisma.brand.upsert({
    where: { id: 195 },
    update: {},
    create: {
      id: 195,
      enumerator: 'Rolls-Royce',
    },
  });

  await prisma.brand.upsert({
    where: { id: 49 },
    update: {},
    create: {
      id: 49,
      enumerator: 'Rover',
    },
  });

  await prisma.brand.upsert({
    where: { id: 50 },
    update: {},
    create: {
      id: 50,
      enumerator: 'Saab',
    },
  });

  await prisma.brand.upsert({
    where: { id: 51 },
    update: {},
    create: {
      id: 51,
      enumerator: 'Saturn',
    },
  });

  await prisma.brand.upsert({
    where: { id: 52 },
    update: {},
    create: {
      id: 52,
      enumerator: 'Seat',
    },
  });

  await prisma.brand.upsert({
    where: { id: 247 },
    update: {},
    create: {
      id: 247,
      enumerator: 'SERES',
    },
  });

  await prisma.brand.upsert({
    where: { id: 183 },
    update: {},
    create: {
      id: 183,
      enumerator: 'SHINERAY',
    },
  });

  await prisma.brand.upsert({
    where: { id: 157 },
    update: {},
    create: {
      id: 157,
      enumerator: 'smart',
    },
  });

  await prisma.brand.upsert({
    where: { id: 125 },
    update: {},
    create: {
      id: 125,
      enumerator: 'SSANGYONG',
    },
  });

  await prisma.brand.upsert({
    where: { id: 54 },
    update: {},
    create: {
      id: 54,
      enumerator: 'Subaru',
    },
  });

  await prisma.brand.upsert({
    where: { id: 55 },
    update: {},
    create: {
      id: 55,
      enumerator: 'Suzuki',
    },
  });

  await prisma.brand.upsert({
    where: { id: 165 },
    update: {},
    create: {
      id: 165,
      enumerator: 'TAC',
    },
  });

  await prisma.brand.upsert({
    where: { id: 56 },
    update: {},
    create: {
      id: 56,
      enumerator: 'Toyota',
    },
  });

  await prisma.brand.upsert({
    where: { id: 57 },
    update: {},
    create: {
      id: 57,
      enumerator: 'Troller',
    },
  });

  await prisma.brand.upsert({
    where: { id: 58 },
    update: {},
    create: {
      id: 58,
      enumerator: 'Volvo',
    },
  });

  await prisma.brand.upsert({
    where: { id: 59 },
    update: {},
    create: {
      id: 59,
      enumerator: 'VW - VolksWagen',
    },
  });

  await prisma.brand.upsert({
    where: { id: 163 },
    update: {},
    create: {
      id: 163,
      enumerator: 'Wake',
    },
  });

  await prisma.brand.upsert({
    where: { id: 120 },
    update: {},
    create: {
      id: 120,
      enumerator: 'Walk',
    },
  });

  console.log('Brands created');
}
