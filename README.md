Projeto: API usando nodejs,TypeScript, express, prisma e sqlite.
    
    Intuito do projeto é relembrar TS,Nodejs e express e aprender a desenvolver
    com o ORM Prisma.
    
    
    Iniciei o projeto criando a pasta "src" e instalando o pckg.jason para configurar.
    Instalei as dependencias usando o script: yarn add prisma ts-node-dev @types/express -D

Iniciei o server.ts ouvindo o servidor 3333 apontando que o server estava rodando através do console.log.
    
    - Iniciei o prisma, e passei para o provider o sqlite.
    configurei o tsconfig através do script oferecido pela doc do prisma
    
    - Criei as colunas dentro do schema.prisma: user, email, password.
    usei @unique para não permitir se repetir os emails
    @@map = usado para renomear a tabela no banco
    
    - Após criar as tabela iniciei a migration com prisma migrate dev
    
    - Está sendo usado a extensão mysql para conectar ao dev.db, também foi usado
    o prisma studio para visualizar as tabelas.

Momento Atual: Criar códigos no nodejs como: rotas, cotrollers e models.



Fonte/Ref: https://youtu.be/NDWV5hHSPBk?list=PLY_G6KZ7jlfVpuR6MWbfH6QFsV8bBFOxN



