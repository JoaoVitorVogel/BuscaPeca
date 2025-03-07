import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createPartTypes() {
  await prisma.partType.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      enumerator: 'Abraçadeira',
    },
  });

  await prisma.partType.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      enumerator: 'Absorvedor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      enumerator: 'Acendedor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      enumerator: 'Acoplamento Viscoso',
    },
  });

  await prisma.partType.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      enumerator: 'Acoplamento Viscoso (4x4)',
    },
  });

  await prisma.partType.upsert({
    where: { id: 6 },
    update: {},
    create: {
      id: 6,
      enumerator: 'Adaptador',
    },
  });

  await prisma.partType.upsert({
    where: { id: 7 },
    update: {},
    create: {
      id: 7,
      enumerator: 'Agregado Suspensão',
    },
  });

  await prisma.partType.upsert({
    where: { id: 8 },
    update: {},
    create: {
      id: 8,
      enumerator: 'Ajustador',
    },
  });

  await prisma.partType.upsert({
    where: { id: 9 },
    update: {},
    create: {
      id: 9,
      enumerator: 'Alavanca',
    },
  });

  await prisma.partType.upsert({
    where: { id: 10 },
    update: {},
    create: {
      id: 10,
      enumerator: 'Alça',
    },
  });

  await prisma.partType.upsert({
    where: { id: 11 },
    update: {},
    create: {
      id: 11,
      enumerator: 'Alma Para-choque Dianteiro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 12 },
    update: {},
    create: {
      id: 12,
      enumerator: 'Alma Para-choque Traseiro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 13 },
    update: {},
    create: {
      id: 13,
      enumerator: 'Alternador',
    },
  });

  await prisma.partType.upsert({
    where: { id: 14 },
    update: {},
    create: {
      id: 14,
      enumerator: 'Apara Barro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 15 },
    update: {},
    create: {
      id: 15,
      enumerator: 'Apoio Braço',
    },
  });

  await prisma.partType.upsert({
    where: { id: 16 },
    update: {},
    create: {
      id: 16,
      enumerator: 'Bagageiro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 17 },
    update: {},
    create: {
      id: 17,
      enumerator: 'Balancim',
    },
  });

  await prisma.partType.upsert({
    where: { id: 18 },
    update: {},
    create: {
      id: 18,
      enumerator: 'Banco',
    },
  });

  await prisma.partType.upsert({
    where: { id: 19 },
    update: {},
    create: {
      id: 19,
      enumerator: 'Banco Dianteiro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 20 },
    update: {},
    create: {
      id: 20,
      enumerator: 'Banco Dianteiro Direito',
    },
  });

  await prisma.partType.upsert({
    where: { id: 21 },
    update: {},
    create: {
      id: 21,
      enumerator: 'Banco Dianteiro Esquerdo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 22 },
    update: {},
    create: {
      id: 22,
      enumerator: 'Amortecedor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 23 },
    update: {},
    create: {
      id: 23,
      enumerator: 'Banco Traseiro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 24 },
    update: {},
    create: {
      id: 24,
      enumerator: 'Alto-falante',
    },
  });

  await prisma.partType.upsert({
    where: { id: 25 },
    update: {},
    create: {
      id: 25,
      enumerator: 'Anel',
    },
  });

  await prisma.partType.upsert({
    where: { id: 26 },
    update: {},
    create: {
      id: 26,
      enumerator: 'Antena',
    },
  });

  await prisma.partType.upsert({
    where: { id: 27 },
    update: {},
    create: {
      id: 27,
      enumerator: 'Caixa Transferencia (4x4)',
    },
  });

  await prisma.partType.upsert({
    where: { id: 28 },
    update: {},
    create: {
      id: 28,
      enumerator: 'Coifa',
    },
  });

  await prisma.partType.upsert({
    where: { id: 29 },
    update: {},
    create: {
      id: 29,
      enumerator: 'Compartimento Filtro Ar',
    },
  });

  await prisma.partType.upsert({
    where: { id: 30 },
    update: {},
    create: {
      id: 30,
      enumerator: 'Cuica Freio',
    },
  });

  await prisma.partType.upsert({
    where: { id: 31 },
    update: {},
    create: {
      id: 31,
      enumerator: 'Defletor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 32 },
    update: {},
    create: {
      id: 32,
      enumerator: 'Diferencial Dianteiro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 33 },
    update: {},
    create: {
      id: 33,
      enumerator: 'Diferencial Traseiro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 34 },
    update: {},
    create: {
      id: 34,
      enumerator: 'Difusor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 35 },
    update: {},
    create: {
      id: 35,
      enumerator: 'Eixo Diferencial Traseiro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 36 },
    update: {},
    create: {
      id: 36,
      enumerator: 'Farol Direito',
    },
  });

  await prisma.partType.upsert({
    where: { id: 37 },
    update: {},
    create: {
      id: 37,
      enumerator: 'Farol Esquerdo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 38 },
    update: {},
    create: {
      id: 38,
      enumerator: 'Farol Neblina Direito',
    },
  });

  await prisma.partType.upsert({
    where: { id: 39 },
    update: {},
    create: {
      id: 39,
      enumerator: 'Bobina Ignição',
    },
  });

  await prisma.partType.upsert({
    where: { id: 40 },
    update: {},
    create: {
      id: 40,
      enumerator: 'Bomba Agua',
    },
  });

  await prisma.partType.upsert({
    where: { id: 41 },
    update: {},
    create: {
      id: 41,
      enumerator: 'Cilindro GNV',
    },
  });

  await prisma.partType.upsert({
    where: { id: 42 },
    update: {},
    create: {
      id: 42,
      enumerator: 'Cinto Segurança',
    },
  });

  await prisma.partType.upsert({
    where: { id: 43 },
    update: {},
    create: {
      id: 43,
      enumerator: 'Compartimento Carga',
    },
  });

  await prisma.partType.upsert({
    where: { id: 44 },
    update: {},
    create: {
      id: 44,
      enumerator: 'Degrau',
    },
  });

  await prisma.partType.upsert({
    where: { id: 45 },
    update: {},
    create: {
      id: 45,
      enumerator: 'Disco Embreagem',
    },
  });

  await prisma.partType.upsert({
    where: { id: 46 },
    update: {},
    create: {
      id: 46,
      enumerator: 'Engate',
    },
  });

  await prisma.partType.upsert({
    where: { id: 47 },
    update: {},
    create: {
      id: 47,
      enumerator: 'Engrenagem',
    },
  });

  await prisma.partType.upsert({
    where: { id: 48 },
    update: {},
    create: {
      id: 48,
      enumerator: 'Esguicho',
    },
  });

  await prisma.partType.upsert({
    where: { id: 49 },
    update: {},
    create: {
      id: 49,
      enumerator: 'Flange',
    },
  });

  await prisma.partType.upsert({
    where: { id: 50 },
    update: {},
    create: {
      id: 50,
      enumerator: 'Assoalho',
    },
  });

  await prisma.partType.upsert({
    where: { id: 51 },
    update: {},
    create: {
      id: 51,
      enumerator: 'Assoalho Dianteiro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 52 },
    update: {},
    create: {
      id: 52,
      enumerator: 'Assoalho Intermediario',
    },
  });

  await prisma.partType.upsert({
    where: { id: 53 },
    update: {},
    create: {
      id: 53,
      enumerator: 'Assoalho Traseiro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 54 },
    update: {},
    create: {
      id: 54,
      enumerator: 'Bomba Direção Hidraulica',
    },
  });

  await prisma.partType.upsert({
    where: { id: 55 },
    update: {},
    create: {
      id: 55,
      enumerator: 'Borracha',
    },
  });

  await prisma.partType.upsert({
    where: { id: 56 },
    update: {},
    create: {
      id: 56,
      enumerator: 'Bucha',
    },
  });

  await prisma.partType.upsert({
    where: { id: 57 },
    update: {},
    create: {
      id: 57,
      enumerator: 'Caixa Direção Hidraulica',
    },
  });

  await prisma.partType.upsert({
    where: { id: 58 },
    update: {},
    create: {
      id: 58,
      enumerator: 'Calha',
    },
  });

  await prisma.partType.upsert({
    where: { id: 59 },
    update: {},
    create: {
      id: 59,
      enumerator: 'Apoio',
    },
  });

  await prisma.partType.upsert({
    where: { id: 60 },
    update: {},
    create: {
      id: 60,
      enumerator: 'Armação Diversa',
    },
  });

  await prisma.partType.upsert({
    where: { id: 61 },
    update: {},
    create: {
      id: 61,
      enumerator: 'Bandeja',
    },
  });

  await prisma.partType.upsert({
    where: { id: 62 },
    update: {},
    create: {
      id: 62,
      enumerator: 'Bandeja Suspensão/Balança',
    },
  });

  await prisma.partType.upsert({
    where: { id: 63 },
    update: {},
    create: {
      id: 63,
      enumerator: 'Bico/Unidade Injetora',
    },
  });

  await prisma.partType.upsert({
    where: { id: 64 },
    update: {},
    create: {
      id: 64,
      enumerator: 'Bojo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 65 },
    update: {},
    create: {
      id: 65,
      enumerator: 'Bomba Injetora Diesel',
    },
  });

  await prisma.partType.upsert({
    where: { id: 66 },
    update: {},
    create: {
      id: 66,
      enumerator: 'Bujão',
    },
  });

  await prisma.partType.upsert({
    where: { id: 67 },
    update: {},
    create: {
      id: 67,
      enumerator: 'Conj. Chassi/Monobloco',
    },
  });

  await prisma.partType.upsert({
    where: { id: 68 },
    update: {},
    create: {
      id: 68,
      enumerator: 'Conj. Eixo Balancins',
    },
  });

  await prisma.partType.upsert({
    where: { id: 69 },
    update: {},
    create: {
      id: 69,
      enumerator: 'Conj. Lanterna Traseira Dir.',
    },
  });

  await prisma.partType.upsert({
    where: { id: 70 },
    update: {},
    create: {
      id: 70,
      enumerator: 'Conj. Lanterna Traseira Esq.',
    },
  });

  await prisma.partType.upsert({
    where: { id: 71 },
    update: {},
    create: {
      id: 71,
      enumerator: 'Conj. Roda',
    },
  });

  await prisma.partType.upsert({
    where: { id: 72 },
    update: {},
    create: {
      id: 72,
      enumerator: 'Conj. Teto Solar',
    },
  });

  await prisma.partType.upsert({
    where: { id: 73 },
    update: {},
    create: {
      id: 73,
      enumerator: 'Kit Airbag',
    },
  });

  await prisma.partType.upsert({
    where: { id: 74 },
    update: {},
    create: {
      id: 74,
      enumerator: 'Rack',
    },
  });

  await prisma.partType.upsert({
    where: { id: 75 },
    update: {},
    create: {
      id: 75,
      enumerator: 'Arruela',
    },
  });

  await prisma.partType.upsert({
    where: { id: 76 },
    update: {},
    create: {
      id: 76,
      enumerator: 'Armação',
    },
  });

  await prisma.partType.upsert({
    where: { id: 77 },
    update: {},
    create: {
      id: 77,
      enumerator: 'Bomba',
    },
  });

  await prisma.partType.upsert({
    where: { id: 78 },
    update: {},
    create: {
      id: 78,
      enumerator: 'Bomba (ABS)',
    },
  });

  await prisma.partType.upsert({
    where: { id: 79 },
    update: {},
    create: {
      id: 79,
      enumerator: 'Bomba Alimentadora Diesel',
    },
  });

  await prisma.partType.upsert({
    where: { id: 80 },
    update: {},
    create: {
      id: 80,
      enumerator: 'Caixa AQ/AC',
    },
  });

  await prisma.partType.upsert({
    where: { id: 81 },
    update: {},
    create: {
      id: 81,
      enumerator: 'Caixa Rodas Dianteira Esquerda',
    },
  });

  await prisma.partType.upsert({
    where: { id: 82 },
    update: {},
    create: {
      id: 82,
      enumerator: 'Caixa Rodas Traseira Esquerda',
    },
  });

  await prisma.partType.upsert({
    where: { id: 83 },
    update: {},
    create: {
      id: 83,
      enumerator: 'Disqueteira',
    },
  });

  await prisma.partType.upsert({
    where: { id: 84 },
    update: {},
    create: {
      id: 84,
      enumerator: 'Estribo Esquerdo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 85 },
    update: {},
    create: {
      id: 85,
      enumerator: 'Farol Neblina Esquerdo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 86 },
    update: {},
    create: {
      id: 86,
      enumerator: 'Bau',
    },
  });

  await prisma.partType.upsert({
    where: { id: 87 },
    update: {},
    create: {
      id: 87,
      enumerator: 'Bomba Eletrica Combustivel',
    },
  });

  await prisma.partType.upsert({
    where: { id: 88 },
    update: {},
    create: {
      id: 88,
      enumerator: 'Bomba Vacuo Diesel',
    },
  });

  await prisma.partType.upsert({
    where: { id: 89 },
    update: {},
    create: {
      id: 89,
      enumerator: 'Biela Diversa',
    },
  });

  await prisma.partType.upsert({
    where: { id: 90 },
    update: {},
    create: {
      id: 90,
      enumerator: 'Boia/Sensor Nivel',
    },
  });

  await prisma.partType.upsert({
    where: { id: 91 },
    update: {},
    create: {
      id: 91,
      enumerator: 'Carcaça Diversa',
    },
  });

  await prisma.partType.upsert({
    where: { id: 92 },
    update: {},
    create: {
      id: 92,
      enumerator: 'Cavalete',
    },
  });

  await prisma.partType.upsert({
    where: { id: 93 },
    update: {},
    create: {
      id: 93,
      enumerator: 'Chave Roda',
    },
  });

  await prisma.partType.upsert({
    where: { id: 94 },
    update: {},
    create: {
      id: 94,
      enumerator: 'Chaveta',
    },
  });

  await prisma.partType.upsert({
    where: { id: 95 },
    update: {},
    create: {
      id: 95,
      enumerator: 'Caixa',
    },
  });

  await prisma.partType.upsert({
    where: { id: 96 },
    update: {},
    create: {
      id: 96,
      enumerator: 'Caixa Cambio',
    },
  });

  await prisma.partType.upsert({
    where: { id: 97 },
    update: {},
    create: {
      id: 97,
      enumerator: 'Caixa Direção',
    },
  });

  await prisma.partType.upsert({
    where: { id: 98 },
    update: {},
    create: {
      id: 98,
      enumerator: 'Caixa Distribuição Diesel',
    },
  });

  await prisma.partType.upsert({
    where: { id: 99 },
    update: {},
    create: {
      id: 99,
      enumerator: 'Caixa Rodas Dianteira Direita',
    },
  });

  await prisma.partType.upsert({
    where: { id: 100 },
    update: {},
    create: {
      id: 100,
      enumerator: 'Barra Estabilizadora',
    },
  });

  await prisma.partType.upsert({
    where: { id: 101 },
    update: {},
    create: {
      id: 101,
      enumerator: 'Buzina',
    },
  });

  await prisma.partType.upsert({
    where: { id: 102 },
    update: {},
    create: {
      id: 102,
      enumerator: 'Cinzeiro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 103 },
    update: {},
    create: {
      id: 103,
      enumerator: 'Comando Limpador/Luzes/Seta',
    },
  });

  await prisma.partType.upsert({
    where: { id: 104 },
    update: {},
    create: {
      id: 104,
      enumerator: 'Cruzeta',
    },
  });

  await prisma.partType.upsert({
    where: { id: 105 },
    update: {},
    create: {
      id: 105,
      enumerator: 'Imobilizador',
    },
  });

  await prisma.partType.upsert({
    where: { id: 106 },
    update: {},
    create: {
      id: 106,
      enumerator: 'Imobilizador.',
    },
  });

  await prisma.partType.upsert({
    where: { id: 107 },
    update: {},
    create: {
      id: 107,
      enumerator: 'Luz',
    },
  });

  await prisma.partType.upsert({
    where: { id: 108 },
    update: {},
    create: {
      id: 108,
      enumerator: 'Medidor Vazão Combustivel',
    },
  });

  await prisma.partType.upsert({
    where: { id: 109 },
    update: {},
    create: {
      id: 109,
      enumerator: 'Trizeta',
    },
  });

  await prisma.partType.upsert({
    where: { id: 110 },
    update: {},
    create: {
      id: 110,
      enumerator: 'Acabamento Diverso',
    },
  });

  await prisma.partType.upsert({
    where: { id: 111 },
    update: {},
    create: {
      id: 111,
      enumerator: 'Cabeçote',
    },
  });

  await prisma.partType.upsert({
    where: { id: 112 },
    update: {},
    create: {
      id: 112,
      enumerator: 'Cabine',
    },
  });

  await prisma.partType.upsert({
    where: { id: 113 },
    update: {},
    create: {
      id: 113,
      enumerator: 'Cabo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 114 },
    update: {},
    create: {
      id: 114,
      enumerator: 'Claraboia Ventilação',
    },
  });

  await prisma.partType.upsert({
    where: { id: 115 },
    update: {},
    create: {
      id: 115,
      enumerator: 'Modulo ABS',
    },
  });

  await prisma.partType.upsert({
    where: { id: 116 },
    update: {},
    create: {
      id: 116,
      enumerator: 'Virabrequim',
    },
  });

  await prisma.partType.upsert({
    where: { id: 117 },
    update: {},
    create: {
      id: 117,
      enumerator: 'Compressor AC',
    },
  });

  await prisma.partType.upsert({
    where: { id: 118 },
    update: {},
    create: {
      id: 118,
      enumerator: 'Condensador AC',
    },
  });

  await prisma.partType.upsert({
    where: { id: 119 },
    update: {},
    create: {
      id: 119,
      enumerator: 'Eletrov. do Condensador AC',
    },
  });

  await prisma.partType.upsert({
    where: { id: 120 },
    update: {},
    create: {
      id: 120,
      enumerator: 'Evaporador AC',
    },
  });

  await prisma.partType.upsert({
    where: { id: 121 },
    update: {},
    create: {
      id: 121,
      enumerator: 'Macaco',
    },
  });

  await prisma.partType.upsert({
    where: { id: 122 },
    update: {},
    create: {
      id: 122,
      enumerator: 'Maq. Acion. Vidro Eletrico',
    },
  });

  await prisma.partType.upsert({
    where: { id: 123 },
    update: {},
    create: {
      id: 123,
      enumerator: 'Carburador',
    },
  });

  await prisma.partType.upsert({
    where: { id: 124 },
    update: {},
    create: {
      id: 124,
      enumerator: 'Catalisador',
    },
  });

  await prisma.partType.upsert({
    where: { id: 125 },
    update: {},
    create: {
      id: 125,
      enumerator: 'Coletor Admissão',
    },
  });

  await prisma.partType.upsert({
    where: { id: 126 },
    update: {},
    create: {
      id: 126,
      enumerator: 'Computador Bordo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 127 },
    update: {},
    create: {
      id: 127,
      enumerator: 'Aerofólio',
    },
  });

  await prisma.partType.upsert({
    where: { id: 128 },
    update: {},
    create: {
      id: 128,
      enumerator: 'Parafuso',
    },
  });

  await prisma.partType.upsert({
    where: { id: 129 },
    update: {},
    create: {
      id: 129,
      enumerator: 'Plato/Diafragma Embreagem',
    },
  });

  await prisma.partType.upsert({
    where: { id: 130 },
    update: {},
    create: {
      id: 130,
      enumerator: 'Tacografo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 131 },
    update: {},
    create: {
      id: 131,
      enumerator: 'Atuador Embreagem',
    },
  });

  await prisma.partType.upsert({
    where: { id: 132 },
    update: {},
    create: {
      id: 132,
      enumerator: 'Polia Eletromagnetica',
    },
  });

  await prisma.partType.upsert({
    where: { id: 133 },
    update: {},
    create: {
      id: 133,
      enumerator: 'Radiador Agua',
    },
  });

  await prisma.partType.upsert({
    where: { id: 134 },
    update: {},
    create: {
      id: 134,
      enumerator: 'Rolamento Embreagem',
    },
  });

  await prisma.partType.upsert({
    where: { id: 135 },
    update: {},
    create: {
      id: 135,
      enumerator: 'Servo Embreagem',
    },
  });

  await prisma.partType.upsert({
    where: { id: 136 },
    update: {},
    create: {
      id: 136,
      enumerator: 'Caixa Rodas Traseira Direita',
    },
  });

  await prisma.partType.upsert({
    where: { id: 137 },
    update: {},
    create: {
      id: 137,
      enumerator: 'Camara',
    },
  });

  await prisma.partType.upsert({
    where: { id: 138 },
    update: {},
    create: {
      id: 138,
      enumerator: 'Camisa',
    },
  });

  await prisma.partType.upsert({
    where: { id: 139 },
    update: {},
    create: {
      id: 139,
      enumerator: 'Grampo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 140 },
    update: {},
    create: {
      id: 140,
      enumerator: 'Lampada',
    },
  });

  await prisma.partType.upsert({
    where: { id: 141 },
    update: {},
    create: {
      id: 141,
      enumerator: 'Capa',
    },
  });

  await prisma.partType.upsert({
    where: { id: 142 },
    update: {},
    create: {
      id: 142,
      enumerator: 'Capa Painel',
    },
  });

  await prisma.partType.upsert({
    where: { id: 143 },
    update: {},
    create: {
      id: 143,
      enumerator: 'Capa Seca',
    },
  });

  await prisma.partType.upsert({
    where: { id: 144 },
    update: {},
    create: {
      id: 144,
      enumerator: 'Capo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 145 },
    update: {},
    create: {
      id: 145,
      enumerator: 'Capota',
    },
  });

  await prisma.partType.upsert({
    where: { id: 146 },
    update: {},
    create: {
      id: 146,
      enumerator: 'Chapa',
    },
  });

  await prisma.partType.upsert({
    where: { id: 147 },
    update: {},
    create: {
      id: 147,
      enumerator: 'Maq. Acion. Vidro Manual',
    },
  });

  await prisma.partType.upsert({
    where: { id: 148 },
    update: {},
    create: {
      id: 148,
      enumerator: 'Barra',
    },
  });

  await prisma.partType.upsert({
    where: { id: 149 },
    update: {},
    create: {
      id: 149,
      enumerator: 'Carcaça',
    },
  });

  await prisma.partType.upsert({
    where: { id: 150 },
    update: {},
    create: {
      id: 150,
      enumerator: 'Batente',
    },
  });

  await prisma.partType.upsert({
    where: { id: 151 },
    update: {},
    create: {
      id: 151,
      enumerator: 'Bateria',
    },
  });

  await prisma.partType.upsert({
    where: { id: 152 },
    update: {},
    create: {
      id: 152,
      enumerator: 'Contato',
    },
  });

  await prisma.partType.upsert({
    where: { id: 153 },
    update: {},
    create: {
      id: 153,
      enumerator: 'Lateral Direita',
    },
  });

  await prisma.partType.upsert({
    where: { id: 154 },
    update: {},
    create: {
      id: 154,
      enumerator: 'Lateral Esquerda',
    },
  });

  await prisma.partType.upsert({
    where: { id: 155 },
    update: {},
    create: {
      id: 155,
      enumerator: 'Lateral Intermediaria Direita',
    },
  });

  await prisma.partType.upsert({
    where: { id: 156 },
    update: {},
    create: {
      id: 156,
      enumerator: 'Lateral Intermediaria Esquerda',
    },
  });

  await prisma.partType.upsert({
    where: { id: 157 },
    update: {},
    create: {
      id: 157,
      enumerator: 'Lateral Traseira Direita',
    },
  });

  await prisma.partType.upsert({
    where: { id: 158 },
    update: {},
    create: {
      id: 158,
      enumerator: 'Lateral Traseira Esquerda',
    },
  });

  await prisma.partType.upsert({
    where: { id: 159 },
    update: {},
    create: {
      id: 159,
      enumerator: 'DVD Automotivo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 160 },
    update: {},
    create: {
      id: 160,
      enumerator: 'Flauta Injetores',
    },
  });

  await prisma.partType.upsert({
    where: { id: 161 },
    update: {},
    create: {
      id: 161,
      enumerator: 'Modulo Cambio Automatico',
    },
  });

  await prisma.partType.upsert({
    where: { id: 162 },
    update: {},
    create: {
      id: 162,
      enumerator: 'Alavanca Freio',
    },
  });

  await prisma.partType.upsert({
    where: { id: 163 },
    update: {},
    create: {
      id: 163,
      enumerator: 'Trava',
    },
  });

  await prisma.partType.upsert({
    where: { id: 164 },
    update: {},
    create: {
      id: 164,
      enumerator: 'Travessa',
    },
  });

  await prisma.partType.upsert({
    where: { id: 165 },
    update: {},
    create: {
      id: 165,
      enumerator: 'Travessa - diversos',
    },
  });

  await prisma.partType.upsert({
    where: { id: 166 },
    update: {},
    create: {
      id: 166,
      enumerator: 'Gaxeta',
    },
  });

  await prisma.partType.upsert({
    where: { id: 167 },
    update: {},
    create: {
      id: 167,
      enumerator: 'Bomba Oleo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 168 },
    update: {},
    create: {
      id: 168,
      enumerator: 'Cobertura',
    },
  });

  await prisma.partType.upsert({
    where: { id: 169 },
    update: {},
    create: {
      id: 169,
      enumerator: 'Cobertura Motor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 170 },
    update: {},
    create: {
      id: 170,
      enumerator: 'Biela',
    },
  });

  await prisma.partType.upsert({
    where: { id: 171 },
    update: {},
    create: {
      id: 171,
      enumerator: 'Bieleta',
    },
  });

  await prisma.partType.upsert({
    where: { id: 172 },
    update: {},
    create: {
      id: 172,
      enumerator: 'Corpo Borboleta (TBI)',
    },
  });

  await prisma.partType.upsert({
    where: { id: 173 },
    update: {},
    create: {
      id: 173,
      enumerator: 'Trambulador',
    },
  });

  await prisma.partType.upsert({
    where: { id: 174 },
    update: {},
    create: {
      id: 174,
      enumerator: 'Porta-objetos',
    },
  });

  await prisma.partType.upsert({
    where: { id: 175 },
    update: {},
    create: {
      id: 175,
      enumerator: 'Bloco',
    },
  });

  await prisma.partType.upsert({
    where: { id: 176 },
    update: {},
    create: {
      id: 176,
      enumerator: 'Monobloco',
    },
  });

  await prisma.partType.upsert({
    where: { id: 177 },
    update: {},
    create: {
      id: 177,
      enumerator: 'Bocal',
    },
  });

  await prisma.partType.upsert({
    where: { id: 178 },
    update: {},
    create: {
      id: 178,
      enumerator: 'Braço',
    },
  });

  await prisma.partType.upsert({
    where: { id: 179 },
    update: {},
    create: {
      id: 179,
      enumerator: 'Dobradiça',
    },
  });

  await prisma.partType.upsert({
    where: { id: 180 },
    update: {},
    create: {
      id: 180,
      enumerator: 'Para-brisa',
    },
  });

  await prisma.partType.upsert({
    where: { id: 181 },
    update: {},
    create: {
      id: 181,
      enumerator: 'Quebra-mato',
    },
  });

  await prisma.partType.upsert({
    where: { id: 182 },
    update: {},
    create: {
      id: 182,
      enumerator: 'Quebra-vento',
    },
  });

  await prisma.partType.upsert({
    where: { id: 183 },
    update: {},
    create: {
      id: 183,
      enumerator: 'Distribuidor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 184 },
    update: {},
    create: {
      id: 184,
      enumerator: 'Modulo Injeção/UCE',
    },
  });

  await prisma.partType.upsert({
    where: { id: 185 },
    update: {},
    create: {
      id: 185,
      enumerator: 'Tanque Combustivel',
    },
  });

  await prisma.partType.upsert({
    where: { id: 186 },
    update: {},
    create: {
      id: 186,
      enumerator: 'Amortecedor - Diverso',
    },
  });

  await prisma.partType.upsert({
    where: { id: 187 },
    update: {},
    create: {
      id: 187,
      enumerator: 'Balanceiro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 188 },
    update: {},
    create: {
      id: 188,
      enumerator: 'Carroceria',
    },
  });

  await prisma.partType.upsert({
    where: { id: 189 },
    update: {},
    create: {
      id: 189,
      enumerator: 'Excentrico',
    },
  });

  await prisma.partType.upsert({
    where: { id: 190 },
    update: {},
    create: {
      id: 190,
      enumerator: 'Helice',
    },
  });

  await prisma.partType.upsert({
    where: { id: 191 },
    update: {},
    create: {
      id: 191,
      enumerator: 'Porta Central Lateral',
    },
  });

  await prisma.partType.upsert({
    where: { id: 192 },
    update: {},
    create: {
      id: 192,
      enumerator: 'Porta Central Lateral Diant.',
    },
  });

  await prisma.partType.upsert({
    where: { id: 193 },
    update: {},
    create: {
      id: 193,
      enumerator: 'Porta Central Lateral Tras.',
    },
  });

  await prisma.partType.upsert({
    where: { id: 194 },
    update: {},
    create: {
      id: 194,
      enumerator: 'Chassi',
    },
  });

  await prisma.partType.upsert({
    where: { id: 195 },
    update: {},
    create: {
      id: 195,
      enumerator: 'Chicote',
    },
  });

  await prisma.partType.upsert({
    where: { id: 196 },
    update: {},
    create: {
      id: 196,
      enumerator: 'Chicote Eletrico Principal',
    },
  });

  await prisma.partType.upsert({
    where: { id: 197 },
    update: {},
    create: {
      id: 197,
      enumerator: 'Fechadura',
    },
  });

  await prisma.partType.upsert({
    where: { id: 198 },
    update: {},
    create: {
      id: 198,
      enumerator: 'Cilindro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 199 },
    update: {},
    create: {
      id: 199,
      enumerator: 'Cilindro Mestre',
    },
  });

  await prisma.partType.upsert({
    where: { id: 200 },
    update: {},
    create: {
      id: 200,
      enumerator: 'Teclas',
    },
  });

  await prisma.partType.upsert({
    where: { id: 201 },
    update: {},
    create: {
      id: 201,
      enumerator: 'Cremalheira',
    },
  });

  await prisma.partType.upsert({
    where: { id: 202 },
    update: {},
    create: {
      id: 202,
      enumerator: 'Conector',
    },
  });

  await prisma.partType.upsert({
    where: { id: 203 },
    update: {},
    create: {
      id: 203,
      enumerator: 'Cubo Roda',
    },
  });

  await prisma.partType.upsert({
    where: { id: 204 },
    update: {},
    create: {
      id: 204,
      enumerator: 'Coluna Suspensão/Canela',
    },
  });

  await prisma.partType.upsert({
    where: { id: 205 },
    update: {},
    create: {
      id: 205,
      enumerator: 'Eixo Carda',
    },
  });

  await prisma.partType.upsert({
    where: { id: 206 },
    update: {},
    create: {
      id: 206,
      enumerator: 'Estrutura Porta',
    },
  });

  await prisma.partType.upsert({
    where: { id: 207 },
    update: {},
    create: {
      id: 207,
      enumerator: 'Longarina Dianteira Esquerda',
    },
  });

  await prisma.partType.upsert({
    where: { id: 208 },
    update: {},
    create: {
      id: 208,
      enumerator: 'Longarina Traseira Esquerda',
    },
  });

  await prisma.partType.upsert({
    where: { id: 209 },
    update: {},
    create: {
      id: 209,
      enumerator: 'Modulo Ignição',
    },
  });

  await prisma.partType.upsert({
    where: { id: 210 },
    update: {},
    create: {
      id: 210,
      enumerator: 'Mola Suspensão',
    },
  });

  await prisma.partType.upsert({
    where: { id: 211 },
    update: {},
    create: {
      id: 211,
      enumerator: 'Montante Suspensão',
    },
  });

  await prisma.partType.upsert({
    where: { id: 212 },
    update: {},
    create: {
      id: 212,
      enumerator: 'Motor Direção Eletrica',
    },
  });

  await prisma.partType.upsert({
    where: { id: 213 },
    update: {},
    create: {
      id: 213,
      enumerator: 'Motor Eletrico Fechadura',
    },
  });

  await prisma.partType.upsert({
    where: { id: 214 },
    update: {},
    create: {
      id: 214,
      enumerator: 'Pedal',
    },
  });

  await prisma.partType.upsert({
    where: { id: 215 },
    update: {},
    create: {
      id: 215,
      enumerator: 'Pedal Freio',
    },
  });

  await prisma.partType.upsert({
    where: { id: 216 },
    update: {},
    create: {
      id: 216,
      enumerator: 'Porta Dianteira Esquerda',
    },
  });

  await prisma.partType.upsert({
    where: { id: 217 },
    update: {},
    create: {
      id: 217,
      enumerator: 'Porta Traseira Esquerda',
    },
  });

  await prisma.partType.upsert({
    where: { id: 218 },
    update: {},
    create: {
      id: 218,
      enumerator: 'Roda',
    },
  });

  await prisma.partType.upsert({
    where: { id: 219 },
    update: {},
    create: {
      id: 219,
      enumerator: 'Roda Fonica',
    },
  });

  await prisma.partType.upsert({
    where: { id: 220 },
    update: {},
    create: {
      id: 220,
      enumerator: 'Tomada',
    },
  });

  await prisma.partType.upsert({
    where: { id: 221 },
    update: {},
    create: {
      id: 221,
      enumerator: 'Vedador',
    },
  });

  await prisma.partType.upsert({
    where: { id: 222 },
    update: {},
    create: {
      id: 222,
      enumerator: 'Coletor Escape',
    },
  });

  await prisma.partType.upsert({
    where: { id: 223 },
    update: {},
    create: {
      id: 223,
      enumerator: 'Coluna Direção',
    },
  });

  await prisma.partType.upsert({
    where: { id: 224 },
    update: {},
    create: {
      id: 224,
      enumerator: 'Eixo Comando Valvulas',
    },
  });

  await prisma.partType.upsert({
    where: { id: 225 },
    update: {},
    create: {
      id: 225,
      enumerator: 'Grade',
    },
  });

  await prisma.partType.upsert({
    where: { id: 226 },
    update: {},
    create: {
      id: 226,
      enumerator: 'Grade Dianteira',
    },
  });

  await prisma.partType.upsert({
    where: { id: 227 },
    update: {},
    create: {
      id: 227,
      enumerator: 'Medidor Fluxo Ar',
    },
  });

  await prisma.partType.upsert({
    where: { id: 228 },
    update: {},
    create: {
      id: 228,
      enumerator: 'Motor Arranque',
    },
  });

  await prisma.partType.upsert({
    where: { id: 229 },
    update: {},
    create: {
      id: 229,
      enumerator: 'Painel Instrumentos',
    },
  });

  await prisma.partType.upsert({
    where: { id: 230 },
    update: {},
    create: {
      id: 230,
      enumerator: 'Radiador Oleo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 231 },
    update: {},
    create: {
      id: 231,
      enumerator: 'Servo Freio',
    },
  });

  await prisma.partType.upsert({
    where: { id: 232 },
    update: {},
    create: {
      id: 232,
      enumerator: 'Tampa Comando Valvulas',
    },
  });

  await prisma.partType.upsert({
    where: { id: 233 },
    update: {},
    create: {
      id: 233,
      enumerator: 'Tubo Escapamento',
    },
  });

  await prisma.partType.upsert({
    where: { id: 234 },
    update: {},
    create: {
      id: 234,
      enumerator: 'Volante Direção',
    },
  });

  await prisma.partType.upsert({
    where: { id: 235 },
    update: {},
    create: {
      id: 235,
      enumerator: 'Disco Diverso',
    },
  });

  await prisma.partType.upsert({
    where: { id: 236 },
    update: {},
    create: {
      id: 236,
      enumerator: 'Disjuntor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 237 },
    update: {},
    create: {
      id: 237,
      enumerator: 'Eixo Dianteiro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 238 },
    update: {},
    create: {
      id: 238,
      enumerator: 'Fechadura Diversa',
    },
  });

  await prisma.partType.upsert({
    where: { id: 239 },
    update: {},
    create: {
      id: 239,
      enumerator: 'Indicador',
    },
  });

  await prisma.partType.upsert({
    where: { id: 240 },
    update: {},
    create: {
      id: 240,
      enumerator: 'Longarina Dianteira Direita',
    },
  });

  await prisma.partType.upsert({
    where: { id: 241 },
    update: {},
    create: {
      id: 241,
      enumerator: 'Longarina Traseira Direita',
    },
  });

  await prisma.partType.upsert({
    where: { id: 242 },
    update: {},
    create: {
      id: 242,
      enumerator: 'Medidor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 243 },
    update: {},
    create: {
      id: 243,
      enumerator: 'Modulo Eletronico Diesel',
    },
  });

  await prisma.partType.upsert({
    where: { id: 244 },
    update: {},
    create: {
      id: 244,
      enumerator: 'Motor Diverso',
    },
  });

  await prisma.partType.upsert({
    where: { id: 245 },
    update: {},
    create: {
      id: 245,
      enumerator: 'Painel Dianteiro Externo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 246 },
    update: {},
    create: {
      id: 246,
      enumerator: 'Para-choque Dianteiro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 247 },
    update: {},
    create: {
      id: 247,
      enumerator: 'Para-lama Dianteiro Direito',
    },
  });

  await prisma.partType.upsert({
    where: { id: 248 },
    update: {},
    create: {
      id: 248,
      enumerator: 'Comando',
    },
  });

  await prisma.partType.upsert({
    where: { id: 249 },
    update: {},
    create: {
      id: 249,
      enumerator: 'Comandos AC/Ventilação',
    },
  });

  await prisma.partType.upsert({
    where: { id: 250 },
    update: {},
    create: {
      id: 250,
      enumerator: 'Espaçador',
    },
  });

  await prisma.partType.upsert({
    where: { id: 251 },
    update: {},
    create: {
      id: 251,
      enumerator: 'Esticador',
    },
  });

  await prisma.partType.upsert({
    where: { id: 252 },
    update: {},
    create: {
      id: 252,
      enumerator: 'Limpador',
    },
  });

  await prisma.partType.upsert({
    where: { id: 253 },
    update: {},
    create: {
      id: 253,
      enumerator: 'Motor Eletrico Acion. Vidro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 254 },
    update: {},
    create: {
      id: 254,
      enumerator: 'Quadro Diverso',
    },
  });

  await prisma.partType.upsert({
    where: { id: 255 },
    update: {},
    create: {
      id: 255,
      enumerator: 'Vidro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 256 },
    update: {},
    create: {
      id: 256,
      enumerator: 'Vidro Traseiro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 257 },
    update: {},
    create: {
      id: 257,
      enumerator: 'Conduto',
    },
  });

  await prisma.partType.upsert({
    where: { id: 258 },
    update: {},
    create: {
      id: 258,
      enumerator: 'Modulo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 259 },
    update: {},
    create: {
      id: 259,
      enumerator: 'Moldura',
    },
  });

  await prisma.partType.upsert({
    where: { id: 260 },
    update: {},
    create: {
      id: 260,
      enumerator: 'Elemento Secador',
    },
  });

  await prisma.partType.upsert({
    where: { id: 261 },
    update: {},
    create: {
      id: 261,
      enumerator: 'Mecanismo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 262 },
    update: {},
    create: {
      id: 262,
      enumerator: 'Sobrecarter',
    },
  });

  await prisma.partType.upsert({
    where: { id: 263 },
    update: {},
    create: {
      id: 263,
      enumerator: 'Teto Intermediario',
    },
  });

  await prisma.partType.upsert({
    where: { id: 264 },
    update: {},
    create: {
      id: 264,
      enumerator: 'Reforço',
    },
  });

  await prisma.partType.upsert({
    where: { id: 265 },
    update: {},
    create: {
      id: 265,
      enumerator: 'Refrigerador Diverso',
    },
  });

  await prisma.partType.upsert({
    where: { id: 266 },
    update: {},
    create: {
      id: 266,
      enumerator: 'Regulador',
    },
  });

  await prisma.partType.upsert({
    where: { id: 267 },
    update: {},
    create: {
      id: 267,
      enumerator: 'Regulador Pressão',
    },
  });

  await prisma.partType.upsert({
    where: { id: 268 },
    update: {},
    create: {
      id: 268,
      enumerator: 'Correia',
    },
  });

  await prisma.partType.upsert({
    where: { id: 269 },
    update: {},
    create: {
      id: 269,
      enumerator: 'Eixo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 270 },
    update: {},
    create: {
      id: 270,
      enumerator: 'Eixo Traseiro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 271 },
    update: {},
    create: {
      id: 271,
      enumerator: 'Mangueira',
    },
  });

  await prisma.partType.upsert({
    where: { id: 272 },
    update: {},
    create: {
      id: 272,
      enumerator: 'Para-choque Traseiro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 273 },
    update: {},
    create: {
      id: 273,
      enumerator: 'Para-lama Dianteiro Esquerdo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 274 },
    update: {},
    create: {
      id: 274,
      enumerator: 'Para-lama Traseiro Direito',
    },
  });

  await prisma.partType.upsert({
    where: { id: 275 },
    update: {},
    create: {
      id: 275,
      enumerator: 'Para-lama Traseiro Esquerdo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 276 },
    update: {},
    create: {
      id: 276,
      enumerator: 'Ponteira',
    },
  });

  await prisma.partType.upsert({
    where: { id: 277 },
    update: {},
    create: {
      id: 277,
      enumerator: 'Porta Dianteira Direita',
    },
  });

  await prisma.partType.upsert({
    where: { id: 278 },
    update: {},
    create: {
      id: 278,
      enumerator: 'Porta Traseira Direita',
    },
  });

  await prisma.partType.upsert({
    where: { id: 279 },
    update: {},
    create: {
      id: 279,
      enumerator: 'Elos',
    },
  });

  await prisma.partType.upsert({
    where: { id: 280 },
    update: {},
    create: {
      id: 280,
      enumerator: 'Fusivel',
    },
  });

  await prisma.partType.upsert({
    where: { id: 281 },
    update: {},
    create: {
      id: 281,
      enumerator: 'Painel/Forro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 282 },
    update: {},
    create: {
      id: 282,
      enumerator: 'Rele',
    },
  });

  await prisma.partType.upsert({
    where: { id: 283 },
    update: {},
    create: {
      id: 283,
      enumerator: 'Relogio',
    },
  });

  await prisma.partType.upsert({
    where: { id: 284 },
    update: {},
    create: {
      id: 284,
      enumerator: 'Retrovisor Eletrico Direito',
    },
  });

  await prisma.partType.upsert({
    where: { id: 285 },
    update: {},
    create: {
      id: 285,
      enumerator: 'Retrovisor Eletrico Esquerdo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 286 },
    update: {},
    create: {
      id: 286,
      enumerator: 'Vela',
    },
  });

  await prisma.partType.upsert({
    where: { id: 287 },
    update: {},
    create: {
      id: 287,
      enumerator: 'Embolo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 288 },
    update: {},
    create: {
      id: 288,
      enumerator: 'Emissor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 289 },
    update: {},
    create: {
      id: 289,
      enumerator: 'Semi-eixo Direito',
    },
  });

  await prisma.partType.upsert({
    where: { id: 290 },
    update: {},
    create: {
      id: 290,
      enumerator: 'Semi-Eixo Direito Dianteiro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 291 },
    update: {},
    create: {
      id: 291,
      enumerator: 'Semi-Eixo Direito Traseiro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 292 },
    update: {},
    create: {
      id: 292,
      enumerator: 'Semi-eixo Esquerdo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 293 },
    update: {},
    create: {
      id: 293,
      enumerator: 'Semi-Eixo Esquerdo Traseiro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 294 },
    update: {},
    create: {
      id: 294,
      enumerator: 'Semi-Eixo Esquero Dianteiro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 295 },
    update: {},
    create: {
      id: 295,
      enumerator: 'Corrente',
    },
  });

  await prisma.partType.upsert({
    where: { id: 296 },
    update: {},
    create: {
      id: 296,
      enumerator: 'Extensão',
    },
  });

  await prisma.partType.upsert({
    where: { id: 297 },
    update: {},
    create: {
      id: 297,
      enumerator: 'Lente',
    },
  });

  await prisma.partType.upsert({
    where: { id: 298 },
    update: {},
    create: {
      id: 298,
      enumerator: 'Motor Ventoinha',
    },
  });

  await prisma.partType.upsert({
    where: { id: 299 },
    update: {},
    create: {
      id: 299,
      enumerator: 'Radiador Ar Quente',
    },
  });

  await prisma.partType.upsert({
    where: { id: 300 },
    update: {},
    create: {
      id: 300,
      enumerator: 'Retentor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 301 },
    update: {},
    create: {
      id: 301,
      enumerator: 'Rolamento Diverso',
    },
  });

  await prisma.partType.upsert({
    where: { id: 302 },
    update: {},
    create: {
      id: 302,
      enumerator: 'Sensor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 303 },
    update: {},
    create: {
      id: 303,
      enumerator: 'Silencioso',
    },
  });

  await prisma.partType.upsert({
    where: { id: 304 },
    update: {},
    create: {
      id: 304,
      enumerator: 'Tensionador',
    },
  });

  await prisma.partType.upsert({
    where: { id: 305 },
    update: {},
    create: {
      id: 305,
      enumerator: 'Vareta Oleo Motor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 306 },
    update: {},
    create: {
      id: 306,
      enumerator: 'Reparo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 307 },
    update: {},
    create: {
      id: 307,
      enumerator: 'Canister',
    },
  });

  await prisma.partType.upsert({
    where: { id: 308 },
    update: {},
    create: {
      id: 308,
      enumerator: 'Carter',
    },
  });

  await prisma.partType.upsert({
    where: { id: 309 },
    update: {},
    create: {
      id: 309,
      enumerator: 'Intercooler',
    },
  });

  await prisma.partType.upsert({
    where: { id: 310 },
    update: {},
    create: {
      id: 310,
      enumerator: 'Interruptor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 311 },
    update: {},
    create: {
      id: 311,
      enumerator: 'Lanterna',
    },
  });

  await prisma.partType.upsert({
    where: { id: 312 },
    update: {},
    create: {
      id: 312,
      enumerator: 'Reservatorio Diverso',
    },
  });

  await prisma.partType.upsert({
    where: { id: 313 },
    update: {},
    create: {
      id: 313,
      enumerator: 'Retrovisor Manual Esquerdo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 314 },
    update: {},
    create: {
      id: 314,
      enumerator: 'Terminal',
    },
  });

  await prisma.partType.upsert({
    where: { id: 315 },
    update: {},
    create: {
      id: 315,
      enumerator: 'Tubo Diverso',
    },
  });

  await prisma.partType.upsert({
    where: { id: 316 },
    update: {},
    create: {
      id: 316,
      enumerator: 'Estribo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 317 },
    update: {},
    create: {
      id: 317,
      enumerator: 'Presilha',
    },
  });

  await prisma.partType.upsert({
    where: { id: 318 },
    update: {},
    create: {
      id: 318,
      enumerator: 'Resistência',
    },
  });

  await prisma.partType.upsert({
    where: { id: 319 },
    update: {},
    create: {
      id: 319,
      enumerator: 'Turbo Compressor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 320 },
    update: {},
    create: {
      id: 320,
      enumerator: 'Canaleta',
    },
  });

  await prisma.partType.upsert({
    where: { id: 321 },
    update: {},
    create: {
      id: 321,
      enumerator: 'Coletor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 322 },
    update: {},
    create: {
      id: 322,
      enumerator: 'Maçaneta',
    },
  });

  await prisma.partType.upsert({
    where: { id: 323 },
    update: {},
    create: {
      id: 323,
      enumerator: 'Protetor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 324 },
    update: {},
    create: {
      id: 324,
      enumerator: 'Retificador',
    },
  });

  await prisma.partType.upsert({
    where: { id: 325 },
    update: {},
    create: {
      id: 325,
      enumerator: 'Retrovisor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 326 },
    update: {},
    create: {
      id: 326,
      enumerator: 'Retrovisor Manual Direito',
    },
  });

  await prisma.partType.upsert({
    where: { id: 327 },
    update: {},
    create: {
      id: 327,
      enumerator: 'Rolete',
    },
  });

  await prisma.partType.upsert({
    where: { id: 328 },
    update: {},
    create: {
      id: 328,
      enumerator: 'Tapete',
    },
  });

  await prisma.partType.upsert({
    where: { id: 329 },
    update: {},
    create: {
      id: 329,
      enumerator: 'Teto Completo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 330 },
    update: {},
    create: {
      id: 330,
      enumerator: 'Pneu',
    },
  });

  await prisma.partType.upsert({
    where: { id: 331 },
    update: {},
    create: {
      id: 331,
      enumerator: 'Conexão',
    },
  });

  await prisma.partType.upsert({
    where: { id: 332 },
    update: {},
    create: {
      id: 332,
      enumerator: 'Extintor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 333 },
    update: {},
    create: {
      id: 333,
      enumerator: 'Flexivel Diverso',
    },
  });

  await prisma.partType.upsert({
    where: { id: 334 },
    update: {},
    create: {
      id: 334,
      enumerator: 'Filtro',
    },
  });

  await prisma.partType.upsert({
    where: { id: 335 },
    update: {},
    create: {
      id: 335,
      enumerator: 'Forração',
    },
  });

  await prisma.partType.upsert({
    where: { id: 336 },
    update: {},
    create: {
      id: 336,
      enumerator: 'Garfo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 337 },
    update: {},
    create: {
      id: 337,
      enumerator: 'Disco Freio',
    },
  });

  await prisma.partType.upsert({
    where: { id: 338 },
    update: {},
    create: {
      id: 338,
      enumerator: 'Frente',
    },
  });

  await prisma.partType.upsert({
    where: { id: 339 },
    update: {},
    create: {
      id: 339,
      enumerator: 'Frente Comp. Carga/Divisoria',
    },
  });

  await prisma.partType.upsert({
    where: { id: 340 },
    update: {},
    create: {
      id: 340,
      enumerator: 'Friso',
    },
  });

  await prisma.partType.upsert({
    where: { id: 341 },
    update: {},
    create: {
      id: 341,
      enumerator: 'Lona freio',
    },
  });

  await prisma.partType.upsert({
    where: { id: 342 },
    update: {},
    create: {
      id: 342,
      enumerator: 'Pastilha freio',
    },
  });

  await prisma.partType.upsert({
    where: { id: 343 },
    update: {},
    create: {
      id: 343,
      enumerator: 'Pinça Freio',
    },
  });

  await prisma.partType.upsert({
    where: { id: 344 },
    update: {},
    create: {
      id: 344,
      enumerator: 'Tambor Freio',
    },
  });

  await prisma.partType.upsert({
    where: { id: 345 },
    update: {},
    create: {
      id: 345,
      enumerator: 'Teto Frente',
    },
  });

  await prisma.partType.upsert({
    where: { id: 346 },
    update: {},
    create: {
      id: 346,
      enumerator: 'Gargalo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 347 },
    update: {},
    create: {
      id: 347,
      enumerator: 'Longarina',
    },
  });

  await prisma.partType.upsert({
    where: { id: 348 },
    update: {},
    create: {
      id: 348,
      enumerator: 'Porta Traseira Compart. Carga',
    },
  });

  await prisma.partType.upsert({
    where: { id: 349 },
    update: {},
    create: {
      id: 349,
      enumerator: 'Porta Traseira Dir. Comp Carga',
    },
  });

  await prisma.partType.upsert({
    where: { id: 350 },
    update: {},
    create: {
      id: 350,
      enumerator: 'Porta Traseira Esq. Comp Carga',
    },
  });

  await prisma.partType.upsert({
    where: { id: 351 },
    update: {},
    create: {
      id: 351,
      enumerator: 'Proteção Plastica Comp. Carga',
    },
  });

  await prisma.partType.upsert({
    where: { id: 352 },
    update: {},
    create: {
      id: 352,
      enumerator: 'Gigle',
    },
  });

  await prisma.partType.upsert({
    where: { id: 353 },
    update: {},
    create: {
      id: 353,
      enumerator: 'Guia',
    },
  });

  await prisma.partType.upsert({
    where: { id: 354 },
    update: {},
    create: {
      id: 354,
      enumerator: 'Triangulo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 355 },
    update: {},
    create: {
      id: 355,
      enumerator: 'Haste',
    },
  });

  await prisma.partType.upsert({
    where: { id: 356 },
    update: {},
    create: {
      id: 356,
      enumerator: 'Ventoinha',
    },
  });

  await prisma.partType.upsert({
    where: { id: 357 },
    update: {},
    create: {
      id: 357,
      enumerator: 'Homocinetica',
    },
  });

  await prisma.partType.upsert({
    where: { id: 358 },
    update: {},
    create: {
      id: 358,
      enumerator: 'Portinhola',
    },
  });

  await prisma.partType.upsert({
    where: { id: 359 },
    update: {},
    create: {
      id: 359,
      enumerator: 'Tucho',
    },
  });

  await prisma.partType.upsert({
    where: { id: 360 },
    update: {},
    create: {
      id: 360,
      enumerator: 'Tucho Motor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 361 },
    update: {},
    create: {
      id: 361,
      enumerator: 'Correia Motor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 362 },
    update: {},
    create: {
      id: 362,
      enumerator: 'Polia',
    },
  });

  await prisma.partType.upsert({
    where: { id: 363 },
    update: {},
    create: {
      id: 363,
      enumerator: 'Polia Motor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 364 },
    update: {},
    create: {
      id: 364,
      enumerator: 'Saia',
    },
  });

  await prisma.partType.upsert({
    where: { id: 365 },
    update: {},
    create: {
      id: 365,
      enumerator: 'Estribo Direito',
    },
  });

  await prisma.partType.upsert({
    where: { id: 366 },
    update: {},
    create: {
      id: 366,
      enumerator: 'Caixa Direção Elétrica',
    },
  });

  await prisma.partType.upsert({
    where: { id: 367 },
    update: {},
    create: {
      id: 367,
      enumerator: 'Coluna Direção Elétrica',
    },
  });

  await prisma.partType.upsert({
    where: { id: 368 },
    update: {},
    create: {
      id: 368,
      enumerator: 'Posicionador',
    },
  });

  await prisma.partType.upsert({
    where: { id: 369 },
    update: {},
    create: {
      id: 369,
      enumerator: 'Ventilador',
    },
  });

  await prisma.partType.upsert({
    where: { id: 370 },
    update: {},
    create: {
      id: 370,
      enumerator: 'Coxim',
    },
  });

  await prisma.partType.upsert({
    where: { id: 371 },
    update: {},
    create: {
      id: 371,
      enumerator: 'Simbolo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 372 },
    update: {},
    create: {
      id: 372,
      enumerator: 'Tulipa',
    },
  });

  await prisma.partType.upsert({
    where: { id: 373 },
    update: {},
    create: {
      id: 373,
      enumerator: 'Janela',
    },
  });

  await prisma.partType.upsert({
    where: { id: 374 },
    update: {},
    create: {
      id: 374,
      enumerator: 'Corpo Injeção Monoponto',
    },
  });

  await prisma.partType.upsert({
    where: { id: 375 },
    update: {},
    create: {
      id: 375,
      enumerator: 'Conjunto',
    },
  });

  await prisma.partType.upsert({
    where: { id: 376 },
    update: {},
    create: {
      id: 376,
      enumerator: 'Junta',
    },
  });

  await prisma.partType.upsert({
    where: { id: 377 },
    update: {},
    create: {
      id: 377,
      enumerator: 'Calota',
    },
  });

  await prisma.partType.upsert({
    where: { id: 378 },
    update: {},
    create: {
      id: 378,
      enumerator: 'Miolo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 379 },
    update: {},
    create: {
      id: 379,
      enumerator: 'Bolsa',
    },
  });

  await prisma.partType.upsert({
    where: { id: 380 },
    update: {},
    create: {
      id: 380,
      enumerator: 'Coluna',
    },
  });

  await prisma.partType.upsert({
    where: { id: 381 },
    update: {},
    create: {
      id: 381,
      enumerator: 'Coluna Diversa',
    },
  });

  await prisma.partType.upsert({
    where: { id: 382 },
    update: {},
    create: {
      id: 382,
      enumerator: 'Plug',
    },
  });

  await prisma.partType.upsert({
    where: { id: 383 },
    update: {},
    create: {
      id: 383,
      enumerator: 'Porta-luvas',
    },
  });

  await prisma.partType.upsert({
    where: { id: 384 },
    update: {},
    create: {
      id: 384,
      enumerator: 'Corpo Válvulas',
    },
  });

  await prisma.partType.upsert({
    where: { id: 385 },
    update: {},
    create: {
      id: 385,
      enumerator: 'Valvula',
    },
  });

  await prisma.partType.upsert({
    where: { id: 386 },
    update: {},
    create: {
      id: 386,
      enumerator: 'Valvula Motor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 387 },
    update: {},
    create: {
      id: 387,
      enumerator: 'Mancal',
    },
  });

  await prisma.partType.upsert({
    where: { id: 388 },
    update: {},
    create: {
      id: 388,
      enumerator: 'Limitador',
    },
  });

  await prisma.partType.upsert({
    where: { id: 389 },
    update: {},
    create: {
      id: 389,
      enumerator: 'Mola',
    },
  });

  await prisma.partType.upsert({
    where: { id: 390 },
    update: {},
    create: {
      id: 390,
      enumerator: 'Tampa',
    },
  });

  await prisma.partType.upsert({
    where: { id: 391 },
    update: {},
    create: {
      id: 391,
      enumerator: 'Pinhão',
    },
  });

  await prisma.partType.upsert({
    where: { id: 392 },
    update: {},
    create: {
      id: 392,
      enumerator: 'Santo Antonio',
    },
  });

  await prisma.partType.upsert({
    where: { id: 393 },
    update: {},
    create: {
      id: 393,
      enumerator: 'União',
    },
  });

  await prisma.partType.upsert({
    where: { id: 394 },
    update: {},
    create: {
      id: 394,
      enumerator: 'Manopla',
    },
  });

  await prisma.partType.upsert({
    where: { id: 395 },
    update: {},
    create: {
      id: 395,
      enumerator: 'Pino',
    },
  });

  await prisma.partType.upsert({
    where: { id: 396 },
    update: {},
    create: {
      id: 396,
      enumerator: 'Sensor Motor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 397 },
    update: {},
    create: {
      id: 397,
      enumerator: 'Tensionador Motor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 398 },
    update: {},
    create: {
      id: 398,
      enumerator: 'Manual',
    },
  });

  await prisma.partType.upsert({
    where: { id: 399 },
    update: {},
    create: {
      id: 399,
      enumerator: 'Conversor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 400 },
    update: {},
    create: {
      id: 400,
      enumerator: 'Coroa',
    },
  });

  await prisma.partType.upsert({
    where: { id: 401 },
    update: {},
    create: {
      id: 401,
      enumerator: 'Roda Livre',
    },
  });

  await prisma.partType.upsert({
    where: { id: 402 },
    update: {},
    create: {
      id: 402,
      enumerator: 'Para-sol',
    },
  });

  await prisma.partType.upsert({
    where: { id: 403 },
    update: {},
    create: {
      id: 403,
      enumerator: 'Volante',
    },
  });

  await prisma.partType.upsert({
    where: { id: 404 },
    update: {},
    create: {
      id: 404,
      enumerator: 'Ponta',
    },
  });

  await prisma.partType.upsert({
    where: { id: 405 },
    update: {},
    create: {
      id: 405,
      enumerator: 'Botão',
    },
  });

  await prisma.partType.upsert({
    where: { id: 406 },
    update: {},
    create: {
      id: 406,
      enumerator: 'Corrente Motor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 407 },
    update: {},
    create: {
      id: 407,
      enumerator: 'Motor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 408 },
    update: {},
    create: {
      id: 408,
      enumerator: 'Pistão Motor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 409 },
    update: {},
    create: {
      id: 409,
      enumerator: 'Suporte Motor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 410 },
    update: {},
    create: {
      id: 410,
      enumerator: 'Vela Motor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 411 },
    update: {},
    create: {
      id: 411,
      enumerator: 'Sapata',
    },
  });

  await prisma.partType.upsert({
    where: { id: 412 },
    update: {},
    create: {
      id: 412,
      enumerator: 'Tampa Porta-Malas',
    },
  });

  await prisma.partType.upsert({
    where: { id: 413 },
    update: {},
    create: {
      id: 413,
      enumerator: 'Pinça',
    },
  });

  await prisma.partType.upsert({
    where: { id: 414 },
    update: {},
    create: {
      id: 414,
      enumerator: 'Pisante',
    },
  });

  await prisma.partType.upsert({
    where: { id: 415 },
    update: {},
    create: {
      id: 415,
      enumerator: 'Pisca',
    },
  });

  await prisma.partType.upsert({
    where: { id: 416 },
    update: {},
    create: {
      id: 416,
      enumerator: 'Pistão',
    },
  });

  await prisma.partType.upsert({
    where: { id: 417 },
    update: {},
    create: {
      id: 417,
      enumerator: 'Pivo',
    },
  });

  await prisma.partType.upsert({
    where: { id: 418 },
    update: {},
    create: {
      id: 418,
      enumerator: 'Placa',
    },
  });

  await prisma.partType.upsert({
    where: { id: 419 },
    update: {},
    create: {
      id: 419,
      enumerator: 'Platinado',
    },
  });

  await prisma.partType.upsert({
    where: { id: 420 },
    update: {},
    create: {
      id: 420,
      enumerator: 'Porca',
    },
  });

  await prisma.partType.upsert({
    where: { id: 421 },
    update: {},
    create: {
      id: 421,
      enumerator: 'Suporte',
    },
  });

  await prisma.partType.upsert({
    where: { id: 422 },
    update: {},
    create: {
      id: 422,
      enumerator: 'Puxador',
    },
  });

  await prisma.partType.upsert({
    where: { id: 423 },
    update: {},
    create: {
      id: 423,
      enumerator: 'Vareta',
    },
  });

  await prisma.partType.upsert({
    where: { id: 424 },
    update: {},
    create: {
      id: 424,
      enumerator: 'Radio',
    },
  });

  await prisma.partType.upsert({
    where: { id: 425 },
    update: {},
    create: {
      id: 425,
      enumerator: 'Tambor',
    },
  });

  await prisma.partType.upsert({
    where: { id: 426 },
    update: {},
    create: {
      id: 426,
      enumerator: 'Tampa Dianteira',
    },
  });

  await prisma.partType.upsert({
    where: { id: 427 },
    update: {},
    create: {
      id: 427,
      enumerator: 'Tampa Traseira',
    },
  });

  await prisma.partType.upsert({
    where: { id: 428 },
    update: {},
    create: {
      id: 428,
      enumerator: 'Tampão',
    },
  });

  await prisma.partType.upsert({
    where: { id: 429 },
    update: {},
    create: {
      id: 429,
      enumerator: 'Traseira',
    },
  });

  await prisma.partType.upsert({
    where: { id: 430 },
    update: {},
    create: {
      id: 430,
      enumerator: 'Calço',
    },
  });

  await prisma.partType.upsert({
    where: { id: 431 },
    update: {},
    create: {
      id: 431,
      enumerator: 'Cinta',
    },
  });

  await prisma.partType.upsert({
    where: { id: 432 },
    update: {},
    create: {
      id: 432,
      enumerator: 'Câmera',
    },
  });

  await prisma.partType.upsert({
    where: { id: 433 },
    update: {},
    create: {
      id: 433,
      enumerator: 'Teto Traseiro',
    },
  });
  console.log('PartType seed done');
}
