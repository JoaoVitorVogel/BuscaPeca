# Etapa de build
FROM node:18-alpine3.16 AS builder

ARG DATABASE_URL

WORKDIR /app

RUN npm i -g @nestjs/cli

# Copiar os arquivos necessários
COPY package*.json ./
COPY tsconfig*.json ./
COPY prisma ./prisma
COPY src ./src

RUN npm install

# Gerar o cliente do Prisma durante o build
RUN npx prisma generate

# Compilar a aplicação NestJS e o seed.ts
RUN npm run build

# Etapa final
FROM node:18-alpine3.16

WORKDIR /app

# Copiar as dependências instaladas
COPY --from=builder /app/node_modules ./node_modules

# Copiar os arquivos necessários
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/tsconfig*.json ./
COPY --from=builder /app/prisma ./prisma

# Copiar a aplicação compilada
COPY --from=builder /app/dist ./dist

# Expor a porta da aplicação
EXPOSE 3000

# Comando para rodar as migrações e iniciar a aplicação
CMD ["npm", "run", "start:docker"]
# CMD ["sleep", "3600"]

